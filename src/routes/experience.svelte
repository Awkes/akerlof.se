<script context="module">
  export async function preload() {
    const { data } = await this.fetch("api/experiences").then(res => res.json()); 
    const { allExperiences: experience } = data || {};
    return { experience };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  import Tooltip from '../components/Tooltip.svelte';

  export let experience;
</script>

<style>
  .experience {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 20px;
    align-items: center;
    justify-items:center;
  }

  .icon {
    width: 75px;
    height: 75px;
    transition: ease-in-out .2s;
  }

  a:hover > .icon { filter: drop-shadow(0px 0px 10px var(--primary)); }

  @media (min-width: 600px) {
    .experience { gap: 75px; }
    
    .icon {
      width: 100px;
      height: 100px;
    }
  }

  @media (min-width: 800px) {
    .experience { gap: 120px; }
  }
</style>

<div class="experience" in:fade>
  {#each experience as { icon, name, slug }}
    <Tooltip text={name}>
      <a href={`experience/${slug}`}>
        <img src={icon.url} alt={icon.alt || ''} class="icon" />
      </a>
    </Tooltip>
  {/each}
</div>

