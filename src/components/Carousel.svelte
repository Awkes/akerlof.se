<script>
  import { onMount, onDestroy } from 'svelte';
  import Icon from "fa-svelte";
  import {
    faChevronLeft,
    faChevronRight
  } from "@fortawesome/free-solid-svg-icons";

  let items;
  let active = 0;
  let isScrolling;

  function scrollTo(index) {
    items.scrollTo({ left: items.children[index].offsetLeft, behavior: 'smooth' });
  }

  function handlePrevClick(e) {
    const prevSlide = active - 1;
    prevSlide >= 0 && scrollTo(prevSlide);
  }

  function handleNextClick() {
    const nextSlide = active + 1;
    nextSlide < items.children.length && scrollTo(nextSlide);
  }

  function setActiveItem() {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      active = Array.prototype.findIndex.call(
        items.children,
        el => el.offsetLeft === items.scrollLeft
      );
    }, 50);
  }

  onMount(() => items.addEventListener('scroll', setActiveItem));
  onDestroy(() => items && items.removeEventListener('scroll', setActiveItem));
</script>

<style>
  .carousel {
    position: relative;
  }

  .items {
    overflow-x: scroll;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    display: grid;
    gap: 50px;
  }

  .items::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .items > :global(*) {
    scroll-snap-align: start;
  }

  .prev,
  .next {
    display: none;
    position: absolute;
    top: 0;
    font-size: var(--font-big);
    padding: 0;
    border: 0;
    outline: 0;
    line-height: 0;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    height: 100%;
    align-items: center;
    opacity: 0;
    transition: ease-in-out 0.2s;
  }

  .prev {
    left: 0;
    padding-right: 20px;
    transform: translateX(-100%);
  }
  .next {
    right: 0;
    padding-left: 20px;
    transform: translateX(100%);
  }

  .carousel:hover > .prev,
  .carousel:hover > .next {
    opacity: 1;
  }

  .bullets {
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    line-height: 0;
    padding: 20px 0;
  }

  .bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    padding: 0;
    border-radius: 50%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  .bullet-active {
    background-color: var(--primary);
  }

  @media (min-width: 600px) and (min-height: 600px) {
    .prev,
    .next {
      display: flex;
    }

    .bullet {
      width: 15px;
      height: 15px;
      margin: 10px;
    }
  }
</style>

<div class="carousel">
  <div
    class="items"
    bind:this={items}
    style={`grid-template-columns: repeat(${(items && items.children.length) || 100}, 100%)`}>
    <slot />
  </div>
  {#if active > 0}
    <button type="button" class="prev" on:click={handlePrevClick}>
      <Icon icon={faChevronLeft} />
    </button>
  {/if}
  {#if items && active < items.children.length - 1}
    <button type="button" class="next" on:click={handleNextClick}>
      <Icon icon={faChevronRight} />
    </button>
  {/if}
</div>
<div class="bullets">
  {#if items}
    {#each items.children as item, i}
      <button
        type="button"
        class={active === i ? 'bullet bullet-active' : 'bullet'}
        on:click={() => scrollTo(i)} />
    {/each}
  {/if}
</div>
