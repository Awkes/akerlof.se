<script>
  import marked from "marked";
  import { faCode, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
  import Icon from "fa-svelte";
  import Tooltip from "./Tooltip.svelte";

  export let project;
  const { title, description, repositoryUrl, siteUrl, repositoryLabel, siteLabel } = project;
</script>

<style>
  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    color: var(--primary);
    margin: 0;
    font-size: var(--font-medium);
    word-break: break-word;
  }

  .description {
    flex-grow: 1;
  }

  .links {
    font-size: var(--font-medium);
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, 40px);
    justify-content: start;
    justify-items: start;
  }
</style>

<div class="info">
  <h2 class="title">{title}</h2>
  <div class="description">
    {@html marked(description)}
  </div>
  <div class="links">
    {#if repositoryUrl}
      <Tooltip text={repositoryLabel}>
        <a href={repositoryUrl} target="_blank">
          <Icon icon={faCode} />
        </a>
      </Tooltip>
    {/if}
    {#if siteUrl}
      <Tooltip text={siteLabel}>
        <a href={siteUrl} target="_blank">
          <Icon icon={faGlobeEurope} />
        </a>
      </Tooltip>
    {/if}
  </div>
</div>