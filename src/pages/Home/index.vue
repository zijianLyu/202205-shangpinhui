<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list = "floor"></Floor>
    <!-- <Floor></Floor> -->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Like from '@/pages/Home/Like/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import Brand from '@/pages/Home/Brand/index.vue'
import { mapState } from 'vuex'
export default {
    components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
    methods: {
      add(){
        this.$store.state.apple+=1;
        console.log(this.$store.state.apple)
      }
    },
    computed:{
      ...mapState({floorList:(state)=>state.home.floorList})
    },
    mounted(){
    this.$store.dispatch("getFloorList");
    this.$store.dispatch('getUserInfo')
    }
}

</script>

<style>

</style>
