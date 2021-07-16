<template>
    <el-container class="dashboard-container">
        <el-aside :width="isCollapse ? '90px' : '200px'" class="container-aside">
            <el-menu :default-openeds="['1']" router :default-active="$route.path" :collapse="isCollapse">
              <div @click="toggle" class="toggle-icon">
                <i class="el-icon-rank"></i>
                <span v-if="!isCollapse">收起</span>
              </div>
              <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.index">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      isCollapse: false,
      menuList: [
        {name: '应用监控', index: '/dashboard/applicationSystem', icon: 'el-icon-data-line'},
        {name: '异常监控', index: '/dashboard/unusualSystem', icon: 'el-icon-pie-chart'},
        {name: '业务埋点', index: '/dashboard/businessPoint', icon:'el-icon-data-board'},
        {name: '系统监控', index: '/dashboard/systemMonitor',icon: 'el-icon-data-analysis'},
        {name: '全链路Trace', index: '/dashboard/trace', icon: 'el-icon-film'}
      ]
    };
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
    }
  },
  created() {
    console.log(this.$route);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .dashboard-container {
    height: 100vh;
    border: 1px solid #eee;
  }
  .container-aside {
      padding: 5px;
      background-color: rgb(238, 241, 246);
  }
  .toggle-icon {
    text-align: center;
    font-size: 16px;
    margin: 10px auto;
  }
</style>
