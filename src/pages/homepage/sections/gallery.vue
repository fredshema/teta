<template>
  <section class="bg-dark text-light py-5">
    <b-container>
      <h5 class="main-title">MY ART GALLERY</h5>

      <b-row align-h="start" align-v="center">
        <b-col cols="12" md="6" lg="4" v-for="(art, i) in gallery" :key="i">
          <div
            class="
              w-100
              d-flex
              align-items-center
              justify-content-center
              flex-column
            "
          >
            <image-frame
              :src="`https://i.ibb.co/${art.id}/${art.fileName}`"
              @click="openModal(art.id)"
            />
            <h6 class="text-center mb-4">{{ art.name }}</h6>
            <b-modal
              :id="art.id"
              :title="art.name"
              no-stacking
              hide-footer
              header-class="border-0"
              title-class="h6 font-weight-bold"
              body-class="pt-0"
              centered
              scrollable
              body-bg-variant="dark"
              body-text-variant="white"
              header-bg-variant="dark"
              header-text-variant="white" content-class="border border-light"
            >
              <article class="pt-0 pb-4">
                {{ art.description }}
              </article>
            </b-modal>
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
      gallery: [],
    };
  },
  mounted() {
    this.getImages();
  },
  methods: {
    getImages() {
      const allImages = require("../../../../info").default.exhibition;
      this.gallery = allImages.filter((item) => item.id);
    },
    openModal(artID) {
      console.log(artID);
      const displayedArt = this.gallery.find((art) => art.id == artID);
      if (displayedArt) {
        this.$bvModal.show(artID);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: 200px;
}
</style>