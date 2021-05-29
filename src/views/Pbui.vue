<template>
  <div class="box">
    <div class="uilbox">
      <el-row class="tac">
        <el-col :span="24">
          <h5 class="bigtitle">PBui-基础版</h5>
          <el-menu default-active="1"
                   class="el-menu-vertical-demo uinav"
                   @open="handleOpen"
                   @close="handleClose">
            <el-menu-item index="1">
              <span slot="title">快速上手</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">按钮 button</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">输入框 input</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">文本域 textarea</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">表格 table</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title">图片 img</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="uirbox">
      <Start />
      <Button />
      <div class="inputbox">
        input
      </div>
      <div class="textbox">
        wenbenyu
      </div>
      <div class="tablebox">
        biaoge
      </div>
      <div class="imgbox">
        tupian
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/pbui.css";
.box {
  min-height: 592px;
  margin: 0 3.5%;
  display: flex;
}
.uilbox {
  width: 200px;
}
.bigtitle {
  line-height: 60px;
  height: 60px;
  color: #ffd04b;
  margin-bottom: 0;
  padding-left: 20px;
  border-bottom: 2px solid #ffd04b;
  border-right: 1px solid #cfcfcf;
}
.uinav {
  padding-top: 10px;
}
.uirbox {
  flex: 1;
  padding: 5px 20px;
}
@media all and (max-width: 500px) {
  .uilbox {
    display: none;
  }
  .uirbox {
    flex: 1;
    padding: 5px 0px;
  }
}
</style>
<style>
.uinav .el-menu-item {
  height: 38px;
  line-height: 33px;
}
</style>
<script>
import Start from '../components/PBui/start'
import Button from '../components/PBui/button'
export default {
  name: 'PBui',
  components: {
    Start,
    Button
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>