<script>
  import { scale } from 'svelte/transition';
  export let task;
  export let details;
  export let deadline = {
    day: 0,
    month: '',
  };
</script>

<!--in:scale = elementti tulee näkyviin scale transitionilla-->
<div in:scale>
  <h1>{task}</h1>
  {details}
  {#if deadline.day > 0 && deadline.month !== ''}
    <p>
      Deadline was {deadline.day}
      {deadline.month}
    </p>
  {/if}
</div>

<style>
  div {
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 30px;
    width: 50%;
    margin: 20px;
    font-size: 0.85rem;
    text-align: center;
    opacity: 50%;
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
