<script context="module">
  export async function preload() {
    const { data } = await this.fetch("api/about").then(res => res.json()); 
    const { text, image } = (data && data.about) || {};
    return { text, image };
  }
</script>

<script>
  import { fade } from 'svelte/transition';

  export let text;
  export let image;
</script>

<style>
  .about {
    padding: 0 50px;
  }

  .image { 
    width: 100%;
    height: 500px;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    border: 1px solid var(--primary);
  }

  @media (min-width: 600px) {
    .image {
      float: left;
      width: 300px;
      max-height: 400px;
      max-width: 50%;
      margin: 0 50px 50px 0;
    }
  }
</style>

<div class="about" transition:fade>
  <img src={image.url} alt={image.alt} class="image" />
  <div>{@html text}</div>
</div>

