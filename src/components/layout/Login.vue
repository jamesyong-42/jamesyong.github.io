<template>
<div  id="login-modal" class="modal" :class="{ 'is-active': !show, 'not-active': show }">
  <div class="modal-background"></div>
  <div class="modal-content" style="width:300px;">
    <div class="box">
      <h3 class="title is-4">后台登陆</h3>
      <p class="control has-icon">
        <input class="input" type="text" placeholder="账户名" v-model="account">
        <i class="fa fa-user"></i>
      </p>
      <p class="control has-icon">
        <input class="input" type="password" v-model="password" placeholder="密码">
        <i class="fa fa-lock"></i>
      </p>
      <p class="control">
        <button class="button is-primary" @click="log(account, password)">登陆</button>
      </p>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: mapGetters({
      sidebar: 'sidebar',
      isLogin: 'isLogin'
    }),
    props: {
      show: Boolean
    },
    data () {
      return {
        istest: false
      }
    },
    methods: {
      ...mapActions([
        'toggleLogin'
      ]),
      log (account, password) {
        let request = {
          account: account,
          code: password
        }
        console.log(request)
        let url = 'http://localhost:3000/api/login'
        let req = JSON.stringify(request)
        console.log(url + req)
        this.$http.post(url, req, {credentials: true}).then((response) => {
          console.log(response.data)
          if (response.data.errorCode === 0) {
            console.log('哦要刷新')
            window.location.reload()
          }
        })
      }
    }
  }
</script>
