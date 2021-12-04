<template>
  <div class="mainLayout">
    <Sidebar/>
    <AddRemove/>
    <main>
      <div class="mainLayoutContent">
    <router-view/>
      </div>
    </main>
  </div>
</template>
<script>
import AddRemove from "../components/AddRemove";
import Sidebar from '../components/Sidebar';
export default {
  components : {
    Sidebar,
    AddRemove

  }

}
</script>