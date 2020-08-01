<script context="module">
  export async function preload() {
    const { data } = await this.fetch("api/success").then(res => res.json());
    const { formSentMsg } = (data && data.contact) || {};
    return { formSentMsg };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  import { faEnvelopeOpenText, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
  import Icon from "fa-svelte";

  export let formSentMsg;
</script>

<style>
  .envelope { 
    float: left;
    font-size: 100px; 
    margin: 0 50px 10px 0;
    color: var(--primary);
  }

  .back { 
    clear: both;
    text-align: right; 
  }

  .back-link { font-size: var(--font-medium); }
</style>

<div in:fade>
  <div class="envelope">
    <Icon icon={faEnvelopeOpenText} />
  </div>
  {@html formSentMsg}
  <div class="back">
    <a href="/contact" class="back-link">
      <Icon icon={faArrowAltCircleLeft} />
    </a>
  </div>
</div>