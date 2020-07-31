<template>
  <div class="wrap">
    <ProList />
    <Total />
  </div>
</template>

<script>
import ProList from './ProList'
import Total from './Total'

export default {
  components: {
    ProList,
    Total
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
    position: relative;
    width: 500px;
    height: 600px;
    background-color: #f0f0f0;
    margin: 10px 20px;
    border: 1px solid #999;
}


</style>
