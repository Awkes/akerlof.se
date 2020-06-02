<style>
  .heading { height: 50%; }
  .path { fill: transparent; }
  .text {
    font-family: var(--link-font); 
    font-size: 24px;
  }
</style>

<div class="heading">
  <svg viewBox="8.041 0 282.164 141.083" xmlns="http://www.w3.org/2000/svg">
    <path 
      id="curve" 
      class="path" 
      d="M 36.374 139.73 C 36.374 52.936 130.331 -1.311 205.497 42.086 C 240.382 62.227 261.872 99.449 261.872 139.73 C 261.872 226.524 167.914 280.771 92.748 237.373 C 57.864 217.233 36.374 180.011 36.374 139.73"
    />
    <text>
      <textPath 
        startOffset="25%" text-anchor="middle" xlink:href="#curve"
        class="text"
      >
        <slot />
      </textPath>
    </text>
  </svg>
</div>