<template>
    <div class="homeLayout">
    <Header/>
    <Sidebar/>
<!--      <Date/>-->
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
import Header from "../components/Header";
// import Date from "../components/Date";
import AddRemove from "../components/AddRemove";
export default {
  components : {
    Header,
    Sidebar,
    // Date,
    AddRemove

  }

}
</script>
