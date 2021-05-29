<template>
  <div class="box">
    <Blogleft class="leftbox" />
    <Blogright class="rightbox" />
  </div>
</template>
<script>

import Blogleft from '../components/Blog/Blogleft'
import Blogright from '../components/Blog/Blogright'
export default {
  name: 'Blog',
  components: {
    Blogleft,
    Blogright
  }
}
</script>
<style scoped>
.box {
  min-height: 592px;
  padding: 20px 5%;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
}
.leftbox {
  flex: 1;
  margin-right: 20px;
}
.rightbox {
  width: 24%;
}
@media all and (max-width: 500px) {
  .rightbox {
    display: none;
  }
  .leftbox {
    width: 100% !important;
    margin-right: 0px;
  }
  *,
  body,
  .box {
    width: 100% !important;
  }
}
</style>