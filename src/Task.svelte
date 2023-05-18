<script>
  import Button from './Button.svelte';
  import { scale, fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import allTasks from './taskStore.js';
  const dispatch = createEventDispatcher();

  // alustetaan tyhjä taulukko tasks
  let tasks = [];

  // Päivitetään tasks-taulukon arvoa, mikäli storen arvo päivittyy
  allTasks.subscribe((value) => {
    tasks = value;
  });
</script>

{#each tasks as task}
  <div in:fly={{ y: -100, duration: 400 }} out:scale>
    <h1>{task.task}</h1>
    <p>{task.details}</p>

    {#if task.deadline.day > 0 && task.deadline.month !== ''}
      <p class="deadline">
        Deadline {task.deadline.day}
        {task.deadline.month}
      </p>
    {/if}

    <Button
      on:click={() => {
        dispatch('done', task);
      }}>Mark as done</Button
    >
    <Button
      on:click={() => {
        dispatch('delete', task);
      }}>Delete</Button
    >
  </div>{/each}

<style>
  div {
    background-color: #fff;
    padding: 20px;
    border-radius: 30px;
    width: 50%;
    font-size: 0.85rem;
    text-align: center;
    box-shadow: 0px 0px 10px #6e6d6d;
  }

  h1 {
    background-color: #f2def7;
    color: #cfa1cf;
    padding: 10px;
    border-radius: 70px;
    font-size: 0.9rem;
  }

  p {
    font-family: sans-serif;
  }

  .deadline {
    color: #c4c4c4;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
  }
</style>
