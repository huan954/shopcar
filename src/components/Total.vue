<template>
  <div>
    <footer>
      <ul>
        <li>
          <!--  @input="allChecked" -->
          <input type="checkbox"/>
          <span>全选</span>
          <span>取消全选</span>
        </li>
        <li>Total:￥{{totle}}元</li>
        <li class="jiesuan">结算</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"
export default {
  computed:{
    ...mapGetters(["totle"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
}
footer ul {
  position: absolute;
  width: 450px;
  left: 0;
  bottom: 0;
  background-color: #c0c0c0;
  padding: 0 30px 0 20px;
}

footer ul li {
  line-height: 50px;
}

footer ul li .selects {
  display: inline-block;
  vertical-align: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #000;
}

footer ul li.jiesuan {
  width: 100px;
  height: 35px;
  line-height: 35px;
  margin-top: 8px;
  text-align: center;
  background-color: lightsalmon;
}
</style>
