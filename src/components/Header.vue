<template>
  <div id="herder">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#7b7474" active-text-color="#3c78d8" >
      <el-menu-item index="1" id="menu1">
        <div class="block"><el-avatar :size="22" :src="circleUrl"></el-avatar>&nbsp;&nbsp;捣蛋的捣蛋鬼 <span @click="loginOut()" style="color: red">注销</span></div>

      </el-menu-item>
      <el-menu-item index="2" ><router-link to="/HomeBlog">首页</router-link></el-menu-item>
      <el-menu-item index="3" >分类</el-menu-item>
      <el-menu-item index="4" >归档</el-menu-item>
      <el-menu-item index="5" >标签</el-menu-item>
      <el-menu-item index="6" >练字</el-menu-item>
      <el-menu-item index="7" >关于我</el-menu-item>
      <el-menu-item index="8" ><router-link to="/cshGift">小玩意</router-link></el-menu-item>
      <el-menu-item index="9" ><router-link to="/tourView">游玩</router-link></el-menu-item>
      <el-menu-item index="10" id="menu2" @click="writeBlog">写博客</el-menu-item>
      <el-menu-item index="11" >捣蛋鬼</el-menu-item>
<!--      <el-menu-item index="12" >拍摄小答</el-menu-item>-->

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"

    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    writeBlog(){

    },loginOut(){
      this.$router.push("/LoginBlog");
    }
  }
}
</script>

<style scoped>
/*#herder .el-menu-demo:first-child*/
/**
  导航栏配置
 */
#herder{
  font-weight: bolder;
}
#menu1{
  margin-right: 200px;
}
#menu2{
  margin-left:300px;
}
</style>