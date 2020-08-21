<script context="module">
  export async function preload(page) {
    const { slug } = page.params;
    const { data } = await this.fetch(`api/project/${slug}`).then(res => res.json());
    const { project, projectPage: labels } = data || {};
    Object.assign(project, labels);
    return { project };
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import ProjectInfo from '../../components/ProjectInfo.svelte';
  import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
  import Icon from "fa-svelte";

  export let project;
  const { screenshot, siteUrl } = project;
</script>

<style>
  .content {
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr;
  }
  .image { 
    width: 100%; 
    border: 1px solid var(--primary);
  }

  .back { text-align: right; }
  .back-link { font-size: var(--font-medium); }

  @media(min-width: 1000px) {
    .content { grid-template-columns: 1fr 1fr; }
    .back { grid-column: 1 / 3; }
  }
</style>

<div class="content" in:fade>
  <a href={siteUrl} target="_blank">
    <img src={screenshot.url} alt={screenshot.alt || ''} class="image" />
  </a>
  <ProjectInfo {project} />
  <div class="back">
    <a href="/projects" class="back-link">
      <Icon icon={faArrowAltCircleLeft} />
    </a>
  </div>
</div>
