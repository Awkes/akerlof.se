<script>
  export let type = "submit";
  export let disabled = false;
</script>

<style>
  button {
    background-color: var(--primary);
    border: 1px solid var(--primary-trans);
    width: fit-content;
    font-size: var(--font-small);
    font-family: var(--main-font);
    color: #fff;
    padding: 5px 20px;
    cursor: pointer;
    transition: border ease-in-out .1s;
  }

  button:focus {
    outline: 2px solid #fff;
  }

  button:hover {
    border-color: #fff;
  }

  button:disabled {
    background-color: #aaa;
    border-color: #555;
    color: #555;
    cursor: default;
  }
</style>

<button {type} {disabled}>
  <slot />
</button>
