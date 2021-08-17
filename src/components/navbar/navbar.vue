<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#">TETA CHEL</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto align-items-center">
        <b-nav-item href="#">HOME</b-nav-item>
        <b-nav-item href="#">ART WORKS</b-nav-item>
        <b-nav-item href="#">ABOUT</b-nav-item>
        <b-nav-item href="#">BIO</b-nav-item>
        <b-nav-item href="#">
          <b-button pill variant="primary" class="px-3" size="sm">GET IN TOUCH</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>