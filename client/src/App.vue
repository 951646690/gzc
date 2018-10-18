<template>
  <div id="app">
    <header id="header">
      <div class="filter-box"></div>
      <div class="white-box"></div>
      <div class="nav-box">
        <el-row >
          <el-col :span="6"><router-link to="/">首页</router-link></el-col>
          <el-col :span="6"><router-link to="/dm">番剧</router-link></el-col>
          <el-col :span="6"><router-link to="/games">游戏</router-link></el-col>
          <el-col :span="6"><router-link to="/contact">灌水</router-link></el-col>
        </el-row>
      </div>
    </header> 
    <router-view/>
  </div>
</template>
<script>

export default {
  components: {
   
  }
}
</script>

<style lang="scss">
html,body,ul,input,button,a,li,h1,h2,p,span{
  margin: 0;
  padding: 0;
}
*{
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.gzc-nav{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
#header{
  position: relative;
  width: 100%;
  height: 170px;
  background: url('./assets/index/banner.png') center center no-repeat;
  overflow: hidden;
}
.filter-box{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: url('./assets/index/banner.png');
  background-color: hsla(0,0%,100%,.4);
  background-position-x: 50%;
  background-position-y: 8%;
  filter: blur(4px);
}
.white-box{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: hsla(0,0%,100%,.4);
}
body{
  a,a:hover,a:focus,a:active{
    text-decoration: none;
  }
}
.el-row{
  height: 40px;
  line-height: 40px;
} 
.nav-box{
  width: 50%;
  margin: 0 auto;
  min-width: 400px;
  overflow: hidden;
  a{
    display: block;
    width: 50%;
    margin: 0 auto;
    color: #5e5959;
    transition: all .5s;
  }
  .router-link-exact-active{
    width: 100%;
    background: #ff893a75;
    color: #fff;
  }
}
</style>
