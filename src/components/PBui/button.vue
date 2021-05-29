<template>
  <div class="buttonbox">
    <h4>按钮 Button</h4>
    <p>可作为按钮使用的标签或元素为 a、button 或 input 元素添加按钮类（button class）即可使用 PBui 提供的样式。</p>
    <div class="codebox">
      <div class="codebox1">
        <p>实例：</p>
        <div class="code1">
          <a href="javascript:0"
             class="pb-btn">Link</a>
          <button class="pb-btn"
                  type="submit">Button</button>
          <input class="pb-btn"
                 type="button"
                 value="Input">
          <input class="pb-btn"
                 type="submit"
                 value="Submit">
        </div>
      </div>
      <div class="codebox2">
        <button class="copy"
                @click="clickfun($event)">复制</button>
        <code>
          &lt;a class="pb-btn"
          href="#"&gt;Link&lt;/a&gt;<br>
          &lt;button class="pb-btn"
          type="submit"&gt;Button&lt;/button&gt;<br>
          &lt;input class="pb-btn"
          type="button" value="Input"&gt;<br>
          &lt;input class="pb-btn"
          type="submit" value="Submit"&gt;
        </code>
      </div>
    </div>
    <h5>颜色</h5>
    <p>需要让按钮具有不同颜色吗？使用 .pb-btn-white、.pb-btn-blue 或 .pb-btn-green 等就可以获得不同颜色的按钮。</p>
    <div class="codebox">
      <div class="codebox1">
        <p>实例：</p>
        <div class="code1">
          <button class="pb-btn pb-btn-white"
                  type="submit">白色（简洁）</button>
          <button class="pb-btn pb-btn-blue"
                  type="submit">蓝色（首选）</button>
          <button class="pb-btn pb-btn-green"
                  type="submit">绿色（成功）</button>
          <button class="pb-btn pb-btn-yellow"
                  type="submit">黄色（一般）</button>
          <button class="pb-btn pb-btn-orange"
                  type="submit">橙色（警告）</button>
          <button class="pb-btn pb-btn-red"
                  type="submit">红色（严重）</button>
        </div>
      </div>
      <div class="codebox2">
        <button class="copy"
                @click="clickfun($event)">复制</button>
        <code>
          &lt;button class="pb-btn pb-btn-white"
          type="submit"&gt;白色（简洁）&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-blue"
          type="submit"&gt;蓝色（首选）&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-green"
          type="submit"&gt;绿色（成功）&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-yellow"
          type="submit"&gt;黄色（一般）&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-orange"
          type="submit"&gt;橙色（警告）&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-red"
          type="submit"&gt;红色（严重）&lt;/button&gt;
        </code>
      </div>
    </div>
    <h5>尺寸</h5>
    <p>需要让按钮具有不同尺寸吗？使用 .pb-btn-s、.pb-btn-m 或 .pb-btn-l 就可以获得不同尺寸的按钮。</p>
    <div class="codebox">
      <div class="codebox1">
        <p>实例：</p>
        <div class="code1">
          <button class="pb-btn pb-btn-blue pb-btn-s"
                  type="submit">超小按钮</button>
          <button class="pb-btn pb-btn-blue pb-btn-m"
                  type="submit">小按钮</button>
          <button class="pb-btn pb-btn-blue pb-btn-l"
                  type="submit">正常按钮</button>
          <button class="pb-btn pb-btn-blue pb-btn-xl"
                  type="submit">大按钮</button>
        </div>
      </div>
      <div class="codebox2">
        <button class="copy"
                @click="clickfun($event)">复制</button>
        <code>
          &lt;button class="pb-btn pb-btn-blue pb-btn-s"
          type="submit"&gt;超小按钮&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-blue pb-btn-m"
          type="submit"&gt;小按钮&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-blue pb-btn-l"
          type="submit"&gt;正常按钮&lt;/button&gt;<br>
          &lt;button class="pb-btn pb-btn-blue pb-btn-xl"
          type="submit"&gt;大按钮&lt;/button&gt;
        </code>
      </div>
    </div>
  </div>
</template>
<style scoped>
.uirbox h4 {
  color: #ffd04b;
  margin-top: 10px;
}
.uirbox h5 {
  margin-top: 10px;
}
.codebox1,
.codebox2 {
  border: 1px solid rgb(161, 161, 161);
  padding: 10px;
}
.codebox2 {
  border-top: none;
  font-size: 15px;
  background-color: #eee;
  position: relative;
}
.codebox1 p {
  font-size: 14px;
  color: #8f8f8f;
}
.pb-btn {
  margin: 3px 10px 3px 0;
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
      // 创建range对象
      let range = document.createRange();
      // 传入需要选中的节点
      range.selectNodeContents(e.currentTarget.nextElementSibling);
      var selection = document.getSelection();
      // 清空选中的区域
      selection.removeAllRanges();
      // 添加选中区域
      selection.addRange(range);
      // 执行复制
      document.execCommand('Copy')
      e.currentTarget.innerHTML = '已复制'
      selection.removeAllRanges();
    }
  }
}
</script>