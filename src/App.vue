<template>
  <div id="app">
    <!-- <h1 v-hellolazj='msg'></h1> -->
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  name: 'App',
  data() {
    return {
      msg:'abc'
    }
  },
  components: {
    Header,Footer
  },
  mounted(){
    //派发一个action获取商品列表
     this.$store.dispatch('categoryList')
  },
}
</script>

<style>
</style>
