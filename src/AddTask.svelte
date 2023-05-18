<script>
  import TextInput from './TextInput.svelte';
  import Modal from './Modal.svelte';
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';
  const dispatch = createEventDispatcher();

  let task = '';
  let details = '';
  let deadline = {
    day: '',
    month: '',
  };

  // Tehdään days-taulukko, joka sisältää 31 alkiota ja määritellään
  // niiden arvoksi 1-31
  let days = Array.from(Array(31), (_, i) => i + 1);

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // tarkistetaan onko tehtävä kenttä tyhjä
  $: taskValid = task.trim().length > 0;

  // määritellään virhe-ilmoitus omassa muuttujassa
  let errmsg = 'Field must have value!';
</script>

<Modal>
  <div>
    <form>
      <TextInput
        label="task"
        labelheader="Task"
        valid={taskValid}
        {errmsg}
        bind:value={task}
      />
      <br />

      <h2>Details (optional)</h2>
      <textarea id="details" bind:value={details} />
      <br />

      <h2>Deadline (optional)</h2>
      <label for="day">Day</label>
      <select id="day" bind:value={deadline.day}>
        {#each days as day}
          <option value={day}>{day}</option>
        {/each}
      </select>

      <label for="month">Month</label>
      <select id="month" bind:value={deadline.month}>
        {#each months as month}
          <option value={month}>{month}</option>
        {/each}
      </select>
    </form>
  </div>

  <div slot="footer" class="footer">
    <Button on:click={() => dispatch('cancel')}>Go back</Button>
    <Button
      on:click={() =>
        dispatch('save', {
          task: task,
          details: details,
          deadline: deadline,
        })}
      disabled={!taskValid}>Save</Button
    >
  </div>
</Modal>

<style>
  .footer {
    margin-top: 30px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  h2 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
  }

  select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
  }

  textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 87%;
    font-size: 16px;
    font-family: sans-serif;
  }
</style>
