import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

//store全局的唯一数据源（仓库）
let store = new Vuex.Store({
    strict: true,
    //仓库存储数据的地方
    state:{
        promsg: [{
            gooodsId: "001",
            gooodsName: "香烟",
            price: 15,
            count: 1,
            goodsPic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3155877623,2659659639&fm=26&gp=0.jpg",
            isChecked: false

        }, {
            gooodsId: "002",
            gooodsName: "啤酒",
            price: 19,
            count: 12,
            goodsPic: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=364940872,3717760142&fm=26&gp=0.jpg",
            isChecked: false
        }, {
            gooodsId: "003",
            gooodsName: "香烟",
            price: 18,
            count: 3,
            goodsPic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3155877623,2659659639&fm=26&gp=0.jpg",
            isChecked: false

        }, {
            gooodsId: "004",
            gooodsName: "啤酒",
            price: 26,
            count: 5,
            goodsPic: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=364940872,3717760142&fm=26&gp=0.jpg",
            isChecked: false
        }]
    },
    getters:{
        totle(state){
            let sum = 0;
            state.promsg.map(item=>sum+=item.price*item.count)
            return sum;
        }
    },
    mutations:{
        add(state,payload){
            state.promsg[payload].count++;
        },
        mul(state,payload){
            if(state.promsg[payload].count>1){
                state.promsg[payload].count--;
            } 
        },
        delProduct(state,payload){
            state.promsg.splice(payload,1);
        },
        inp(state,payload){
            // console.log(payload);   
            state.promsg[payload.index].count = payload.val;
        },
        checkGoods(state,payload){
            state.promsg[payload.i].isChecked = payload.checked;
        }
    }
})
export default store;