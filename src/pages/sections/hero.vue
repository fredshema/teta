<template>
  <section class="position-relative bg-dark overflow-hidden">
    <Splide
      :options="{ rewind: true, autoHeight: false }"
      aria-label=""
      class="h-100"
    >
      <template v-for="slide in slideshow">
        <SplideSlide>
          <div
            class="slide-img-container"
            :style="`background-image: url(https://i.ibb.co/${slide.image.id}/${slide.image.fileName})`"
          >
            <b-img
              :src="`https://i.ibb.co/${slide.image.id}/${slide.image.fileName}`"
              :alt="slide.title"
              fluid
              class="slide-img"
            />
            <div class="slide-content-container px-3 px-md-5 text-center w-100">
              <div class="slide-content mx-auto">
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.theme }}</p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </template>
    </Splide>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: { Splide, SplideSlide },
  computed: {
    slideshow() {
      return require("../../../info").default.slideshow;
    },
  },
  methods: {},
};
</script>
<style>
.splide__track {
  height: 100% !important;
}
</style>
<style lang="scss" scoped>
.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.5);
  }
}
.slide-img-container {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  .slide-content-container {
    position: absolute;
    bottom: 30px;

    .slide-content {
      max-width: 410px;
      padding: 5px 10px 10px;
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      h2,
      p {
        color: #000;
      }
    }
  }
}
.slide-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  object-fit: contain;
  backdrop-filter: blur(50px);
}
</style>
