<script>
  import Button from './Button.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let task;
  export let details;
  export let deadline;
</script>

<div>
  <h1>{task}</h1>
  {details}
  <p>
    Deadline {deadline}
  </p>
  <Button
    on:click={() => {
      dispatch('done', {
        task: task,
        details: details,
        deadline: deadline,
      });
    }}>Mark as done</Button
  >
  <Button
    on:click={() => {
      dispatch('delete', task);
    }}>Delete</Button
  >
</div>

<style>
  div {
    background-color: #fff;
    padding: 20px;
    border-radius: 30px;
    width: 50%;
    margin: 20px;
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
    color: #c4c4c4;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
  }
</style>
