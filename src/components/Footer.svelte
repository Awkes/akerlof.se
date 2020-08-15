<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .text {
    display: block;
    border-top: 1px solid #fff;
    width: 100%;
    background-color: #000;
    font-size: 15px;
    padding: 5px 50px 0px 50px;
    text-align: center;
  }

  @media(min-width: 400px) {
    .text {
      border-left: 1px solid #fff;
      border-top-left-radius: 50px;
      width: fit-content;
    }
  }

</style>

<footer>
    <span class="text">
      <slot />
    </span>
</footer>
