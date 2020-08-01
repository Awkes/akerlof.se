<script context="module">
  export async function preload() {
    const { data } = await this.fetch("api/contact").then(res => res.json());
    const {
      eMailErrorMsg,
      eMailLabel,
      eMailValidationRegexp,
      formNotSentErrorMsg,
      formSentMsg,
      messageErrorMsg,
      messageLabel,
      messageValidationRegexp,
      nameErrorMsg,
      nameLabel,
      nameValidationRegexp,
      submitLabel,
      text,
      socialMediaLinks
    } = (data && data.contact) || {};
    return {
      eMailErrorMsg,
      eMailLabel,
      eMailValidationRegexp,
      formNotSentErrorMsg,
      formSentMsg,
      messageErrorMsg,
      messageLabel,
      messageValidationRegexp,
      nameErrorMsg,
      nameLabel,
      nameValidationRegexp,
      submitLabel,
      text,
      socialMediaLinks
    };
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import ContactForm from "../components/ContactForm.svelte";
  import Tooltip from "../components/Tooltip.svelte";

  export let eMailErrorMsg;
  export let eMailLabel;
  export let eMailValidationRegexp;
  export let formNotSentErrorMsg;
  export let formSentMsg;
  export let messageErrorMsg;
  export let messageLabel;
  export let messageValidationRegexp;
  export let nameErrorMsg;
  export let nameLabel;
  export let nameValidationRegexp;
  export let submitLabel;
  export let text;
  export let socialMediaLinks;
</script>

<style>
  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 100px;
    align-items: start;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .text > :global(*):first-child {
    margin-top: 0;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, 50px);
    gap: 20px;
    align-items: center;
  }

  .icon {
    display: block;
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 1000px) {
    .content {
      grid-template-columns: 1fr 1fr;
    }
    
    .icons {
      grid-template-columns: repeat(auto-fill, 75px);
      gap: 40px;
    }
  }
</style>

<div class="content" in:fade>
  <div class="info">
    <div class="text">
      {@html text}
    </div>
    <div class="icons">
      {#each socialMediaLinks as { name, link, icon }}
        <Tooltip text={name}>
          <a href={link} target="_blank">
            <img src={icon.url} alt={name} class="icon" />
          </a>
        </Tooltip>
      {/each}
    </div>
  </div>
  <ContactForm
    {eMailErrorMsg}
    {eMailLabel}
    {eMailValidationRegexp}
    {formNotSentErrorMsg}
    {formSentMsg}
    {messageErrorMsg}
    {messageLabel}
    {messageValidationRegexp}
    {nameErrorMsg}
    {nameLabel}
    {nameValidationRegexp}
    {submitLabel} />
</div>
