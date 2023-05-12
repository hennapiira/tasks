<script>
  export let label;
  export let labelheader;
  export let value;

  //validointiin liittyvät muuttujat
  export let valid;
</script>

<label for={label}>{labelheader}</label><br />
<input id={label} type="text" bind:value class:tyhja={!valid} />

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
    width: 80%;
  }
</style>
