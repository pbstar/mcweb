<template>
  <div class="footer">
    <div class="copyright">
      Copyright © 2020 - 2021 by <a href="http://www.mcweb.top/">www.mcweb.top</a> All rights reserved.
      <p><a href="https://beian.miit.gov.cn">冀ICP备2021011553号</a>
        <br><img src="../assets/gh.png"
             alt=""
             srcset=""><a href="http://www.beian.gov.cn/">冀公安备13028302000151号</a>
      </p>
    </div>
  </div>
</template>
<style scoped>
@media all and (max-width: 500px) {
  .copyright {
    text-align: center;
    color: white;
    padding-top: 10px;
    line-height: 20px;
    font-size: 12px;
  }
  .copyright a {
    font-size: 12px;
  }
  .copyright img {
    width: 15px;
  }
}
@media all and (min-width: 500px) {
  .copyright {
    text-align: center;
    color: white;
    padding-top: 20px;
    line-height: 30px;
    font-size: 14px;
  }
  .copyright p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copyright img {
    margin-left: 10px;
  }
}
.footer {
  width: 100%;
  height: 100px;
  background-color: #545c64;
}
a {
  color: #ffd04b;
}
</style>