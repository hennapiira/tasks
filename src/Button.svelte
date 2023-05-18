<script>
  export let disabled;
</script>

<button on:click {disabled}><slot /></button>

<style>
  button {
    background-color: #7783ed;
    border-radius: 30px;
    color: #fff;
    padding: 8px;
    font-size: 0.7rem;
    border: 0px;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 10px;
    margin-top: 10px;
  }

  button:hover {
    background-color: #9ba4f4;
    border: 0;
  }

  button:disabled {
    background-color: #9ba4f4;
  }
</style>
