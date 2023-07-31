<template lang="pug">
#app 
    img(src="./assets/logo.png")
    br
    //- h2 {{ $store.state.todos }}
    br
    router-link(to="/test") To page Test
    br
    router-link(to="/user/Ray") To User Ray 
    br
    router-link(to="/user/Leo") To User Leo 
    br
    router-link(to="/user/id/2") To User 2
    transition(name="page" mode="out-in")
      router-view(:key="$route.path")
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page-enter-active, .page-leave-active {
  transition: 0.5s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
