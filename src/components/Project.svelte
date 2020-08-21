<script>
  import { onMount } from "svelte";
  import { activeProject } from "../stores";
  import ProjectInfo from "./ProjectInfo.svelte";

  export let project;
  export let index;
  let link;
  const { screenshot, slug } = project;

  onMount(() => link.addEventListener("click", () => activeProject.set(index)));
</script>

<style>
  .project {
    position: relative;
    border: 1px solid var(--primary);
    overflow: hidden;
    display: block;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: top center;
    color: #fff;
  }

  .info {
    display: none;
    position: absolute;
    top: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    padding: 100px;
    background-color: rgba(0, 0, 0, 0.85);
    transform: translateY(100%);
    transition: transform ease-in-out 0.2s;
  }

  .link {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1000px) {
    .project {
      height: 700px;
    }

    .info {
      display: initial;
    }
    .project:hover .info {
      transform: translateY(0);
    }
  }
</style>

<div class="project" style={`background-image: url(${screenshot.url})`}>
  <a class="link" href={`projects/${slug}`} bind:this={link}><div /></a>
  <div class="info">
    <ProjectInfo {project} />
  </div>
</div>
