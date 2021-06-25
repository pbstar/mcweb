<template>
  <div class="about">
    <div class="web">
      <h3>— — 关于本站 — —</h3>
      <div class="webabout">
        <p>梦辰小站集合多种搜索引擎以及工作学习中常用网站的链接导航，个人博客记录学习中的知识总结，
          并结合努力开发中的个人组件库于一体的网站系统。
        </p>
        <p>本站已开源，Github项目地址：
          <a href="https://github.com/pbstar/mcweb">https://github.com/pbstar/mcweb</a>，
          支持二次开发，不要吝啬你的star哦！
        </p>
      </div>
    </div>
    <div class="people">
      <h3>— — 关于我们 — —</h3>
      <div class="peopleabout">
        <div class="peobox">
          <div class="ptop">
            <img src="http://q1.qlogo.cn/g?b=qq&nk=3251932707&s=640"
                 alt="">
            <div class="ptn">
              <h5>初辰ge</h5>
              <p>心中所想，便是梦想。</p>
            </div>
          </div>
          <div class="pmid">
            <p>QQ：3251932707</p>
            <p>CSDN：<a href="https://blog.csdn.net/chuenst">https://blog.csdn.net/chuenst</a></p>
            <p>GitHub：<a href="https://github.com/pbstar">https://github.com/pbstar</a></p>
            <p>专业技能：vue、php、MySQL</p>
          </div>
          <div class="pbot">
            <a target="_blank"
               href="http://wpa.qq.com/msgrd?v=3&uin=3251932707&site=qq&menu=yes">
              <el-button class="pbbtn"
                         type="primary">联系我</el-button>
            </a>
          </div>
        </div>
        <div class="peobox">
          <div class="ptop">
            <img src="http://q1.qlogo.cn/g?b=qq&nk=2958796054&s=640"
                 alt="">
            <div class="ptn">
              <h5>蓝色king</h5>
              <p>心事所想，便是梦想。</p>
            </div>
          </div>
          <div class="pmid">

          </div>
          <div class="pbot">
            <a target="_blank"
               href="http://wpa.qq.com/msgrd?v=3&uin=2958796054&site=qq&menu=yes">
              <el-button class="pbbtn"
                         type="primary">联系我</el-button>
            </a>
          </div>
        </div>
        <div class="peobox">
          <div class="ptop">
            <img src="http://q1.qlogo.cn/g?b=qq&nk=894352711&s=640"
                 alt="">
            <div class="ptn">
              <h5>暑假过期le</h5>
              <p>心事所想，便是梦想。</p>
            </div>
          </div>
          <div class="pmid">

          </div>
          <div class="pbot">
            <a target="_blank"
               href="http://wpa.qq.com/msgrd?v=3&uin=894352711&site=qq&menu=yes">
              <el-button class="pbbtn"
                         type="primary">联系我</el-button>
            </a>
          </div>
        </div>
        <div class="peobox join">
          <img src="https://img1.baidu.com/it/u=2375920824,1229333302&fm=26&fmt=auto&gp=0.jpg"
               alt="">
          <h5>加入我们</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about {
  min-height: 592px;
  background-color: #eee;
  padding: 10px 5%;
  overflow: hidden;
}
p,
h5 {
  margin: 0;
}
.web,
.people {
  overflow: hidden;
}
.webabout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.peopleabout {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}
.about h3 {
  text-align: center;
  font-size: 18px;
  color: #666;
  font-weight: 800;
  margin: 50px 0 30px;
}
.peobox {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  height: 370px;
  margin: 10px;
}
.peobox img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
}
.ptop {
  height: 60px;
  display: flex;
}
.ptn {
  height: 60px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pmid {
  height: 200px;
  margin: 15px 0;
}
.pbbtn {
  width: 100%;
}
.join {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.join img {
  width: 200px;
  height: 200px;
}
</style>
