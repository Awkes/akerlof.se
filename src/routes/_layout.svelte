<script context="module">
  export async function preload() {
    const menu = await this.fetch("api/menu").then(res => res.json());
    const info = await this.fetch("api/info").then(res => res.json());
    const { menuItems } = (menu && menu.data && menu.data.menu) || [];
    const { information } = (info && info.data) || {};
    return { menuItems, information };
  }
</script>

<script>
  import { setContext, onMount } from "svelte";
  import { setTheme } from "../themes";
  import BackgroundLink from "../components/BackgroundLink.svelte";
  import LogoMenu from "../components/LogoMenu.svelte";
  import Content from "../components/Content.svelte";

  export let segment;
  export let menuItems;
  export let information;
  
  const { firstName, lastName, title, url } = information;

  setContext("menuItems", menuItems);
  setContext("information", information);
  onMount(() => setTheme());

  function activePage() {
    const { label } = menuItems.find(item => item.slug === segment) || {};
    return label || '';
  }
</script>

<style>
  .logo-menu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  nav {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background-color: #fff;
  }
</style>

<svelte:head>
  <title>
    {firstName} {lastName} - {title}{segment !== undefined ? `: ${activePage()}` : ''} | {new URL(url).host} 
  </title>
</svelte:head>

<nav>
  {#each menuItems as { label, slug, image }}
    <BackgroundLink img={image.url} href={slug} {segment}>
      {label}
    </BackgroundLink>
  {/each}
</nav>

<div class="logo-menu">
  <LogoMenu />
</div>

{#if segment}
  <Content>
    <slot />
  </Content>
{/if}
