<template>
  <div class="application-container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "applicationSystem",
  data() {
    return {
      msg: 'applicationSystem'
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../index.scss';
</style>
