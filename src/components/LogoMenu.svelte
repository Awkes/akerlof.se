<script>
  import Logo from "./Logo.svelte";
  import CurvedText from "./CurvedText.svelte";
  import { themes, setTheme } from "../themes"

  function selectTheme(e) {
    setTheme(e.target.dataset.themeIndex);
  }
</script>

<style>
  .container,
  .menu,
  .logo {
    border-radius: 50%;
    transition: ease-in-out 0.2s;
  }

  .container,
  .logo {
    width: 150px;
  }
  .menu,
  .logo {
    position: absolute;
    overflow: hidden;
  }

  .container {
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .menu {
    width: 250px;
    height: 250px;
    transform: scale(0);
    background-color: var(--primary-trans);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container:hover .menu {
    transform: scale(1);
    border: 2px solid var(--primary);
  }

  .logo {
    border: 2px solid #fff;
    padding: 10px;
    background-color: #000;
  }

  .container:hover .logo {
    border-color: var(--primary);
  }

  .container:hover .logo :global(circle) {
    stroke: var(--primary) !important;
  }

  .container:hover .logo :global(path) {
    fill: var(--primary) !important;
  }

  @media (min-width: 500px) and (min-height: 500px) {
    .container,
    .logo {
      width: 300px;
    }
    .container {
      height: 300px;
    }

    .menu {
      width: 400px;
      height: 400px;
    }
  }

  .heading, .theme {
    height: 50%;
  }

  .theme {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
  }
  
  .theme-button {
    height: 100%;
    border: 0;
    cursor: pointer;
 }
</style>

<div class="container">
  <div class="menu">
    <div class="heading">
      <CurvedText>Andreas Åkerlöf - Frontend developer</CurvedText>
    </div>
    <div class="theme">
      {#each themes as theme, i}
        <button 
          class="theme-button"
          data-theme-index={i} 
          on:click={selectTheme} 
          style={`background-color: ${theme.primary}`}
        />
      {/each}
    </div>
  </div>
  <div class="logo">
    <Logo />
  </div>
</div>
