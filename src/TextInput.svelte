<script>
  export let label;
  export let labelheader;
  export let value;

  // Validation variables
  export let valid;
  export let errmsg;
  export let firstVisit = true;
</script>

<label for={label}>{labelheader}</label><br />
<input
  id={label}
  type="text"
  bind:value
  class:tyhja={!valid}
  on:blur={() => (firstVisit = false)}
/>
{#if !firstVisit && !valid}
  <p class="errmsg">{errmsg}</p>
{/if}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  label {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
  }
  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
    width: 87%;
  }
  .errmsg {
    color: red;
    font-size: 0.8em;
    float: right;
    font-weight: 700;
  }
</style>
