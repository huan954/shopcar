<template>
  <div id="app" class="container">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  },
}
</script>

<style>
/* @import url("./assets/css/shopCar.css"); */
* {
    padding: 0;
    margin: 0;
}

.container {
    width: 540px;
    height: 600px;
    margin: 30px auto;
}


</style>
