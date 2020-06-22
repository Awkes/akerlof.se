<script>
  export let text = '';
</script>

<style>
  .tooltip {
    display: inline-block;
    position: relative;
    width: fit-content;
  }

  .tooltip:before {
    content: "";
    border: 6px solid transparent;
    border-bottom: 6px solid var(--primary-trans);
    position: absolute;
    top: calc(100% - 2px);
    left: calc(50% - 6px);
    transform: scale(0);
    transform-origin: bottom;
    transition: ease-in-out .2s;
    z-index: 100;
  }

  .tooltip:after {
    content: attr(data-text);
    width: 100%;
    width: fit-content;
    position: absolute;
    left: calc(50%);
    transform: translateX(-50%) scale(0);
    transform-origin: top;
    top: calc(100% + 10px);
    padding: 5px 10px;
    border-radius: 3px;
    text-align: center;
    font-size: var(--font-small);
    background-color: var(--primary-trans);
    transition: ease-in-out .2s;
    z-index: 99;
  }

  .tooltip:hover:before { transform: scale(1); }
  .tooltip:hover:after { transform: translateX(-50%) scale(1); }
</style>

<div class="tooltip" data-text={text}>
  <slot />
</div>
