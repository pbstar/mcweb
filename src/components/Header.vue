<template>
  <div id="header">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <div class="logobox">梦辰小站</div>
      <router-link to="/About">
        <el-menu-item style="z-index:100"
                      index="4">关于</el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template slot="title"
                  class="zjk">组件库</template>
        <router-link to="/Pbui">
          <el-menu-item index="3-1">基础版</el-menu-item>
        </router-link>
        <router-link to="/PbuiVue">
          <el-menu-item index="3-2">Vue版</el-menu-item>
        </router-link>
        <router-link to="/PbuiWx">
          <el-menu-item index="3-3">微信小程序版</el-menu-item>
        </router-link>
      </el-submenu>
      <router-link to="/Blog/list/最新文章">
        <el-menu-item index="2">博客</el-menu-item>
      </router-link>
      <router-link to="/">
        <el-menu-item index="1">搜索导航</el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    };
  },
  created () {
    var pattern = /Blog/;
    var pattern2 = /Pbui/;
    var pattern3 = /About/;
    var pattern4 = /PbuiVue/;
    var pattern5 = /PbuiWx/;
    var str = window.location.href;
    if (pattern.test(str) == true) {
      this.activeIndex = '2'
    } else if (pattern2.test(str) == true) {
      if (pattern4.test(str) == true) {
        this.activeIndex = '3-2'
      } else if (pattern5.test(str) == true) {
        this.activeIndex = '3-3'
      } else {
        this.activeIndex = '3-1'
      }
    } else if (pattern3.test(str) == true) {
      this.activeIndex = '4'
    } else {
      this.activeIndex = '1'
    }
  }
}
</script>
<style>
.el-menu-demo {
  padding: 0 5% !important;
}
.logobox {
  float: left;
  line-height: 60px;
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
}
a {
  text-decoration: none !important;
}
.el-submenu__title {
  line-height: 56px !important;
}
#header .el-menu-demo li {
  float: right !important;
  border-bottom-width: 2px !important;
  border-bottom-style: solid !important;
  box-sizing: content-box !important;
  height: 58px;
}
@media all and (max-width: 500px) {
  #header .el-menu-item {
    padding: 0 10px !important;
  }
  #header .el-submenu__title {
    padding: 0 5px 0 10px !important;
  }
  .logobox {
    float: left;
    line-height: 58px;
    color: white;
    font-size: 16px;
    letter-spacing: 2px;
  }
}
</style>