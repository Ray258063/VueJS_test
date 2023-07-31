import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        todos:[1,2,3]
    },
    //變更
    mutations:{
        //目前的狀態 新的值
        setTodos(state,value){
            state.todos=value
        }
    },
    //非同步的載入動作
    actions:{
        loadTodos(context){
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res=>{
                context.commit("setTodos",res.data)
            })

        }
    }
})

export default store