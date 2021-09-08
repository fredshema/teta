<template>
  <section class="bg-dark text-light pt-5 pb-4">
    <b-container>
      <h5 class="main-title">EXHIBITION OVER VIEW & THESIS STATEMENT</h5>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" md="11">
          <p class="text-justify">
            ART is supposed to express difficult-to-articulate feelings and
            emotions. In that context, this show is about artistic expression,
            inspiration, and repair or healing. This is especially true for the
            younger generation, who struggle to let go of the past and move on
            to the next stage of their lives. Unconsciously, self-discovery can
            lead to worry, loneliness, low self-esteem, tension, despair, and
            even suicide, among other mental issues. Most teenagers are affected
            by this, as they carry a grudge alone and pretend that everything is
            fantastic when they cannot communicate or speak their feelings. It
            may not only make them feel worse, but it may also make others feel
            lonely since they think everyone else is having a lovely day while
            they are having a bad day. People can improve their mental health by
            participating in creative art, which allows them to express
            themselves, discover their life purpose, and recover. People are
            made to feel less alone by art as if they are not alone in their
            emotions. Participating in the arts can help people cope with a
            variety of mental diseases and psychological anguish. It improves
            our self-esteem while also increasing our involvement and
            resilience. 
          </p>
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