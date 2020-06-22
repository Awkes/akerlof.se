<script context="module">
  export async function preload() {
    const { data } = await this.fetch("api/projects").then(res => res.json()); 
    const { allProjects: projects, projectPage: labels } = data || {};
    return { projects, labels };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  import { activeProject } from "../stores";
  import Project from '../components/Project.svelte';
  import Carousel from '../components/Carousel.svelte';

  export let projects;
  export let labels;
  
  let active = $activeProject;
  $activeProject = 0;
</script>

<div in:fade>
  <Carousel {active}>
    {#each projects as project, index}
      <Project project={{ ...project, ...labels }} {index} />
    {/each}
  </Carousel>
</div>

