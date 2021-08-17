<template>
  <section class="bg-dark text-light py-5">
    <b-container>
      <h5 class="main-title">EXHIBITION MAIN CORE</h5>
      <b-row>
        <b-col cols="12" md="4" v-for="(core, i) in cores" :key="i">
          <div
            class="
              image
              rounded
              d-flex
              align-items-center
              justify-content-center
              mw-100
              m-2
            "
          >
            <b-img-lazy fluid :src="core.image" />
            <span class="rounded-bottom">{{ core.title }}</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cores: [
        {
          image: require("../../../assets/images/logo.png"),
          title: "Creativity",
        },
        {
          image: require("../../../assets/images/logo.png"),
          title: "Creativity",
        },
        {
          image: require("../../../assets/images/logo.png"),
          title: "Healing",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.image {
  border: 1px solid #27313d;
  background: #27313d;
  position: relative;

  img {
    max-width: 300px;
    width: 100%;
  }
  span {
    position: absolute;
    bottom: 0;
    background: #00000061;
    width: 100%;
    text-align: center;
    padding: 15px;
    backdrop-filter: blur(1px);
  }
}
</style>