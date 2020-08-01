<script>
  export let type = "text";
  export let name;
</script>

<style>
  input {
    background-color: var(--primary);
    border: 1px solid var(--primary-trans);
    width: 100%;
    height: 50px;
    font-size: var(--font-small);
    font-family: var(--main-font);
    color: #fff;
    padding: 5px 10px;
  }

  input:focus {
    outline: 2px solid #fff;
  }
</style>

<input {type} {name} on:keyup on:blur />
