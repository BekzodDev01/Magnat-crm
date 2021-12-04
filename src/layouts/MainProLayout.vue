<template>
  <div class="mainProLayout">
    <Sidebar/>
    <AddRemove/>
    <main class="app-content">
      <div class="app-page">
        <router-view/>
      </div>
    </main>
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar';
import AddRemove from "../components/AddRemove";
export default {
  components : {
    Sidebar,
    AddRemove

  }

}
</script>
