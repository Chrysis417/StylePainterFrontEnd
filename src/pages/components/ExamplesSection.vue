
<template>
  <div class="section section-examples" data-background-color="black" >
    <div class="space-100"></div>
    <div class="space-50"></div>
    <div class="outer-wrapper text-center">
    <div class="container text-center">
      <div class="row">
        
<!-- 
        <div class="col">
          <router-link to="/" target="_blank">
            <img src="img/profile.jpg" alt="Image" class="img-raised" />
          </router-link>
           <router-link
            to="/landing"
            class="btn btn-simple btn-primary btn-round"
            >上传一张图片
          </router-link>
           <el-button

            class="btn btn-simple btn-primary btn-round"
            v-on:click="true_upload"
          >
            上传图像
            <input
              ref="upload"
              style="display: none"
              name="file"
              type="file"
              @change="update"
            />
          </el-button>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg">Get Started</n-button>
          </div>
        </div>

        <div class="col">
          <router-link to="/" target="_blank">
            <img src="img/profile.jpg" alt="Image" class="img-raised" />
          </router-link>
          <router-link
            to="/profile"
            class="btn btn-simple btn-primary btn-round"
            >下载图片</router-link
          >
        </div> -->

          <div class="col">
            <p class="category">上传图片</p>
            <div class="imgwrapper">
              <img :src="url_1"  class="rounded" />
            </div>
            
            <!-- <div class="card-footer text-center"> -->
            <div class="btnwrapper">
              <n-button class="btn btn-default btn-round btn-black btn-lg" type="default" round default v-on:click="true_upload">选择一张图片
                <input 
                type="file"
                ref="upload"
                style="display:none"
                name="file"
                @change="update"
                />
              </n-button>
            </div>
            <!-- </div> -->
          </div>

          <div class="col">
            <p class="category">绘制结果</p>
            <div class="imgwrapper">
            <img v-lazy="'img/bg8.jpg'" class="rounded" />
            </div>
          </div>
      </div>
    </div>
    </div>
    <div class="space-100"></div>
    <div class="space-50"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Content",
  data() {
    return {
      server_url: "http://127.0.0.1:5003",
      activeName: "first",
      active: 0,
      centerDialogVisible: true,
      url_1: "",
      url_2: "",
      textarea: "",
      srcList: [],
      srcList1: [],
      feature_list: [],
      feature_list_1: [],
      feat_list: [],
      url: "",
      visible: false,
      wait_return: "等待上传",
      wait_upload: "等待上传",
      loading: false,
      table: false,
      isNav: false,
      showbutton: true,
      percentage: 0,
      fullscreenLoading: false,
      opacitys: {
        opacity: 0,
      },
      dialogTableVisible: false,
    };
  },
  created: function () {

  },
  methods: {
    true_upload() {
      this.$refs.upload.click();
    },
    true_upload2() {
      this.$refs.upload2.click();
    },
    next() {
      this.active++;
    },
    // 获得目标文件
    getObjectURL(file) {
      var url = null;
      if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    // 上传文件
    update(e) {
      this.percentage = 0;
      this.dialogTableVisible = true;
      this.url_1 = "";
      this.url_2 = "";
      this.srcList = [];
      this.srcList1 = [];
      this.wait_return = "";
      this.wait_upload = "";
      this.feature_list = [];
      this.feat_list = [];
      this.fullscreenLoading = true;
      this.loading = true;
      this.showbutton = false;
      let file = e.target.files[0];
      this.url_1 = this.$options.methods.getObjectURL(file);
      let param = new FormData(); //创建form对象
      param.append("file", file, file.name); //通过append向form对象添加数据
      var timer = setInterval(() => {
        this.myFunc();
      }, 30);
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      }; //添加请求头
      axios
        .post(this.server_url + "/upload", param, config)
        .then((response) => {
          this.percentage = 100;
          clearInterval(timer);
          this.url_1 = response.data.image_url;
          this.srcList.push(this.url_1);
          this.url_2 = response.data.draw_url;
          this.srcList1.push(this.url_2);
          this.fullscreenLoading = false;
          this.loading = false;

          this.feat_list = Object.keys(response.data.image_info);

          for (var i = 0; i < this.feat_list.length; i++) {
            response.data.image_info[this.feat_list[i]][2] = this.feat_list[i];
            this.feature_list.push(response.data.image_info[this.feat_list[i]]);
          }

          this.feature_list.push(response.data.image_info);
          this.feature_list_1 = this.feature_list[0];
          this.dialogTableVisible = false;
          this.percentage = 0;
          this.notice1();
        });
    },
    myFunc() {
      if (this.percentage + 33 < 99) {
        this.percentage = this.percentage + 33;
      } else {
        this.percentage = 99;
      }
    },
    drawChart() {},
    notice1() {
      this.$notify({
        title: "预测成功",
        message: "点击图片可以查看大图",
        duration: 0,
        type: "success",
      });
    },
  },
  mounted() {
    this.drawChart();
  },
};
</script>

<style>
.imgwrapper{
  height:100%;
  margin:auto;
}
.btnwrapper{
  height:40px;
  margin:auto;
}
</style>
