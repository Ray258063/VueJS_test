<template lang="pug">
.page-test
        h1 this page is for User
        h2 you are {{ $route.params.name }}
        h3 hahaha 
        h4(v-if="user") you enter by id {{ user.name }}
        
    
</template>
    
    <script>
import { computed } from 'vue'
    export default {
        data(){
            return{
                users:[
                {id:1,name:"Frank"},
                {id:2,name:"Amy"}
            ]
            }
        },
        computed:{
            user(){
                return this.users.find(user=>user.id==this.$route.params.num)
            }
        }
    
    }
    </script>

    <style>
    
    </style>