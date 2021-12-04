<template>
  <div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";
import MainProLayout from "./layouts/MainProLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + 'Layout'
    }
  },
  components : {
    HomeLayout,
    MainLayout,
    MainProLayout
  }

}
</script>
