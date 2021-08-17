<template>
  <div>
    <div class="vh-100 d-flex flex-column">
      <Navbar />
      <Hero class="flex-grow-1" />
    </div>
    <Core />
    <Schedule />
    <Gallery />
    <Foot />
  </div>
</template>

<script>
import { Navbar } from "../../components/index";
import { Hero, Core, Schedule, Gallery, Foot } from "./sections/index";
export default {
  name: "landing-page",
  components: { Navbar, Hero, Core, Schedule, Gallery, Foot },
};
</script>

<style>
</style>