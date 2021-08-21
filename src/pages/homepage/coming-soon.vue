<template>
  <main class="bg-dark text-light text-center">
    <b-container class="coming-soon d-flex flex-column">
      <h1 class="h2 mb-5">THIS WEBSITE IS UNDER CONSTRUCTION</h1>
      <div class="img pl-4">
        <b-img-lazy
          :src="require('../../assets/images/coming soon.svg')"
          class=""
        />
      </div>
      <h2 class="h4 mt-4">COMING SOON</h2>
    </b-container>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.coming-soon {
  min-height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  .img {
    max-height: 50vh;
    width: 100%;
    overflow: hidden;

    img {
      height: 100%;
      max-height: 50vh;
      width: auto;
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>