<script context="module">
  export async function preload(page) {
    const { slug } = page.params;
    const { data } = await this.fetch(`api/experience/${slug}`).then(res => res.json());
    const { name, icon, description } = (data && data.experience) || {};
    return { name, icon, description };
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
  import Icon from "fa-svelte";

  export let name;
  export let icon;
  export let description;
</script>

<style>
  .icon {
    float: left;
    width: 100%;
    margin: 0 50px 50px 0;
  }

  .heading { 
    margin: 0; 
    word-wrap: break-word;
  }
  
  .back { 
    text-align: right; 
    clear: both;  
  }

  .back-link { font-size: var(--font-medium); }

  @media (min-width: 500px) {
    .icon { 
      width: 350px;
      max-width: 33%;
    }
  }
</style>

<div in:fade>
  <img src={icon.url} alt={icon.alt} class="icon" />
  <h3 class="heading">{name}</h3>
  {@html description}
  <div class="back">
    <a href="/experience" class="back-link">
      <Icon icon={faArrowAltCircleLeft} />
    </a>
  </div>
</div>
