<template>
  <div>
    <Navbar />
    <Biography />
    <Foot />
  </div>
</template>

<script>
import { Navbar } from "../components/index";
import { Biography, Foot } from "./sections/index";
export default {
  name: "about-page",
  components: { Navbar, Biography, Foot },
};
</script>

<style></style>
