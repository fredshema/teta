<template>
  <section class="bg-dark text-light py-5">
    <b-container>
      <h5 class="main-title">EXHIBITION TIMELINE</h5>
      <b-row>
        <b-col cols="6" sm="4" md="3" lg="2" v-for="i in 22" :key="i">
          <div class="icon p-4">
            <calendar-icon />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { CalendarIcon } from "../../components";
export default {
  components: {
    CalendarIcon,
  },
};
</script>

<style>
</style>