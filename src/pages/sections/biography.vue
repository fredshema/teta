<template>
  <section class="bg-dark text-light pt-5 pb-4">
    <b-container>
      <h5 class="main-title">BIOGRAPHY</h5>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" md="11">
          <p class="text-justify">
            Micheline TETA is a 22-year-old Rwandan lady born and raised in
            Gisenyi, Rwanda's western province. She completed her ordinary level
            at Ecole secondaire Saint Vincent from 2014 to 2016, after
            graduating her primary school in 2013 at EPEGI. Her interest in the
            arts, particularly painting, led her to enroll at Ecole d'art de
            Nyundo for her Advanced level, where she studied Graphic Arts from
            2017 to 2019. Teta practiced painting only in class assignments and
            made few personal works in her advanced level because she was more
            involved in fashion designing in high school. <br />
            <br />
            Teta took a break after graduating from high school with a diploma
            in Graphic Arts and Design, looking for inspiration and thinking out
            her next moves as a painter. Teta officially began her career as a
            painter in 2021, when she revealed the first half of a painting
            dubbed Memories, which launched her to recognition. Teta followed up
            with the release of the second part of Memories. <br />
            <br />
            After completing a few other art pieces, Micheline TETA was inspired
            to create a debut solo exhibition, showcasing her healing journey as
            a way of inspiring herself and others.
            <strong>CHRONICLES OF A HOPELESS DREAMER</strong> is the theme of
            the exhibition.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {};
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