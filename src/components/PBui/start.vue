<template>
  <div>
    <h4>快速上手</h4>
    <p>PBui 提供以下几种方式帮你快速上手，每一种方式针对具有不同技能等级的开发者和不同的使用场景。继续阅读下面的内容，看看哪种方式适合你的需求吧。</p>
    <h5>cdn 直接引入</h5>
    <div class="codebox">
      <button class="copy"
              @click="clickfun($event)">复制</button>
      <code>
        &lt;link rel="stylesheet" href="http://cdn.mcweb.top/pbui.css"&gt;
      </code>
    </div>
  </div>
</template>
<style scoped>
.uirbox h4 {
  margin-top: 10px;
}
.uirbox p {
  margin-bottom: 0px;
}
.uirbox h5 {
  margin-top: 10px;
}
.codebox {
  position: relative;
}
code {
  border: 1px solid rgb(161, 161, 161);
  padding: 10px;
  background-color: #eee;
  display: block;
  margin: 10px 0;
  font-size: 13px;
}
.copy {
  position: absolute;
  top: 9px;
  right: 10px;
  font-size: 12px;
  border: none;
  background-color: rgb(209, 209, 209);
  padding: 3px 5px;
  border-radius: 5px;
}
</style>
<script>
export default {
  methods: {
    clickfun (e) {
      let range = document.createRange();
      range.selectNodeContents(e.currentTarget.nextElementSibling);
      var selection = document.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('Copy')
      e.currentTarget.innerHTML = '已复制'
      selection.removeAllRanges();
    }
  }
}
</script>