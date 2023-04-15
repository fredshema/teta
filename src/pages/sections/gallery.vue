<template>
  <section class="bg-dark text-light py-5">
    <b-container>
      <h5 class="main-title mb-2">ART GALLERY</h5>

      <b-row
        align-h="start"
        align-v="center"
        class="mt-3 p-3 border rounded mx-0 mt-5"
        v-for="(part, i) in gallery"
        :key="i"
      >
        <b-col cols="12" class="text-center mb-4">
          <h4 class="text-uppercase text-center mb-2">
            {{ part.name }}
          </h4>
          <i class="d-block" v-html="part.theme"></i>
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="4"
          v-for="(art, j) in part.artworks"
          :key="j"
        >
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
              @click="openModal(art.id, i, j)"
              :src="`https://i.ibb.co/${art.id}/${art.fileName}`"
            />
            <h6 class="text-center mb-4">{{ art.name }}</h6>
            <b-modal
              :id="`${art.id}-${i}-${j}`"
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
              header-text-variant="white"
              content-class="border border-light"
            >
              <article class="pb-4 pt-3" v-html="art.description"></article>
            </b-modal>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { ImageFrame } from "../../components";
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
      const allImages = require("../../../info").default.exhibition;
      this.gallery = [];
      for (let i = 0; i < allImages.parts.length; i++) {
        allImages.parts[i].artworks = allImages.parts[i].artworks.filter(
          (item) => item.id
        );
        this.gallery.push(allImages.parts[i]);
      }
      console.log(this.gallery);
    },
    openModal(artID, i, j) {
      // console.log(artID);
      const displayedArt = this.gallery.find((part) =>
        part.artworks.find((art) => art.id == artID)
      );
      if (displayedArt) {
        this.$bvModal.show(`${artID}-${i}-${j}`);
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