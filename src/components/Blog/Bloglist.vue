<template>
  <div class="blbox">
    <div class="figure">
      <el-carousel :interval="4000"
                   type="card"
                   height="200px">
        <el-carousel-item>
          <router-link to="/Blog/detail/22">
            <img src="https://img2.baidu.com/it/u=2407027947,3539111736&fm=26&fmt=auto&gp=0.jpg"
                 alt="">
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/Blog/detail/18">
            <img src="https://img2.baidu.com/it/u=2880312097,2157387197&fm=26&fmt=auto&gp=0.jpg"
                 alt="">
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/Blog/detail/15">
            <img src="https://img0.baidu.com/it/u=3522333077,1160624753&fm=26&fmt=auto&gp=0.jpg"
                 alt="">
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/Blog/detail/12">
            <img src="https://img1.baidu.com/it/u=417571815,4029812825&fm=26&fmt=auto&gp=0.jpg"
                 alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="posts">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>
          <router-link to="/Blog/list/最新文章">
            文章列表
          </router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{list}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="prompt"
           v-show="isprompt">
        <svg t="1620788195877"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2050"
             width="20"
             height="20"
             style="margin-bottom:3px">
          <path d="M944.256 926.4c-31.04 0-820.8 0-865.792 0-44.288 0-65.856-52.16-46.4-91.968C58.688 780.096 441.216 136.064 465.088 90.176c21.376-41.216 72.384-41.92 93.76 0 32.576 63.808 413.248 704.96 432 742.272C1014.464 879.104 984.576 926.4 944.256 926.4L944.256 926.4zM466.496 332.736l30.464 319.616 45.632 0 30.528-319.616L466.496 332.736 466.496 332.736zM573.12 698.112 466.496 698.112l0 91.264 106.624 0L573.12 698.112 573.12 698.112z"
                fill="#e8b517"
                p-id="2051"></path>
        </svg>
        {{prompt}}
      </div>
      <div class="pastbox"
           v-for="post in postlist"
           :key="post.id">
        <div class="imgbox">
          <img :src="post.image"
               alt="">
        </div>
        <div class="postnrbox">
          <router-link :to="'/Blog/detail/'+post.id">
            <div class="posttitle">
              <p>{{post.title}}</p>
            </div>
          </router-link>
          <div class="postintroduce">
            <span>{{post.intro}}</span>
          </div>
          <div class="postother">
            <div class="poleft">
              <svg t="1619578036457"
                   class="icon firsticon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4145"
                   width="10"
                   height="10">
                <path d="M163.2 69.376c-52.608 0-95.104 42.624-95.104 95.104V307.2c0 52.608 42.624 95.104 95.104 95.104H305.92c52.608 0 95.104-42.624 95.104-95.104V164.48c0-52.608-42.624-95.104-95.104-95.104H163.2z m0-47.616H305.92c37.888 0 74.112 14.976 100.864 41.856 26.752 26.752 41.856 63.104 41.856 100.864V307.2c0 37.888-14.976 74.112-41.856 100.864-26.752 26.752-63.104 41.856-100.864 41.856H163.2C84.352 449.92 20.48 386.048 20.48 307.2V164.48C20.48 85.632 84.352 21.76 163.2 21.76z m0 570.88c-52.608 0-95.104 42.624-95.104 95.104v142.72c0 52.608 42.624 95.104 95.104 95.104H305.92c52.608 0 95.104-42.624 95.104-95.104V687.744c0-52.608-42.624-95.104-95.104-95.104H163.2z m0-47.616H305.92c37.888 0 74.112 14.976 100.864 41.856 26.752 26.752 41.856 63.104 41.856 100.864v142.72c0 78.848-63.872 142.72-142.72 142.72H163.2C84.352 973.184 20.48 909.312 20.48 830.464V687.744c0-37.888 14.976-74.112 41.856-100.864 26.752-26.752 62.976-41.856 100.864-41.856z m426.496 146.816c-37.12 37.12-37.12 97.408 0 134.528l100.992 100.992c37.12 37.12 97.408 37.12 134.528 0l100.992-100.992c37.12-37.12 37.12-97.408 0-134.528l-100.992-100.992c-37.12-37.12-97.408-37.12-134.528 0l-100.992 100.992z m-33.664-33.536l100.992-100.992c55.68-55.68 146.048-55.68 201.856 0l100.992 100.992c55.68 55.68 55.68 146.048 0 201.856L858.88 961.152c-55.68 55.68-146.048 55.68-201.856 0L556.032 860.16c-55.68-55.808-55.68-146.176 0-201.856zM686.464 69.376c-52.608 0-95.104 42.624-95.104 95.104V307.2c0 52.608 42.624 95.104 95.104 95.104h142.72c52.608 0 95.104-42.624 95.104-95.104V164.48c0-52.608-42.624-95.104-95.104-95.104H686.464z m0-47.616h142.72c78.848 0 142.72 63.872 142.72 142.72V307.2c0 37.888-14.976 74.112-41.856 100.864-26.752 26.752-63.104 41.856-100.864 41.856H686.464c-37.888 0-74.112-14.976-100.864-41.856-26.752-26.752-41.856-63.104-41.856-100.864V164.48c0-37.888 14.976-74.112 41.856-100.864 26.752-26.88 63.104-41.856 100.864-41.856z m0 0"
                      p-id="4146"></path>
              </svg>
              <span class="clspan">{{post.class}}</span>
              <svg t="1619577977915"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="3272"
                   width="10"
                   height="10">
                <path d="M867.8 732.9c21.9-22.3 36.2-50.9 40.7-81.8 11.8-172.8-123-164.1-123-164.1s-137.5-12.6-123 164.8c5 30.9 19.4 59.4 41.1 81.8 72.7 69.3-16.4 106.6-41.1 122.6-24.8 16-105.5 60.5-105.5 123v40.7h457v-41.1c-2.3-57.5-81.1-106.6-105.5-123s-102.4-49-40.7-122.9zM832 257H192.7c-16.3 0-31.4-13.4-32.6-29.7-1.4-18.7 13.5-34.3 31.9-34.3h639.3c16.3 0 31.4 13.4 32.6 29.7 1.4 18.8-13.4 34.3-31.9 34.3zM577.7 512H188c-15.2 0-27.4-14.3-27.4-32s12.2-32 27.4-32h389.6c15.2 0 27.4 14.3 27.4 32s-12.2 32-27.3 32zM478.7 768H188c-15.2 0-27.4-14.3-27.4-32s12.2-32 27.4-32h290.6c15.2 0 27.4 14.3 27.4 32s-12.2 32-27.3 32z"
                      p-id="3273"
                      fill="#2c2c2c"></path>
                <path d="M1023 64.9V471c0 17.1-13.1 31.7-30.3 32.5-18.7 0.9-33.7-13.5-33.7-32V65H65v894h399.4c17.1 0 31.7 13.1 32.5 30.3 0.9 18.7-13.5 33.7-32 33.7h-400C29.7 1023 1 994.3 1 959.1V64.9C1 29.7 29.7 1 64.9 1h894.3c35.1 0 63.8 28.7 63.8 63.9z"
                      p-id="3274"
                      fill="#2c2c2c"></path>
              </svg>
              <span>{{post.author}}</span>
            </div>
            <div class="poright">
              <svg t="1619578364631"
                   class="icon"
                   viewBox="0 0 1260 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4989"
                   width="11"
                   height="11">
                <path d="M900.962462 117.208615a223.547077 223.547077 0 0 1 168.251076 75.460923l1.732924 1.890462 1.732923 2.205538c20.48 23.788308 35.288615 51.987692 43.323077 82.313847v1.496615c2.756923 9.531077 4.883692 19.219692 6.537846 29.065846l1.496615 11.657846c0.787692 7.168 1.260308 14.414769 1.339077 21.661539 0 7.246769-0.393846 14.493538-1.102769 21.661538v2.126769C1113.009231 541.380923 830.779077 785.723077 630.153846 920.654769 429.607385 785.723077 147.298462 541.380923 133.277538 368.718769v-2.126769a215.670154 215.670154 0 0 1-1.102769-21.661538c0-6.852923 0.315077-13.627077 1.102769-20.401231l1.496616-12.760616c1.575385-9.767385 3.780923-19.456 6.459077-29.065846v-1.732923c8.034462-30.326154 22.843077-58.446769 43.323077-82.313846l1.732923-2.126769 1.339077-1.339077 1.496615-1.732923A223.547077 223.547077 0 0 1 357.454769 118.153846c82.077538 0 164.627692 31.507692 205.351385 78.454154l64.984615 75.618462 64.984616-75.618462c40.723692-46.788923 123.037538-78.454154 205.351384-78.454154l2.835693-0.787692zM898.126769 31.507692C787.456 31.507692 683.480615 74.830769 627.318154 139.736615 571.234462 74.830769 467.259077 31.507692 356.588308 31.507692a309.956923 309.956923 0 0 0-230.715077 104.448 67.347692 67.347692 0 0 0-5.592616 6.537846 294.596923 294.596923 0 0 0-62.38523 116.263385 346.584615 346.584615 0 0 0-9.137231 40.96l-1.732923 14.729846a272.541538 272.541538 0 0 0-1.732923 30.326154c0 10.397538 0.630154 20.795077 1.732923 31.192615 23.000615 283.726769 537.836308 618.889846 559.734154 632.91077L630.153846 1024l23.394462-15.123692c21.661538-14.178462 536.576-349.184 559.734154-632.989539a274.983385 274.983385 0 0 0 0-62.227692l-1.732924-14.651077a346.584615 346.584615 0 0 0-9.058461-40.96 294.596923 294.596923 0 0 0-62.385231-116.342154A309.956923 309.956923 0 0 0 900.962462 30.72l-2.835693 0.787692z"
                      fill="#2c2c2c"
                      p-id="4990"></path>
              </svg>
              <span>{{post.likenum}}</span>
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
              <span>{{post.readnum}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination background
                   layout="prev, pager, next"
                   :total="postlists.length"
                   :page-size=10
                   style="margin:20px auto 0;width:100%"
                   @prev-click="toprev"
                   :current-page.sync="page"
                   @next-click="tonext"
                   @current-change="topage"
                   v-show="postlists.length>9">
    </el-pagination>
  </div>
</template>
<style scoped>
.figure {
  width: 100%;
}
.figure img {
  height: 100%;
  width: 100%;
}
.pastbox {
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
}
.pastbox .imgbox img {
  height: 100px;
  max-width: 200px;
}

.postnrbox {
  margin-left: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.postnrbox .postother {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
}
.postnrbox .postother svg {
  margin: 0 2px 0 10px;
}
.postnrbox .postother .firsticon {
  margin: 0 2px 0 0;
}
.postnrbox .postother .poleft,
.postnrbox .postother .poright {
  display: flex;
  align-items: center;
}
.postnrbox a {
  color: black;
}
.postnrbox a:hover {
  color: blue;
}
.posttitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.posttitle p {
  font-size: 14px;
  font-weight: 800;
  padding-bottom: 3px;
  margin-bottom: 0;
  border-bottom: 1px solid rgb(180, 180, 180);
}
.postintroduce {
  font-size: 13px;
  height: 57.6px;
}
.postintroduce span {
  display: inline-block;
  height: 100%;
  color: #475669;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
.prompt {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  border: 1px solid rgb(209, 136, 0);
  border-radius: 5px;
  margin-top: 20px;
}
@media all and (max-width: 500px) {
  .pastbox {
    margin-top: 10px;
    padding: 5px;
    background-color: #fff;
    display: flex;
    overflow: hidden;
  }
  .pastbox .imgbox img {
    height: 96px;
    max-width: 155px;
  }
  .postnrbox {
    margin-left: 5px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .postnrbox .postother svg {
    margin: 0 1px 0 3px;
  }
  .postintroduce {
    font-size: 12px;
    height: 55px;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .posttitle p {
    font-size: 13px;
    font-weight: 800;
    padding-bottom: 3px;
    margin-bottom: 0;
    border-bottom: 1px solid rgb(180, 180, 180);
  }
  .clspan {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 35px;
  }
}
</style>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__button {
  background-color: black !important;
}
.el-pagination {
  display: flex;
  justify-content: center;
}
@media all and (max-width: 500px) {
  .el-carousel__container {
    height: 100px !important;
  }
}
</style>
<script>
export default {
  props: {
  },
  data () {
    return {
      list: 'new',
      postlist: [],
      postlists: [],
      page: 1,
      prompt: '',
      isprompt: false
    }
  },
  created () {
    this.list = this.$route.params.list
    this.getpostlist()
  },
  methods: {
    getpostlist () {
      if (this.list == '最新文章') {
        this.getnewlist()
        if (this.postlists == '') {
          this.getnewlist()
        }
      } else if (this.list.slice(0, 5) == '站内搜索-') {
        if (this.list.slice(5) == '') {
          this.postlists = ''
          this.postlist = ''
          this.prompt = '请输入搜索内容！'
          this.isprompt = true
        } else {
          this.postlists = ''
          this.postlist = ''
          this.getsearch(this.list.slice(5))
        }
      }
      else {
        this.getclasslist()
      }
    },
    async getclasslist () {
      const res = await this.$http.get('http://39.97.97.54:81/mcblog/getclass.php?class=' + this.list)
      this.postlists = res.data
      const arr = res.data
      this.postlist = arr.slice(0, 10)
    },
    async getnewlist () {
      this.postlists = ''
      this.postlist = ''
      const res2 = await this.$http.get('http://39.97.97.54:81/mcblog/getnew.php')
      this.postlists = res2.data
      const arr2 = res2.data
      this.postlist = arr2.slice(0, 10)
    },
    async getsearch (value) {
      const res3 = await this.$http.get('http://39.97.97.54:81/mcblog/getsearch.php?title=' + value)
      this.postlists = res3.data
      const arr3 = res3.data
      this.postlist = arr3.slice(0, 10)
      if (this.postlists == '') {
        this.prompt = '没有找到您搜索的相关内容！'
        this.isprompt = true
      }
    },
    tonext () {
      this.postlist = this.postlists.slice(10 * this.page, 10 * (this.page + 1))
    },
    toprev () {
      this.postlist = this.postlists.slice(10 * (this.page - 2), 10 * (this.page - 1))
    },
    topage (page) {
      this.postlist = this.postlists.slice(10 * (page - 1), 10 * (page))
    }
  },
  watch: {
    '$route': function () {
      this.isprompt = false
      this.list = this.$route.params.list
      this.getpostlist()
    }
  }
}
</script>