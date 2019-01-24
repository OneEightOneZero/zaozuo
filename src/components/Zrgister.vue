<template>
  <div>
    <div class="login">
      <div>
        <input class="username" type="text" placeholder="手机号/邮箱" v-model="usernamevlu">
        <br>
        <span v-text="no_res" class="name_res"></span>
        <input class="password" type="password" placeholder="密码" v-model="passwordvlu">
        <br>
        <span v-text="no_paw" class="paws_res"></span>
        <div
          class="btn"
          :style="{'background-color'
        : status==true? '#000':'#ccc'}"
          @click="register"
        >注册</div>
        <p class="forpassw">
          <span>注册代表你已同意《造作用户协议》</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      usernamevlu: "",
      passwordvlu: "",

      status: "",
      status1: false,
      status2: false,

      no_res: "",
      no_paw: "",
      name_show: false,
      pasw_show: false
    };
  },

  watch: {
    usernamevlu: function() {
      //用户名判断
      if (!/^[a-zA-Z][\w\-\.]*@[\da-z\-]{1,63}(\.[a-z]{2,3})+$/.test(this.usernamevlu) &&!/^1[3-8]\d{9}$/.test(this.usernamevlu)) {
        this.no_res = "你的用户名不满足条件";
        this.name_show = false;
      } else {
          this.$axios.post(
            `${this.$store.state.ip}/finduser`,
            qs.stringify({ 
                username: this.usernamevlu 
            })).then(res => {
            if (res.data == "success") {
              this.no_res = "用户名已存在，不可用";
              this.name_show = false;
            } else {
              this.name_show = true;
              this.no_res = "";
            }
            
            //控制注册按钮的颜色
            if (this.usernamevlu && this.name_show) {
                this.status1 = true;
            } else {
                this.status1 = false;
            }
            if (this.status1 == true && this.status2 == true) {
                this.status = true;
            }else{
                this.status = false;
            }
          })
        }
    },

    passwordvlu: function() {
      //密码长度至少为6位
      if (this.passwordvlu.trim().length < 6) {
        (this.no_paw = "密码长度至少为6位"), (this.pasw_show = false);
      } else {
        this.no_paw = "";
        this.pasw_show = true;
      }

      //控制注册按钮的颜色
      if (this.passwordvlu.trim().length >= 6) {
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

  methods: {
    register() {
      if (this.name_show && this.pasw_show) {
        //发起请求
        this.$axios.post(
            `${this.$store.state.ip}/register`,
            qs.stringify({
              username: this.usernamevlu,
              password: this.passwordvlu
            })).then(res => {
            if (res.data.status == "success") {
              localStorage.setItem("zaozuo_token", res.data.crypto);
              this.$router.push({ name: "home" });
            }
        });
      }
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
.name_res,
.paws_res {
  color: red;
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
  text-align: center;
  font-size: 14px;
}
.forpassw a {
  color: #ccc;
}
</style>
