<template>
  <div>
    <div :class="{blogright1:isscroll}">
      <div class="brsearch brbox">
        <div class="brtitle">
          <span>文章搜索</span>
        </div>
        <div class="brinputbox brnrbox">
          <el-input class="brinput"
                    placeholder="请输入内容"
                    v-model="input">
            <template slot="append">
              <router-link :to="'/Blog/list/站内搜索-'+this.input"
                           class="inputbtn">
                <svg t="1620732637656"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2080"
                     width="16"
                     height="16">
                  <path d="M222.6944 222.7968A323.1488 323.1488 0 0 0 133.6832 512c19.2512-87.3728 64.512-172.7488 135.0144-243.3024C339.2512 198.1184 424.6272 152.8832 512 133.632c-101.632-19.1488-210.688 10.5216-289.3056 89.1648z"
                        fill="#707070"
                        p-id="2081"></path>
                  <path d="M989.44 822.1184l-121.7024-121.7024a118.016 118.016 0 0 0-92.8-34.1248c114.4576-165.5552 97.92-394.3936-49.4848-541.824-165.9392-165.9904-435.0464-165.9904-601.0368 0-165.9392 165.9904-165.9392 435.1232 0 601.1136 147.4048 147.4304 376.064 163.84 541.7216 49.3824-2.56 33.28 8.8576 67.5328 34.1248 92.8l121.7024 121.728c46.08 45.9776 121.3696 45.9776 167.3472 0 46.208-45.9776 46.208-121.2928 0.128-167.3728zM676.096 676.096c-138.6752 138.6752-363.392 138.6752-502.016 0-138.6752-138.6752-138.6752-363.4432 0-502.1184 138.624-138.6752 363.3408-138.6752 502.016 0 138.6496 138.5728 138.6496 363.4432 0 502.1184z"
                        fill="#707070"
                        p-id="2082"></path>
                </svg>
              </router-link>
            </template>
          </el-input>
        </div>
      </div>
      <div class="brbox">
        <div class="brtitle">
          <span>热门文章</span>
        </div>
        <div class="brrmbox brnrbox">
          <div class="brrm"
               v-for="remen in rmlist"
               v-bind:key="remen.id">
            <div class="brrml">
              <router-link :to="'/Blog/detail/'+remen.id">
                <span>{{remen.title}}</span>
              </router-link>
            </div>
            <div class="brrmr">
              <svg t="1619578594616"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="7174"
                   width="13"
                   height="13">
                <path d="M934.20544 422.25152c-75.82208-92.65664-182.56896-248.10496-422.22592-248.10496-239.62624 0-346.37312 155.44832-422.21056 248.10496-17.85344 21.84704-27.68896 50.816-27.68896 81.6384 0 30.79168 9.83552 59.79136 27.68896 81.60768 75.83744 92.69248 182.56384 248.10496 422.21056 248.10496 239.65696 0 346.40384-155.41248 422.22592-248.10496 17.85856-21.82144 27.70432-50.82112 27.70432-81.60768 0-30.8224-9.84576-59.79136-27.70432-81.6384z m-34.5088 120.81664c-70.4768 86.08768-165.62688 230.59968-387.71712 230.59968-222.08 0-317.23008-144.512-387.70176-230.59968-8.59136-10.53184-13.32736-24.45312-13.32736-39.17824 0-14.75584 4.73088-28.6464 13.32736-39.1424 70.4768-86.12864 165.632-230.66624 387.70176-230.66624 222.06464 0 317.24032 144.5376 387.71712 230.66624 8.63232 10.496 13.30176 24.38656 13.30176 39.1424-0.00512 14.72512-4.67456 28.65152-13.30176 39.17824zM511.97952 333.99808c-76.3392 0-138.496 76.23168-138.496 169.86112 0 93.65504 62.16192 169.86624 138.496 169.86624 76.34944 0 138.50112-76.2112 138.50112-169.86624 0-93.62432-62.15168-169.86112-138.50112-169.86112z m0 279.79776c-49.39264 0-89.59488-49.32608-89.59488-109.93152 0-60.58496 40.20224-109.88544 89.59488-109.88544 49.4336 0 89.60512 49.30048 89.60512 109.88544 0.03072 60.60544-40.17152 109.93152-89.60512 109.93152z"
                      p-id="7175"
                      fill="#2c2c2c"></path>
              </svg>
              <span>{{remen.readnum}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="brbox">
        <div class="brtitle">
          <span>分类专栏</span>
        </div>
        <div class="brflbox brnrbox">
          <div v-for="item2 in classlist"
               v-bind:key="item2.id"
               class="brrm">
            <router-link :to="'/Blog/list/'+item2.class"
                         class="brrm">
              <div class="brrml">
                <span>{{item2.class}}</span>
              </div>
              <div class="brrmr">
                <span>{{item2.num}} 篇</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="brbox lastbrbox">
        <div class="brtitle">
          <span>友情链接</span>
        </div>
        <div class="bryqbox brnrbox">
          <a href="http://www.mcweb.top/">梦辰小站</a>
          <a href="http://api.mcweb.top/">梦辰Api</a>
          <a href="http://emoji.mcweb.top/">表情包搜索助手</a>
          <a href="http://img.mcweb.top/">梦辰图床</a>
          <a href="https://github.com/pbstar">初辰Github</a>
          <a href="https://blog.csdn.net/chuenst">初辰CSDN</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.blogright1 {
  position: fixed;
  bottom: 120px;
  left: 73.4%;
  right: 5%;
}
.brbox {
  background-color: #fff;
  margin-bottom: 20px;
}
.brtitle {
  background-color: #545c64;
  color: #ffd04b;
  font-weight: 800;
  line-height: 35px;
  height: 35px;
  padding-left: 10px;
  font-size: 15px;
}
.brnrbox {
  padding: 10px;
  font-size: 14px;
}
.bryqbox a {
  color: black;
  margin-right: 20px;
  line-height: 30px;
  height: 30px;
  white-space: nowrap;
}
.bryqbox a:hover {
  color: blue !important;
}
.brrm {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
  height: 30px;
}
.brrm .brrmr {
  display: flex;
  align-items: center;
}
.brrm .brrml {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brrm .brrmr svg {
  margin-top: 2px;
  margin-right: 2px;
}
.brrm a {
  color: black;
  width: 100%;
}
.brrm a:hover {
  color: blue;
}
.lastbrbox {
  margin-bottom: 0;
}
.inputbtn {
  color: black;
}
.inputbtn svg {
  margin-top: -5px;
}
</style>
<style>
.brinput input {
  height: 36px !important;
}
.brinput .el-input-group__append {
  font-size: 16px;
  padding: 0 15px;
  height: 32px;
  box-sizing: border-box;
}
</style>
<script>
export default {
  data () {
    return {
      isscroll: false,
      input: '',
      rmlist: [],
      classlist: []
    }
  },
  created () {
    this.getlist()
    if (this.rmlist == '') {
      this.getlist()
    }
  },
  mounted () {
    window.addEventListener("scroll", this.showIcon);
  },
  methods: {
    showIcon () {
      if (document.documentElement.scrollTop > 352) {
        this.isscroll = true
      } else {
        this.isscroll = false
      }
    },
    async getlist () {
      const res = await this.$http.get('http://39.97.97.54:81/mcblog/gethot.php')
      this.rmlist = res.data
      const res2 = await this.$http.get('http://39.97.97.54:81/mcblog/getclassnames.php')
      this.classlist = res2.data
    }
  }
}
</script>
