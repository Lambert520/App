<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button>···</button>

    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    
    <button>···</button>
    <button>{{totalPage}}</button>
    <button>下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
    <h1>{{startNumAndEndNum}}----{{pageNo}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['pageNo','pageSize','total','continues'],
    computed: {
      //需要多少页
      totalPage(){
        //向上取整
        return Math.ceil(this.total/this.pageSize);
      },
      //计算出连续的页码的起始数字与结束数字[连续页码的数字：至少是5]
      startNumAndEndNum(){
        const {continues,pageNo,totalPage} = this;
        //先定义两个变量存储起始数字与结束数字
        let start = 0 , end = 0;
        //连续页码数字5【就是至少五次】，如果出现不正常的现象【就是不够五页】
        //不正常现象【总页数没有连续页码多】
        if(continues > totalPage){
          start = 1;
          end = totalPage;
        }else{
          //正常现象【总页数大于连续页数】
          //起始数字
          start = pageNo - parseInt(continues/2);
          //结束数字
          end = pageNo + parseInt(continues/2);
          //把出现不正常现象【start数字出现0|负数】纠正
          if(start < 1){
            start = 1;
            end = continues;
          }
          //把出现不正常的现象【end数字大于总页数】纠正
          if(end > totalPage){
            
            start = totalPage-continues + 1;
            end = totalPage;
          }
        }
        return {start,end};
      }
    }
  }
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
