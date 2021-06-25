<template>
  <div class="detail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>
        <router-link to="/Blog/list/最新文章">
          文章列表
        </router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>文章详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="postbox">
      <div class="posttitle">
        <span>{{posts.title}}</span>
      </div>
      <div class="ycbox">
        <div>
          <svg t="1619682446056"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="2212"
               width="32"
               height="32">
            <path d="M617.4 422.9c-13.2 21.7-29.2 41.8-47.1 59h94.5c-12.6-17.9-30.5-39.9-47.4-59zM328.2 512.6h108V533h-108zM328.2 466.5h108v20.1h-108z"
                  fill="#D51A26"
                  p-id="2213"></path>
            <path d="M878.7 258.5H146.4c-46.7 0-84.9 38.2-84.9 84.9v342.3c0 46.7 38.2 84.9 84.9 84.9h732.3c46.7 0 84.9-38.2 84.9-84.9V343.4c-0.1-46.7-38.3-84.9-84.9-84.9zM206.1 636c26.1-46.8 28.3-114.9 28.3-163.3V382h261.8v33.9H271.1v56.8c0 52.4-4.4 131.2-32 181.8-7.2-5.9-23.6-15-33-18.5z m55.6-6.3c17.9-15.4 37.4-38.9 49.3-59.3l35.5 11.3c-15.1 23.9-36.7 51.5-53.4 68.1-7.6-5.6-22.3-15.3-31.4-20.1z m139.4-5c0 17-3.1 26.1-15.1 31.1-11.6 5.3-27.9 5.3-50.2 5.3-1.3-10-6-23.5-10.4-33 13.8 0.3 29.2 0.3 33.3 0.3 4.7 0 6-0.9 6-4.7V561h-72.8V438.6h55.6c4.1-7.8 7.5-15.7 9.7-22.3l44.9 5.3c-3.8 5.7-7.5 11.6-11.3 17h84.1V561h-73.8v63.7z m65.9 26.4c-11-16.6-34.2-44.9-51.2-65.6l29.8-15.4c16.6 18.8 41.1 45.8 53.4 62.8l-32 18.2z m124.3-137.2v95.8c0 12.9 2.5 14.8 16.6 14.8h42.7c12.6 0 14.8-6.3 16.6-39.2 7.8 6 22.6 11.6 32.3 13.5-4.1 44.3-13.8 57.5-45.8 57.5h-50.2c-36.7 0-48.3-10-48.3-46.2V495.4c-3.1 2.5-6.6 5-9.7 7.5-6-7.8-18.5-21.3-26.7-27.6 38-25.7 71-67.8 87.3-107.4l34.2 10.4c-1.9 4.4-4.1 9.1-6 13.5 24.2 25.4 53.4 57.8 67.2 78.8l-23.9 22.6v1.3c-2.5 52.1-5.7 75-12.9 83.5-5.7 6.9-12.6 9.4-21 10.7-7.5 0.9-19.8 1.3-33.6 0.9-0.3-9.7-4.1-22.9-8.8-31.4 10 1.3 19.5 1.3 24.2 1.3 4.1 0 6.6-0.6 8.8-3.5 2.8-3.5 5-15.1 6.9-42.1h-49.9zM705.9 404h35.8v177.4h-35.8V404z m97 213.5c0 21.3-4.4 30.8-17.6 36.4-12.9 6-33 6.9-62.5 6.9-1.6-10.4-7.2-26.1-12.6-36.1 19.8 0.9 40.8 0.9 47.1 0.9 6-0.3 8.5-2.2 8.5-8.2V374.2h37v243.3z"
                  fill="#D51A26"
                  p-id="2214"></path>
          </svg>
        </div>
        <div class="biaoqian">
          <div class="author">
            <div>
              <span>{{posts.author}}</span>
              <span class="time">{{gettime(posts.time)}}</span>
            </div>
            <div>
              <svg t="1619578364631"
                   class="icon"
                   viewBox="0 0 1260 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4989"
                   width="15"
                   height="15">
                <path d="M900.962462 117.208615a223.547077 223.547077 0 0 1 168.251076 75.460923l1.732924 1.890462 1.732923 2.205538c20.48 23.788308 35.288615 51.987692 43.323077 82.313847v1.496615c2.756923 9.531077 4.883692 19.219692 6.537846 29.065846l1.496615 11.657846c0.787692 7.168 1.260308 14.414769 1.339077 21.661539 0 7.246769-0.393846 14.493538-1.102769 21.661538v2.126769C1113.009231 541.380923 830.779077 785.723077 630.153846 920.654769 429.607385 785.723077 147.298462 541.380923 133.277538 368.718769v-2.126769a215.670154 215.670154 0 0 1-1.102769-21.661538c0-6.852923 0.315077-13.627077 1.102769-20.401231l1.496616-12.760616c1.575385-9.767385 3.780923-19.456 6.459077-29.065846v-1.732923c8.034462-30.326154 22.843077-58.446769 43.323077-82.313846l1.732923-2.126769 1.339077-1.339077 1.496615-1.732923A223.547077 223.547077 0 0 1 357.454769 118.153846c82.077538 0 164.627692 31.507692 205.351385 78.454154l64.984615 75.618462 64.984616-75.618462c40.723692-46.788923 123.037538-78.454154 205.351384-78.454154l2.835693-0.787692zM898.126769 31.507692C787.456 31.507692 683.480615 74.830769 627.318154 139.736615 571.234462 74.830769 467.259077 31.507692 356.588308 31.507692a309.956923 309.956923 0 0 0-230.715077 104.448 67.347692 67.347692 0 0 0-5.592616 6.537846 294.596923 294.596923 0 0 0-62.38523 116.263385 346.584615 346.584615 0 0 0-9.137231 40.96l-1.732923 14.729846a272.541538 272.541538 0 0 0-1.732923 30.326154c0 10.397538 0.630154 20.795077 1.732923 31.192615 23.000615 283.726769 537.836308 618.889846 559.734154 632.91077L630.153846 1024l23.394462-15.123692c21.661538-14.178462 536.576-349.184 559.734154-632.989539a274.983385 274.983385 0 0 0 0-62.227692l-1.732924-14.651077a346.584615 346.584615 0 0 0-9.058461-40.96 294.596923 294.596923 0 0 0-62.385231-116.342154A309.956923 309.956923 0 0 0 900.962462 30.72l-2.835693 0.787692z"
                      fill="#2c2c2c"
                      p-id="4990"></path>
              </svg>
              <span>{{posts.likenum}}</span>
              <svg t="1619578594616"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="7174"
                   width="16"
                   height="16">
                <path d="M934.20544 422.25152c-75.82208-92.65664-182.56896-248.10496-422.22592-248.10496-239.62624 0-346.37312 155.44832-422.21056 248.10496-17.85344 21.84704-27.68896 50.816-27.68896 81.6384 0 30.79168 9.83552 59.79136 27.68896 81.60768 75.83744 92.69248 182.56384 248.10496 422.21056 248.10496 239.65696 0 346.40384-155.41248 422.22592-248.10496 17.85856-21.82144 27.70432-50.82112 27.70432-81.60768 0-30.8224-9.84576-59.79136-27.70432-81.6384z m-34.5088 120.81664c-70.4768 86.08768-165.62688 230.59968-387.71712 230.59968-222.08 0-317.23008-144.512-387.70176-230.59968-8.59136-10.53184-13.32736-24.45312-13.32736-39.17824 0-14.75584 4.73088-28.6464 13.32736-39.1424 70.4768-86.12864 165.632-230.66624 387.70176-230.66624 222.06464 0 317.24032 144.5376 387.71712 230.66624 8.63232 10.496 13.30176 24.38656 13.30176 39.1424-0.00512 14.72512-4.67456 28.65152-13.30176 39.17824zM511.97952 333.99808c-76.3392 0-138.496 76.23168-138.496 169.86112 0 93.65504 62.16192 169.86624 138.496 169.86624 76.34944 0 138.50112-76.2112 138.50112-169.86624 0-93.62432-62.15168-169.86112-138.50112-169.86112z m0 279.79776c-49.39264 0-89.59488-49.32608-89.59488-109.93152 0-60.58496 40.20224-109.88544 89.59488-109.88544 49.4336 0 89.60512 49.30048 89.60512 109.88544 0.03072 60.60544-40.17152 109.93152-89.60512 109.93152z"
                      p-id="7175"
                      fill="#2c2c2c"></path>
              </svg>
              <span>{{posts.readnum}}</span>
            </div>
          </div>
          <div class="clas">
            <span>文章分类：</span>
            <span>{{posts.class}}</span>
          </div>
        </div>
      </div>
      <div class="postcontent"
           v-html="posts.content">
      </div>
    </div>
    <div id="ewm"
         @mouseover="ewm=true"
         @mouseleave="ewm=false">
      <svg t="1621251776324"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="1854"
           width="32"
           height="32">
        <path d="M514.10411 913.183562c0-145.884932 105.205479-267.923288 244.076712-294.575343v-42.082192c-1.40274-21.041096 7.013699-40.679452 21.041096-56.109589 14.027397-14.027397 32.263014-21.041096 50.49863-21.041096 15.430137 0 29.457534 4.208219 40.679452 12.624658V168.328767c0-60.317808-47.693151-108.010959-108.010959-108.010959H233.556164c-60.317808 0-108.010959 47.693151-108.010959 108.010959v662.093151c0 60.317808 47.693151 108.010959 108.010959 108.010959h280.547946v-25.249315zM296.679452 326.838356c2.805479-15.430137 16.832877-25.249315 33.665753-25.249315h338.060274c15.430137 0 30.860274 9.819178 33.665754 25.249315 4.208219 22.443836-12.624658 40.679452-33.665754 40.679452H328.942466c-21.041096 0-36.471233-18.235616-32.263014-40.679452zM463.605479 517.610959c-2.805479 15.430137-18.235616 25.249315-33.665753 25.249315h-100.99726c-23.846575 0-42.082192-25.249315-29.457534-49.09589 5.610959-11.221918 18.235616-16.832877 30.860273-16.832877h100.997261c21.041096 0 37.873973 18.235616 32.263013 40.679452z m35.068494-7.013699c0-21.041096 18.235616-35.068493 39.276712-32.263013 15.430137 2.805479 26.652055 15.430137 28.054794 29.457534 1.40274 19.638356-14.027397 35.068493-33.665753 35.068493-18.235616 0-33.665753-15.430137-33.665753-32.263014z"
              p-id="1855"></path>
        <path d="M1005.063014 737.841096L842.345205 559.693151c-7.013699-7.013699-16.832877-7.013699-23.846575 0-4.208219 4.208219-5.610959 8.416438-4.208219 14.027397v95.386301c-134.663014 0-244.076712 109.413699-244.076712 244.076713 0 35.068493 7.013699 67.331507 19.638356 96.789041 19.638356-100.99726 116.427397-178.147945 224.438356-178.147945v95.386301c0 4.208219 1.40274 9.819178 4.208219 14.027397 2.805479 2.805479 7.013699 5.610959 11.221918 5.610959 5.610959 0 9.819178-2.805479 12.624657-5.610959l161.315069-176.745205c2.805479-2.805479 4.208219-8.416438 4.208219-12.624658 1.40274-7.013699 0-11.221918-2.805479-14.027397z"
              p-id="1856"></path>
      </svg>
      <span>分享文章</span>
      <div id="ewmimg"
           v-show="ewm">
        <img :src="imgPay"
             alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>
.detail {
  width: 100%;
}
.postbox {
  background-color: #fff;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
}
.ycbox {
  width: 100%;
  background-color: #eee;
  padding: 0px 5px;
  display: flex;
}
.biaoqian {
  flex: 1;
  padding: 4px;
}
.author {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}
.author svg {
  margin: 0 3px 3px 10px;
}
.time {
  margin-left: 10px;
}
.clas {
  font-size: 13px;
}
.detail {
  max-width: 100%;
}
#ewm {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: fixed;
  width: 4%;
  right: 0.5%;
  bottom: 120px;
  cursor: pointer;
  font-size: 12px;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  z-index: 999;
}
#ewmimg {
  position: absolute;
  left: -162px;
  top: -2px;
  border: 3px solid rgb(204, 204, 204);
  border-radius: 12px;
  overflow: hidden;
  z-index: 999;
  background-color: rgb(190, 190, 190);
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
@import "../../assets/poststyle.css";
@media all and (min-width: 500px) {
  .posttitle {
    font-size: 28px;
    font-weight: 800;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  .postcontent {
    padding: 10px 10px 0;
  }
}
@import url("../../assets/poststyle_mobile.css") (max-width: 500px);
@media all and (max-width: 500px) {
  .posttitle {
    font-size: 20px;
    font-weight: 800;
    padding: 0px;
    margin-bottom: 10px;
  }
  .biaoqian {
    font-size: 12px !important;
  }
  .clas {
    font-size: 12px;
  }
  .postcontent {
    padding: 0;
  }
  #ewm {
    display: none;
  }
}
</style>
<script>
import QRCode from 'qrcode'
export default {
  props: {
  },
  data () {
    return {
      posts: [],
      postid: '',
      imgPay: '',
      ewm: false
    }
  },
  created () {
    this.postid = this.$route.params.id
    this.getdetail()
    QRCode.toDataURL(window.location.href)
      .then(url => {
        this.imgPay = url
      })
      .catch(err => {
        console.error(err)
      })

  },
  methods: {
    getcopy () {
      var pre = document.querySelectorAll('.postcontent pre')
      for (var i = 0; i < pre.length; i++) {
        pre[i].style.position = 'relative'
        var copybtn = document.createElement("button");
        copybtn.className = 'copy'
        copybtn.innerText = '复制'
        copybtn.style.position = 'absolute'
        copybtn.style.top = '9px'
        copybtn.style.right = '10px'
        copybtn.style.fontSize = '12px'
        copybtn.style.border = 'none'
        copybtn.style.backgroundColor = 'rgb(209, 209, 209)'
        copybtn.style.padding = '3px 5px'
        copybtn.style.borderRadius = '5px'
        pre[i].appendChild(copybtn);
      }
      var copy = document.querySelectorAll('.postcontent .copy')
      for (var j = 0; j < copy.length; j++) {
        copy[j].addEventListener('click', (e) => {
          var input = document.createElement("input");
          input.value = e.target.previousElementSibling.innerHTML;
          document.body.appendChild(input);
          input.select();
          document.execCommand("Copy");
          document.body.removeChild(input);
          e.target.innerHTML = '已复制'
        })
      }
    },
    gettime (time) {
      var timestamp = new Date(time * 1000);
      var year = 1900 + timestamp.getYear();
      var month = "0" + (timestamp.getMonth() + 1);
      var date = "0" + timestamp.getDate();
      var hour = "0" + timestamp.getHours();
      var minute = "0" + timestamp.getMinutes();
      return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length)
        + " " + hour.substring(hour.length - 2, hour.length) + ":"
        + minute.substring(minute.length - 2, minute.length);
    },
    async getdetail () {
      const res = await this.$http.get('http://39.97.97.54:81/mcblog/getdetail.php?id=' + this.postid)
      this.posts = res.data[0]
    },
    setSortHover () {
      this.ewm = true
    }
  },
  watch: {
    '$route': function () {
      this.postid = this.$route.params.id
      this.getdetail()
    },
    posts: function () {
      this.$nextTick(function () {
        this.getcopy()
      })
    }
  }
}
</script>