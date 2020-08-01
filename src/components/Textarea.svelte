<script>
  export let name;
</script>

<style>
  textarea {
    background-color: var(--primary);
    border: 1px solid var(--primary-trans);
    width: 100%;
    height: 200px;
    font-size: var(--font-small);
    font-family: var(--main-font);
    color: #fff;
    resize: none;
    padding: 5px 10px;
  }

  textarea:focus {
    outline: 2px solid #fff;
  }
</style>

<textarea {name} on:keyup on:blur />