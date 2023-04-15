<template>
  <div>
    <Navbar />
    <Gallery />
    <Foot />
  </div>
</template>

<script>
import { Navbar } from "../components/index";
import { Gallery, Foot } from "./sections/index";
export default {
  name: "artworks-page",
  components: { Navbar, Gallery, Foot },
};
</script>

<style></style>
