<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Logo from "./Logo.svelte";
  import Menu from "./Menu.svelte";
</script>

<style>
  .modal {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    padding: 20px;
  }

  .logo {
    display: block;
    width: 50px;
    margin-right: 20px;
  }

  @media (min-width: 400px) and (min-height: 400px) {
    .logo {
      width: 75px;
    }
  }

  @media (min-width: 600px) and (min-height: 600px) {
    .logo {
      width: 100px;
    }
  }
</style>

<div class="modal" transition:fade>
  <header>
    <a href="/" class="logo">
      <Logo color="var(--primary)" />
    </a>
    <div class="menu">
      <Menu />
    </div>
  </header>
  <div>
    <slot />
  </div>
</div>
