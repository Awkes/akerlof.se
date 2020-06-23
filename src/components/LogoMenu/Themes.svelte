<script>
  import { themes, setTheme } from "../../themes";

  function selectTheme(e) {
    setTheme(e.target.dataset.themeIndex);
  }
</script>

<style>
  .theme {
    width: 100%;
    margin: 0 auto;
    height: 50%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    align-items: end;
    justify-content: center;
  }

  .theme-button {
    height: 100%;
    cursor: pointer;
    position: relative;
    border: 0;
    outline: 0;
  }
</style>

<div class="theme">
  {#each themes as theme, i}
    <button
      type="button"
      class="theme-button"
      data-theme-index={i}
      on:click={selectTheme}
      style={`background-color: ${theme.primaryTrans};`} />
  {/each}
</div>
