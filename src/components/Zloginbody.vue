<template>
  <div>
    <div class="login">
      <div>
        <input
          @blur="testUsername"
          @focus="toSpace"
          class="username"
          type="text"
          placeholder="手机号/邮箱"
          v-model="usernamevlu"
        >
        <span v-text="userwarn"></span>
        <br>
        <input class="password" type="password" placeholder="密码" v-model="passwordvlu">
        <span v-text="passwordwarn"></span>
        <div
          @click="toLogin"
          class="btn"
          :style="{'background-color'
        : status==true? '#000':'#ccc'}"
        >登录</div>
        <p class="forpassw">
          <a href>忘记密码</a>
        </p>
      </div>
    </div>
  </div>
</template>
// ,{ headers: { 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8' }}
<script>
import qs from "qs";
export default {
  data() {
    return {
      userwarn: "",
      passwordwarn: "",
      usernamevlu: "",
      passwordvlu: "",
      status: "",
      status1: false,
      status2: false
    };
  },
  methods: {
    //正则判断用户名是否合法，失去焦点发起请求确认用户名是否存在
    testUsername() {
      if (
        !/^[a-zA-Z][\w\-\.]*@[\da-z\-]{1,63}(\.[a-z]{2,3})+$/.test(
          this.usernamevlu
        ) &&
        !/^1[3-8]\d{9}$/.test(this.usernamevlu)
      ) {
        this.userwarn = "用户名不正确";
      } else {
        this.$axios
          .post(
            "http://39.105.178.245:3000/users/finduser",
            qs.stringify({
              username: this.usernamevlu
            })
          )
          .then((res) => {
            //   console.log(res)
            if (res.data == "success") {
              this.userwarn = "用户名存在";
            } else if (res.data == "fail") {
              this.userwarn = "用户名不存在，请前往注册";
            }
          });
      }
    },
    //再次聚焦置空userwarn和passwordwarn
    toSpace() {
      this.userwarn = "";
      this.passwordwarn = "";
    },

    //登录
    toLogin() {
      this.$axios
        .post(
          "http://39.105.178.245:3000/users/login",
          qs.stringify({
            username: this.usernamevlu,
            password: this.passwordvlu
          })
        )
        .then(res => {

          let loStatus = res.data.status;
          if (loStatus == "success") {
              localStorage.setItem("zaozuo_token",res.data.crypto)
            this.$router.push({ name: "home" });
          } else if (res.data == "fail") {
            this.passwordwarn = "密码错误";
          }
        });
    }
  },
  watch: {
    //监听用户名框与密码框，改变登录按钮的颜色
    usernamevlu: function() {
      if (this.usernamevlu) {
        this.status1 = true;
      } else {
        this.status1 = false;
        this.status = false;
      }
      if (this.status1 == true && this.status2 == true) {
        this.status = true;
      }
    },
    passwordvlu: function() {
      if (this.passwordvlu) {
        this.status2 = true;
      } else {
        this.status2 = false;
        this.status = false;
      }
      if (this.status1 == true && this.status2 == true) {
        this.status = true;
      }
    }
  },
  created() {
    if (this.usernamevlu != "" && this.passwordvlu != "") {
      this.status = true;
    }
  }
};
</script>
<style scoped>
.login {
  padding: 0px 50px;
}
.title {
  font-size: 16px;
  color: #707070;
}
.username,
.password {
  width: 100%;
  height: 30px;
  margin: 20px 0;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
}
.btn {
  width: 100%;
  height: 40px;
  background-color: #ccc;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  margin: 20px 0px;
  color: #fff;
}
.forpassw {
  text-align: right;
  font-size: 14px;
}
.forpassw a {
  color: #555;
}
</style>