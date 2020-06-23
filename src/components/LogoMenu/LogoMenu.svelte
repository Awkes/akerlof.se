<script>
  import { stores } from "@sapper/app";
  import { onDestroy } from "svelte";
  import Logo from "../Logo.svelte";
  import Heading from "./Heading.svelte";
  import Themes from "./Themes.svelte";

  export let text;
  let logo;
  let deg = 0;

  function rotateLogo() {
    deg = deg === 0 ? 720 : 0;
    if (logo) logo.style = `transform: rotate(${deg}deg)`;
  }

  const { page } = stores();
  const unsubscribe = page.subscribe(() => rotateLogo());
  onDestroy(unsubscribe);
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
    transition: ease-in-out 0.5s;
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
    width: 200px;
    height: 200px;
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
</style>

<div class="container">
  <div class="menu">
    <Heading>{text}</Heading>
    <Themes />
  </div>
  <div class="logo" bind:this={logo}>
    <Logo />
  </div>
</div>
