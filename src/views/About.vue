<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TitrePage :titre="'About'"/>
  </div>
</template>

<script>
import TitrePage from "../components/TitrePage";
export default {
  name: "About",
  components:{
    TitrePage
  }
};
</script>
