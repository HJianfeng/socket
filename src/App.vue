<template>
  <router-view></router-view>
</template>

<script>
// import { onMounted } from 'vue'
export default {
  setup() {
    //  onMounted(() => {
    //    console.log('mounted in the composition api!')
    //    getHello().then(res=> {
    //      console.log(res);
    //    }).catch(err=>{
    //      console.log(err);
    //    })
    //  })
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body{
  margin:0px;
  height:100%;
}
</style>
