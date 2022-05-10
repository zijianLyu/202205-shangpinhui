<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)" >上一页</button>
    <button v-if="startNumAndEndNumber.start>1"  @click="$emit('getPageNo',1)">1</button>
    <button v-if="startNumAndEndNumber.start>2">···</button>

    <button v-for="(page,index) in startNumAndEndNumber.end" :key="index" v-if="page>=startNumAndEndNumber.start"  @click="$emit('getPageNo',page)" :class="{active:pageNo==page }">{{page}}</button>

    <button v-if="startNumAndEndNumber.end<totalPage-1">···</button>
    <button v-if="startNumAndEndNumber.end<totalPage" :class="{active:pageNo ==totalPage }" @click="$emit('getPageNo',totalPage)">{{totalPage}}</button>
    <button  @click="$emit('getPageNo',pageNo+1)" :disabled="pageNo==totalPage">下一页</button>
<!-- :class="{active:pageNo = totalPage}" -->
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  props:['pageNo','pageSize','total','continues'],
  name: "Pagination",
  computed:{
    totalPage(){
      return Math.ceil(this.total/this.pageSize)
    },
    startNumAndEndNumber(){
      const {pageNo,totalPage,continues} = this;
      let start = 0;
      let end = 0
      if(continues>totalPage)
      {
        start = 1;
        end = totalPage
      }else{
        start = pageNo - parseInt(continues/2)
        end = pageNo + parseInt(continues/2)
        if(start<1){
          start = 1
          end = continues
        }
        if(end>totalPage){
          // start = pageNo - parseInt(continues/2)
          start = totalPage - continues+1
          end = totalPage
        }
      }
      console.log(start,end)
      return {start,end}
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
