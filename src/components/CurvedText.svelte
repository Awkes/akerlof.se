<svg viewBox="0 0 500 500">
  <path
    id="curve"
    d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
    style="fill: transparent" 
    width="500"
      height="500"
    />
  <text width="500">
    <textPath 
      width="500"
      height="500"
      startOffset="50%" text-anchor="middle" xlink:href="#curve"
      style="font-family: var(--link-font); font-size: var(--font-medium)"
      >
      <slot />
    </textPath>
  </text>
</svg>
