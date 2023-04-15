<template>
  <section class="position-relative">
    <div class="hero-bg">
      <img
        src="https://media4.giphy.com/media/wGJFtF3pu7FDy/giphy.gif?cid=ecf05e477t3ceyhr127mth68s13tyoju5eahmrruk5962vaa&rid=giphy.gif&ct=g"
        alt="gif"
      />
    </div>
    <b-row
      no-gutters
      align-h="center"
      align-v="center"
      class="flex-column h-100 w-100 position-absolute blur-7 text-center"
    >
      <h1 class="h4 mb-4 text-light">WELCOME TO TETA CHEL EXHIBITION</h1>
      <h2 class="h2 text-primary">THE CHRONICLES OF A HOPELESS DREAMER</h2>
      <i class="text-light mb-4"
        >An intertwined journey between mood, crucible and healing & creativity
        through art.</i
      >
      <b-button
        variant="dark"
        pill
        class="pb-2 px-3 mt-5"
        href="https://youtu.be/Iv6-lt7Ydnw"
        target="_blank"
      >
        CHECK OUT THE INTRO
        <b-icon-arrow-right-short variant="primary" />
      </b-button>
    </b-row>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  padding-top: 70px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
}
</style>
