<template>
  <div class="about">
    <div class="tx">
      <img src="https://ftp.bmp.ovh/imgs/2021/05/eceed9063b3aeba0.jpg"
           alt="">
    </div>
    <div class="name">
      <h3>初辰ge</h3>
    </div>
    <div class="table">
      <span>name=>彭勃</span>
      <span>诞生于两千零一年的小男孩</span>
      <span>热爱前端的小菜鸡</span>
      <span>来自河北唐山现求学于河北保定</span>
      <span>QQ：24612582</span>
      <span>Tel：15555222865</span>
      <span>E-mail：pbstar@sina.cn</span>
    </div>
  </div>
</template>
<style scoped>
.about {
  min-height: 592px;
  background-color: #eee;
  padding: 0 5%;
  overflow: hidden;
}
.tx {
  width: 100px;
  height: 100px;
  margin: 50px auto 0;
  border: 5px solid rgb(255, 208, 75);
  border-radius: 50%;
  box-sizing: border-box;
}
.tx img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.name h3 {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
}
.table {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 35px;
}
</style>
