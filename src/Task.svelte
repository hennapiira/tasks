<script>
  import Button from './Button.svelte';
  import { scale, fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import allTasks from './taskStore.js';
  const dispatch = createEventDispatcher();

  // Initialize an empty array tasks
  let tasks = [];

  // Update the value of the tasks array if the store value changes
  allTasks.subscribe((value) => {
    tasks = value;
  });
</script>

{#each tasks as task}
  <!-- in:fly = the element appears with a fly transition moving upward on the y-axis (-100 pixels) over 400 milliseconds.
out:scale = the element exits with a scale transition -->
  <div in:fly={{ y: -100, duration: 400 }} out:scale>
    <h1>{task.task}</h1>
    <p>{task.details}</p>
    <!-- The deadline is only displayed if the day and month values of the task's deadline are not empty -->
    {#if task.deadline.day > 0 && task.deadline.month !== ''}
      <p class="deadline">
        Deadline {task.deadline.day}
        {task.deadline.month}
      </p>
    {/if}
    <!-- "Mark as done" button that dispatches a custom event 'done' along with the corresponding task. -->
    <Button
      on:click={() => {
        dispatch('done', task);
      }}>Mark as done</Button
    >
    <!-- "Delete" button that dispatches a custom event 'delete' along with the corresponding task. -->
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
