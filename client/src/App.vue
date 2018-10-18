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
      <div id="clock">
          <p class="date">{{ date }}</p>
          <p class="time">{{ time }}</p>
      </div>
    </header>
    <div class="nav-2">
      <el-row>
        <el-col :span="24" >
          <el-breadcrumb separator-class="el-icon-arrow-right" >
            <el-breadcrumb-item v-for="(item,index) in $route.matched" :key='index' :to='{name:item.name}'>{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>  
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name:'app',
  data(){
    return {
      week:['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      time: '',
      date: ''
    }
  },
  components: {
   
  },
  created(){
    var timerID = setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  methods:{
    updateTime() {
        let cd = new Date();
        this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
        let zero = '';
        for(let i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }
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
  min-width: 1150px;
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
.el-breadcrumb{
  display: inline-block;
  :nth-child(1) .is-link{
    color: #9E9E9E !important;
    font-weight: 800 !important;
  }
}
.is-link{
  padding-bottom: 3px;
  font-size: 16px;
  }
.is-link:hover{
  border-bottom: 3px solid #ccc !important;
  color: #5e5959 !important;
}
.nav-2{
  width: 1150px;
  margin: 0 auto;
  padding-left: 20px;
  text-align: left;
}
#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 10%;
  bottom: 20px;
  color: #fff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
#clock .time {
  letter-spacing: 0.05em;
  font-size: 50px;
  padding: 5px 0;
}
#clock .date {
  letter-spacing: 0.1em;
  font-size: 20px;
  color: #686060;
}
</style>
