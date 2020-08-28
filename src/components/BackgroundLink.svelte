<script>
  export let href;
  export let img;
  export let segment;
</script>

<style>
  .link {
    font-family: var(--link-font);
    font-size: var(--font-medium);
    text-decoration: none;
    color: #000;
    display: block;
    height: 100%;
    overflow: hidden;
    position: relative;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .link::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .overlay {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    background-color: var(--primary-trans);
    transition: transform ease-in-out .3s;
  }

  .link:nth-child(1) .overlay { transform: translateX(-100%); }
  .link:nth-child(2) .overlay { transform: translateY(-100%); }
  .link:nth-child(3) .overlay { transform: translateY(100%); }
  .link:nth-child(4) .overlay { transform: translateX(100%); }
  .text { color: transparent; }
  .active { transform: translate(0) !important; }

  @media (pointer: fine) {
    .link:hover .overlay { transform: translate(0); }
    .link:hover .text { color: #000; }
  }
  
  @media (min-width: 500px) {
    .link { font-size: var(--font-big); }
  }
</style>

<a {href} style="background-image: url('{img}')" class="link" rel="prefetch">
  <div class={segment === href ? 'overlay active' : 'overlay'}>
    <span class="text">
      <slot />
    </span>
  </div>
</a>
