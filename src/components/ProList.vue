<template>
  <div>
    <ul class="header">
      <li class="name">商品</li>
      <li>单价</li>
      <li>数量</li>
      <li>总价</li>
    </ul>
    <ul class="procon">
      <li class="con" v-for="(item,index) in promsg" :key="item.gooodsId">
        <input
          type="checkbox"
          name="select"
          class="select"
          :checked="item.isChecked"
          @change="checked(index,$event)"
        />
        <div class="msg">
          <img :src="item.goodsPic" alt class="picture" />
          <p class="name">{{item.gooodsName}}</p>
        </div>
        <div class="unit-price">{{item.price}}</div>
        <div class="count">
          <!-- 减 -->
          <button class="minus" @click="mul(index)">-</button>
          <!-- 输入 -->
          <input type="text" class="count" :value="item.count" @input="inp({index,val:$event.target.value})" />
          <!-- 加 -->
          <button class="add" @click="add(index)">+</button>
          <!--v-model="item.isChecked"   -->
        </div>
        <div class="total-price">￥{{item.price*item.count}}元</div>
        <img src="../assets/image/img1.jpg" alt style="width:24px;height:28px;" @click="delProduct(index)">
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"

export default {
  computed: {
    ...mapState(["promsg"]),
    // ...mapGetters(["totle"]),
  },
  methods:{
    ...mapMutations(["add","mul","delProduct","inp"]),
    // inp(e,i){
    //   this.$store.commit("inp",{i,val:e.target.value})
    //   console.log(e);
    // }
    checked(i,e){
      this.$store.commit("checkGoods",{i,checked:e.target.checked})
    }
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

ul.header {
    width: 340px;
    height: 30px;
    line-height: 30px;
    background-color: #800080;
    padding: 0 90px 0 70px;

}

ul.procon{
  display: flex;
  flex-direction: column;
}
ul.procon li{
  align-items: center;
}
.header li.name {
    width: 60px;
}

.con {
    height: 90px;
    line-height: 90px;
    width: 500px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
}

.select {
    margin-top: 35px;
    width: 20px;
    height: 20px;
}

.wrap .con .msg {
    display: flex;
    justify-content: space-between;
    width: 100px;
}

.picture {
    width: 60px;
    height: 75px;
    margin-top: 10px;
}

.wrap .con .unit-price {
    width: 50px;
    text-align: center;
}

.wrap .con .count {
    text-align: left;
    width: 100px;
    text-align: center;
}

.wrap .con .count button {
    padding: 0 5px;
}

.wrap .con .count input {
    width: 38px;
    height: 18px;
    border: 1px solid #666;
    background-color: #e0e0e0;
}

.wrap .con .msg .name {
    width: 30px;
}

.addProduce {
    margin-left: 240px;
    margin-top: 10px;
    padding: 2px 3px;
}


</style>
