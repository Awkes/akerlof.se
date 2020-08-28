<script>
  import { getContext } from "svelte";
  import { stores } from "@sapper/app";
  import {
    faAddressCard,
    faTools,
    faBriefcase,
    faMailBulk
  } from "@fortawesome/free-solid-svg-icons";
  import Icon from "fa-svelte";

  let menuItems = getContext("menuItems");
  let { page } = stores();

  function getIcon(link) {
    switch (link) {
      case "about":
        return faAddressCard;
      case "experience":
        return faTools;
      case "projects":
        return faBriefcase;
      case "contact":
        return faMailBulk;
    }
  }
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: fit-content;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, auto);
  }

  li {
    display: inline-block;
  }

  .link {
    color: #fff;
    text-decoration: none;
    font-family: var(--link-font);
    font-size: var(--font-small);
    letter-spacing: 6px;
    display: flex;
    align-items: center;
    transition: ease-in-out 0.2s;
  }

  .link:not(.active):hover {
    text-shadow: 0 0 10px var(--primary);
    filter: drop-shadow(0 0 10px var(--primary));
  }

  .active {
    color: var(--primary);
  }

  .text {
    display: none;
    margin-left: 10px;
  }

  @media (min-width: 600px) and (min-height: 600px) {
    .link {
      font-size: var(--font-medium);
    }
  }

  @media (min-width: 1000px) {
    .link {
      font-size: var(--font-small);
    }
    .text {
      display: initial;
    }
  }
  @media (min-width: 1200px) {
    .link {
      font-size: var(--font-medium);
    }
    .text {
      margin-left: 20px;
    }
  }
</style>

<nav>
  <ul>
    {#each menuItems as { label, slug }}
      <li>
        <a
          href={slug}
          class={$page.path.split('/')[1] === slug ? 'link active' : 'link'}
          rel="prefetch">
          <Icon icon={getIcon(slug)} />
          <span class="text">{label}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
