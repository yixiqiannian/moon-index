<template>
    <div class="indexabout">
      <img class="tx" alt="logo" src="../assets/dmn1.jpg" >
      <p>{{ message }}</p>
      <div class="gitgub">
        <img src="https://ghchart.rshah.org/yixiqiannian" alt="2016rshah's Github chart" />
      </div>
      
      
      <div class="cardd">
        <div class="card">
          <a href="http://blog.tsaqhm.cn/" target="_blank">
            <div class="card-link">
              <img src="../assets/quan.png" alt="">
              <div class="card-tit">
                <h5>Moonblog</h5>
                <p title="一个博客罢了">"一个博客罢了"</p>
              </div> 
            </div>
          </a>
          <a href="https://github.com/yixiqiannian" target="_blank">
            <div class="card-link">
              <img src="../assets/dmn1.jpg" alt="">
              <div class="card-tit">
                <h5>一夕千念</h5>
                <p title="作者GitHub">"作者GitHub"</p>
              </div> 
            </div>
          </a>
          <a href="http://blog.qqvxzf.cn/" target="_blank">
            <div class="card-link">
              <img src="../assets/2.jpg" alt="">
              <div class="card-tit">
                <h5>Moonblog-2</h5>
                <p title="作者的另一个博客">"作者的另一个博客"</p>
              </div> 
            </div>
          </a>
          <a href="/" target="_blank">
            <div class="card-link">
              <img src="../assets/2.jpg" alt="">
              <div class="card-tit">
                <h5>听说爱情很美</h5>
                <p title="作者的公众号，公众号关注：听说爱情很美">"公众号关注：听说爱情很美"</p>
              </div> 
            </div>
          </a>
          <a href="https://blog.csdn.net/weixin_43305645" target="_blank">
            <div class="card-link">
              <img src="../assets/dmn1.jpg" alt="">
              <div class="card-tit">
                <h5>CSDN</h5>
                <p title="我的CSDN">CSDN</p>
              </div> 
            </div>
          </a>
      </div>
      </div>
       
    </div>
    <footer>
      
      <hr>
      <div class="github-badge-big">
	<span class="badge-subject"><i class="fa fa-id-card"></i> 皖ICP备2021002870号-2 </span>
	<span class="badge-value bg-orange">
	<!-- 备案链接 -->
	<a href="https://beian.miit.gov.cn/" target="_blank" one-link-mark="yes">  皖ICP备2021002870号  </a>
	</span>
</div>
<br>
<!-- 联系我 -->
<div class="github-badge-big">
	<span class="badge-subject"><i class="fa fa-envelope-o" aria-hidden="true"></i> 联系我 </span>
	<span class="badge-value bg-red">2693970926@qq.com</span>
</div>

<!-- 运行时间 -->
<div class="github-badge-big">
	<span class="badge-subject"><i class="fa fa-clock-o"></i> Running Time</span>
	<span class="badge-value bg-apricots">

    <span>{{ runningDays }} 天</span>
    <span>{{ runningHours }} 小时</span>
    <span>{{ runningMinutes }} 分钟</span>
    <span>{{ runningSeconds }} 秒</span>
	</span>
</div>

        <!-- <img src="你的备案编号图标URL地址" alt="公安备案" style="vertical-align:middle;">  
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=你的备案号" target="_blank">某公网安备XXXXXX号</a> -->
    <br>
    <p>by.一夕千念_Moon</p>
    <a href="https://github.com/yixiqiannian/moon-index">Github项目地址</a>
    <p>希望各位能和喜欢的人相爱</p>
    <br>
      </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { onMounted, ref } from 'vue';
//   import About from '@/components/About.vue'; // @ is an alias to /src
  
  
  export default defineComponent({
    name: 'ViewAbout',
    data(){
        return{
            message:'"今天你努力了吗"',
            targetDate: new Date("2025-01-01T00:00:00"),
           
        }
    },
    setup() {  
    const now = ref(new Date());  
    const runningDays = ref(0);  
    const runningHours = ref(0);  
    const runningMinutes = ref(0);  
    const runningSeconds = ref(0);  
  
    const updateRunningTime = () => {  
      const diff = (Date.parse(new Date().toString()) - Date.parse(now.value.toString())) / 1000;  
      const targetDiff = (Date.parse(new Date().toString()) - Date.parse("2023-04-10T00:00:00")) / 1000; 
      runningDays.value = Math.floor(targetDiff / (60 * 60 * 24));  
      runningHours.value = Math.floor((targetDiff % (60 * 60 * 24)) / (60 * 60));  
      runningMinutes.value = Math.floor((targetDiff % (60 * 60)) / 60);  
      runningSeconds.value = Math.floor(targetDiff % 60);  
    };  
  
    onMounted(() => {  
      setInterval(updateRunningTime, 1000); // 每秒更新一次运行时间  
    });  
  
    return {  
      runningDays,  
      runningHours,  
      runningMinutes,  
      runningSeconds,  
    };  
  },  
});  



  </script>
  <style scoped>
  a {
    text-decoration: none;
  }
  .cardd {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    margin-top: 30px;
    width: 600px;
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    justify-items: center;
    /* margin-left: 30%; */
  }
  .card-link {
    /* align-items: center; */
    width: 180px;
    height: 80px;
    background-color: rgba(109, 106, 106, 0.4);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10%;
    margin-left: 12px;
    margin-top: 18px;
    filter: drop-shadow(0 0 10px rgba(213, 139, 185, 0.8)); /* 发光效果 */ 
    transition: filter 0.3s ease;
    display: flex;
    flex-wrap: wrap; 
  }
  .card-link:hover {
    filter: drop-shadow(0 0 20px rgb(209, 15, 174));
  }
  .card-link > img {
    display: inline;
    width: 80px;
    border-radius: 50%;
    /* padding-left: 2px; */
  }
  .card-tit {
    margin-left: 12px;
  }
  .card-tit >p {
    color: rgb(229, 229, 244);
    font-size: 10px;
    max-width: 88px;
    overflow: hidden; 
    word-wrap: break-word;
    text-overflow: ellipsis; 
    white-space: nowrap;
  }
  .card-tit >h5 {
    /* display: inline; */
    text-align: center;
    color: rgb(121, 231, 143);
    font-size: 12px;
    /* justify-items: center; */
    
    
  }
  .tx {
    align-items: center;
    width: 80px;
    
    border-radius: 50%; /* 圆形头像 */  
    filter: drop-shadow(0 0 10px rgba(134, 229, 99, 0.8)); /* 发光效果 */  
    transition: filter 0.3s ease; /* 可选：添加过渡效果 */ 
  }
  .tx:hover {
    filter: drop-shadow(0 0 20px rgb(12, 184, 75));
  }
  @media(max-width:600px){
    .gitgub>img{
    width: 100%;
    filter: drop-shadow(0 0 10px rgba(134, 229, 99, 0.8)); /* 发光效果 */ 
    transition: filter 0.3s ease;
  }
  }
  .gitgub >img{
    filter: drop-shadow(0 0 10px rgba(153, 220, 129, 0.8)); /* 发光效果 */ 
    transition: filter 0.3s ease;
    margin-top: 20px;
  }
  .gitgub >img:hover {
    filter: drop-shadow(0 0 20px rgb(185, 225, 200));
  }
  footer {
    margin-top: 140px;
  }
  footer  > a {
    color: #08d5eb;
  }
  footer >hr{
    margin-top: 100px;
    margin-bottom: 30px;
  }
  /* 页脚 */
  .github-badge {
    display: inline-block;
    border-radius: 4px;
    text-shadow: none;
    font-size: 13.1px;
    color: #fff;
    line-height: 15px;
    margin-bottom: 5px;
    font-family: "Open Sans", sans-serif;
}
.github-badge .badge-subject {
    display: inline-block;
    background-color: #4d4d4d;
    padding: 4px 4px 4px 6px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    font-family: "Open Sans", sans-serif;
}
.github-badge .badge-value {
    display: inline-block;
    padding: 4px 6px 4px 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-family: "Open Sans", sans-serif;
}
.github-badge-big {
  /* margin-top: 30px; */
    display: inline-block;
    border-radius: 6px;
    text-shadow: none;
    font-size: 14.1px;
    color: #fff;
    line-height: 18px;
    margin-bottom: 7px;
}
.github-badge-big .badge-subject {
    display: inline-block;
    background-color: #4d4d4d;
    padding: 4px 4px 4px 6px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.github-badge-big .badge-value {
    display: inline-block;
    padding: 4px 6px 4px 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.bg-orange {
    background-color: #ec8a64 !important;
}
.bg-red {
    background-color: #cb7574 !important;
}
.bg-apricots {
    background-color: #f7c280 !important;
}
.bg-casein {
    background-color: #dfe291 !important;
}
.bg-shallots {
    background-color: #97c3c6 !important;
}
.bg-ogling {
    background-color: #95c7e0 !important;
}
.bg-haze {
    background-color: #9aaec7 !important;
}
.bg-mountain-terrier {
  background-color: #99a5cd !important;
}
</style>

  
  