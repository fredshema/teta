<template>
  <section class="bg-dark text-light py-5">
    <b-container>
      <h5 class="main-title">MY ART GALLERY</h5>

      <b-row align-h="start" align-v="center">
        <b-col
          cols="12"
          md="6"
          lg="4"
          v-for="({ image }, i) in gallery"
          :key="i"
        >
          <div class="w-100 d-flex align-items-center justify-content-center">
            <image-frame :src="image" style="height: 320px" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { ImageFrame } from "../../../components/index";
export default {
  components: { ImageFrame },
  data() {
    return {
      gallery: [
        {
          image:
            "https://ak.picdn.net/shutterstock/videos/1025871083/thumb/12.jpg",
        },
        {
          image:
            "https://ak.picdn.net/shutterstock/videos/1025871083/thumb/12.jpg",
        },
        {
          image:
            "https://ak.picdn.net/shutterstock/videos/1025871083/thumb/12.jpg",
        },
        {
          image:
            "https://ak.picdn.net/shutterstock/videos/1025871083/thumb/12.jpg",
        },
        {
          image:
            "https://ak.picdn.net/shutterstock/videos/1025871083/thumb/12.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: 200px;
}
</style>