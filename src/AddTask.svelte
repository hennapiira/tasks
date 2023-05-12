<script>
  import TextInput from './TextInput.svelte';
  import Modal from './Modal.svelte';
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';
  const dispatch = createEventDispatcher();

  let task;
  let details;
  let deadline;
</script>

<Modal>
  <div slot="header"><h1>Add new task</h1></div>
  <div>
    <form>
      <TextInput label="task" labelheader="Task" bind:value={task} />
      <br />
      <TextInput
        label="details"
        labelheader="Details (optional)"
        bind:value={details}
      />
      <br />
      <TextInput
        label="deadline"
        labelheader="Should be done by"
        bind:value={deadline}
      />
    </form>
  </div>

  <div slot="footer">
    <Button on:click={() => dispatch('cancel')}>Go back</Button>
    <Button
      on:click={() =>
        dispatch('save', {
          task: task,
          details: details,
          deadline: deadline,
        })}>Save</Button
    >
  </div>
</Modal>

<style>
</style>
