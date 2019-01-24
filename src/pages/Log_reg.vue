<template>
  <div>
    <ZloginHeader/>
    <ul class="acount-login-header">
      <li :class="{'first':true, 'active': login}" @click="logins">密码登陆</li>
      <li :class="{'second':true, 'active': register}" @click="registers">用户注册</li>
    </ul>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<script>
import ZloginHeader from "../components/ZloginHeader.vue";
import Zrgister from "../components/Zrgister.vue";
import Zloginbody from "../components/Zloginbody.vue";

export default {
  data() {
    return {
      login: true,
      register: false,
      view: Zloginbody
    };
  },
  methods: {
    logins() {
      this.login = true;
      this.register = false;
      this.view = Zloginbody;
    },
    registers() {
      this.register = true;
      this.login = false;
      this.view = Zrgister;
    }
  },
  components: {
    ZloginHeader,
    Zrgister,
    Zloginbody
  }
};
</script>

<style scoped>
.acount-login-header {
  position: relative;
  margin: 30px 0 10px 50px;
}
.acount-login-header li.first {
  margin-right: 60px;
}
.acount-login-header li.active {
  color: #000;
  border-bottom: 2px solid #000;
}
.acount-login-header li {
  display: inline-block;
  font-size: 14px;
  line-height: 32px;
  color: #707070;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
