<template>
  <div class="footer">
    <div class="copyright">
      Copyright © 2021 by <a href="http://www.mcweb.top/">www.mcweb.top</a> All rights reserved.
      <p><a href="https://beian.miit.gov.cn">冀ICP备2021011553号</a></p>
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
}
@media all and (min-width: 500px) {
  .copyright {
    text-align: center;
    color: white;
    padding-top: 20px;
    line-height: 30px;
    font-size: 14px;
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