<template>
  <div class="appid-container">
    <div class="login-title">前端框架-zx</div>
    <el-button class="user-btn" @click="setData">Enter</el-button>
  </div>
</template>

<script>
export default {
  name: "selectAppId",
  data() {
    return {
      appId: '',
      appIdList: []
    };
  },
  mounted() {
  },
  methods: {
    setData() {
      this.$router.push('/dashboard/applicationSystem');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./index.scss";
</style>
