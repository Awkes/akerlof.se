<script context="module">
  export async function preload() {
    const { data } = await this.fetch("api/projects").then(res => res.json()); 
    const { allProjects: projects, projectPage: labels } = data || {};
    return { projects, labels };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  import Project from '../components/Project.svelte';
  import Carousel from '../components/Carousel.svelte';

  export let projects;
  export let labels;
</script>

<div in:fade>
  <Carousel>
    {#each projects as project}
      <Project project={{ ...project, ...labels }} />
    {/each}
  </Carousel>
</div>

