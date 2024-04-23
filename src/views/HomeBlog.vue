<template>
  <div id="main">
    <headerTop ></headerTop>
    <div id="center" style="margin-top: 20px">
      <el-row :gutter="30">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div id="c3_1">
              <div class="el-row">
                <div class="el-col-11" >
                    <el-image
                        style="width: 120px;height: 130px;border-radius: 5px;margin-left: 12px"
                        :src="url"></el-image>
                </div>
                <div class="el-col-13">
                  <p><strong style="font-size: 24px">{{userinfo.uname}}</strong></p>
                  <p style="font-size: 12px">{{userinfo.personalProfile}}}</p>
                </div>
            </div>
              <p>Q  Q :</p>
              <p>微信 :</p>
              <hr style="background-color: #00f7ff" />
              <p class="icon">
                <i class="el-icon-platform-eleme"></i>
                <i class="el-icon-orange"></i>
                <i class="el-icon-orange"></i>
                <i class="el-icon-orange"></i>
                <i class="el-icon-orange"></i>
              </p>
              <div class="newComment"> <!-- 最新评论 -->
                <P>最新评论</P>
                <hr />
                <ul class="pl">
                  <li>
                    <p style="color: #00bbff">你好，成都 <span style="color: #b9b6b6">2022-01-22</span></p>
                    <p style="color: #b9b6b6" class="pl2">{{ commentContent | pl_ellipsis }}</p>
                  </li>
                  <li>
                    <p style="color: #00bbff">你好，成都 <span style="color: #b9b6b6">2022-01-22</span></p>
                    <p style="color: #b9b6b6" class="pl2">{{ commentContent | pl_ellipsis }}</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="infinite-list-wrapper"  style="overflow:auto;color: #726e6e;height: 560px;border: 1px solid #969090;">
              <ul
                  class="list"
                  v-infinite-scroll="load"
                  infinite-scroll-disabled="disabled">
                <li v-for="i in count" class="list-item">
                  <h2 style="font-weight:inherit;">您好 , 上海</h2>
                  <p style="font-size: 12px">
                    <span style="background-color: #046b08;color: white;padding: 0px 5px;">原创</span>&nbsp;
                    <i class="el-icon-date"></i> 2022-01-22 &nbsp;
                    <i class="el-icon-user"></i> <span>小六隆</span> &nbsp;
                    <i class="el-icon-reading"></i> <span>我的故事</span> &nbsp;
                  </p>
                  <p>
                    {{ content | ellipsis }}<br />
                    <a href="javascript:void(0)" class="readBook">阅读全文>></a>
                  </p>
                  <el-divider></el-divider>
                  <p style="font-size: 12px"><i class="el-icon-collection"></i>旅行日记 &nbsp; <i class="el-icon-collection"></i>原创</p>
                </li>
              </ul>
              <p v-if="loading">加载中...</p>
              <p v-if="noMore">没有更多了</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <h3>公告</h3> <!-- notice 公告 -->
            <div class="notice">
                <p>真正的自律绝不是不容丝毫差池的坚持</p>
                <p>而是张弛有度</p>
                <p>慢慢向梦想靠拢</p>
                <p>在这个过程中</p>
                <p>请接受自己偶尔的懒散</p>
                <p>听懂身体发出的提醒</p>
                <p>看清周围环境的变化</p>
                <p>量力而行</p>
                <p>要知道</p>
                <p>真正的自律</p>
                <p>是好好爱自己</p>
                <p>是去成为那个更好的自己</p>
                <p>You'll be better !!</p>
            </div>
            <div class="myStory">
              <span class="m1">我的故事</span>
              <span class="m2">一盆小花 ，一杯清茶</span>
            </div>
            <div class="myGirl">
              <span class="m1">我的女孩</span>
              <span class="m2">我的女孩 ，你还在吗</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import headerTop from '../components/Header' ;

export default {
  /** 组件调用 */
  components:{
    headerTop
  },
  name: "HomeBlog",
  data() {
    return {
      activeIndex: '1',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      fits: 'cover',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      userinfo:{
        uname:'小流浪',
        personalProfile:'短发短发短发短发大风大范德萨发' ,
        qq:'',
        wx:''
      },
      count:20,
      loading: false,
      content:'现如今很多商家为了赢得大家的口碑，纷纷退出好评送红包等活动，许多顾客想给商家好的评价但不知道怎么写，以下内容作为参考，方便大家仿写格式。\n' +
          '                    1、饭菜量很足，价钱也非常合理，下了班不想做饭，立马点了这家外卖，果然如好评里说得一样，非常合口味。包装特别好，里外都没有洒一滴滴，送得也很及时，必须表扬。\n' +
          '                    2、经常在你店里买，味道不错很好吃，分量很足，价格便宜，及时送达，包装完整，服务态度好，下次再来。',
      commentContent:'现如今很多商家为了赢得大家的口碑，纷纷退出好评送红包等活动，许多顾'

    };
  }
  , // 显示字段超出相应长度后截取 可设置多个
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 30) {
        return value.slice(0, 200) + "...";
      }
      return value;
    },
    pl_ellipsis(value) {
      if (!value) return "";
      if (value.length > 16) {
        return value.slice(0, 16) + "...";
      }
      return value;
    }
  }, computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  mounted () {
    document.body.style.backgroundImage = ''

    let _this = this ;
     // console.log("homeBlog...");
    // console.log(_this.$cookies.get("token"));
     // let user = sessionStorage.getItem("user");
     // let json = JSON.parse(user);
    // json.name;
    //  console.log(json.userName);

  },
  methods: {
    load () {
      this.loading = true
    setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>

.bg-purple {
  background: #ffffff;
  border: #ffffff 1px solid;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 2px 0px 10px 0px;
}


#c3_1{
  margin: auto;
  border: #ffffff 1px solid;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: 308px;
}

#c3_1 .el-row{
  /*border: #0033ff 1px solid;*/
  margin-top: 40px;
}

#c3_1 > p{
  font-size: 24px;
  color: #317273;
  line-height: 10px;
  padding: 0px 10px 0px 50px;
}
.icon{
  /*border: #00f7ff solid 1px;*/
  margin-top: -1px;

}
.icon i{
  color: #002aff;
  margin-left: 20px;
}

.newComment{
  margin-top: 50px;
  border: #b9b6b6 solid 1px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}
.readBook:hover{
  color: #2f00ff;
}

ul{
  border: #ffffff 1px solid;
  margin: 0px;
  padding: 0px;
}
ul li{
  list-style-type: none;
}
.pl li{
  border-bottom: #b9b6b6 solid 1.5px;
  padding: 0px 15px;
  font-size: 14px;

}
.pl li p{
  line-height: 5px;
}
.pl li span{
  /*text-align: right;*/
  margin-left: 95px;
}

.readBook{
  color: #726e6e;
  font-size: 13px;
  margin-top: 5px;
}
.list-item{
 /* border: #b9b6b6 solid 1px;*/
  margin: 10px 0px;
  border-radius: 2px;
  padding-left: 20px;
  padding-right: 20px;
}
.notice{
  /*border: pink solid 1px;*/
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #E1B8C0;
  border-radius: 8px;
}
.notice p{
  line-height: 10px;
  font-size: 12px;
  color: rgba(54, 52, 52, 0.91);
}
.notice p:nth-last-child(1){
  color: red;
  margin-top: 34px;
}
.myStory,.myGirl{
  margin: 10px 30px 10px 30px ;
  border: #ffc400 solid 1px;
  border-radius: 8px;
  text-align: center;
}

.myGirl span,.myStory span{
  /*line-height: 15px;*/
  padding: 15px 0px;
}
.m1{
  font-size: 20px;
  font-weight: bolder;
  color: #ffffff;
  letter-spacing: 3px;
  display: block;
  /*background-color: #00f7ff;*/
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  /*background: linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);*/
}
.myStory span:first-child {
  background: repeating-linear-gradient(45deg, rgb(0, 247, 255), #00f7ff 10px, #bea0a6 10px, #bea0a6 20px);
}
.myGirl span:first-child {
  background: repeating-linear-gradient(45deg, rgb(178, 120, 12), #b2780c 10px, #00bbff 10px, #00bbff 20px);
}

</style>