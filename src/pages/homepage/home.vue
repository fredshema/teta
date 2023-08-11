<template>
  <div>
    <div class="vh-100 d-flex flex-column max-height">
      <Navbar />
      <Hero class="flex-grow-1" />
    </div>
    <!-- <Overview /> -->
    <ExhibitionPromo />
    <Biography />
    <!-- <Schedule /> -->
    <!-- <Gallery /> -->
    <Foot />
  </div>
</template>

<script>
import { Navbar } from "../../components/index";
import {
  Hero,
  Overview,
  Schedule,
  Biography,
  Gallery,
  Foot,
  ExhibitionPromo,
} from "../sections";
export default {
  name: "landing-page",
  components: { Navbar, Hero, Overview, Biography, Schedule, Gallery, Foot, ExhibitionPromo },
};
</script>

<style></style>