<template>
  <component :is="layout">
    <!-- When define the layout in each and every component -->
    <!-- <router-view v-model:layout="layout" /> -->
    <router-view />
  </component>
</template>

<script>
import Layout from "./components/layouts/CommonLayout.vue";
export default {
  components: {
    Layout,
  },
  data() {
    return {
      // When define the layout in each and every component
      // layout: "div",
      CommonLayout: "commonLayout",
    };
  },
  // When using meta tag in routings
  computed: {
    layout() {
      return this.$route.meta.layout || this.CommonLayout;
    },
  },
};
</script>

<style lang="scss"></style>
