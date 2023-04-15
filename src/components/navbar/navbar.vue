<template>
  <b-navbar toggleable="md" type="dark" variant="dark" class="pt-3 pb-1">
    <b-navbar-brand href="#">TETA CHEL</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="mx-auto align-items-center">
        <b-nav-item :to="{ name: 'Home' }" class="custom-link small">
          <span>HOME</span>
        </b-nav-item>
        <b-nav-item :to="{ name: 'artworks' }" class="custom-link small">
          <span>ART WORKS</span>
        </b-nav-item>
        <b-nav-item class="custom-link small" href="#">
          <span>SHOP</span>
        </b-nav-item>
        <b-nav-item class="custom-link small" href="#">
          <span>EXHIBITIONS</span>
        </b-nav-item>
        <b-nav-item :to="{ name: 'about' }" class="custom-link small">
          <span>ABOUT</span>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="align-items-center">
        <b-nav-item href="#">
          <b-button pill variant="primary" class="px-2" size="sm">
            <span class="small font-weight-bold text-top"> GET IN TOUCH </span>
          </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss">
.custom-link a {
  span {
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    color: var(--white) !important;
    opacity: 1 !important;
  }

  &:hover,
  &.router-link-exact-active {
    span {
      color: var(--primary) !important;
      border-color: var(--primary) !important;
    }
  }
}
</style>
