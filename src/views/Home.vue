<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TitrePage :titre="'Home'"/>
  </div>
</template>

<script>
import TitrePage from "../components/TitrePage";

export default {
  name: "Home",
  components: {
    TitrePage
  }
};
</script>
