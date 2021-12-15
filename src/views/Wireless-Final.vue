<template>
  <el-container height="500px">
    <el-aside class="aside" >
      <el-menu
        active-text-color="#ffd04b"
        background-color="#015249"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
      >
        <h3 class="title" >無線網路期末專題</h3>
        <el-divider></el-divider>
        <el-menu-item index="/wireless-final/explaination">
          <el-icon size="20" class="menu-icon"><info-filled /></el-icon>
          <span class="menu-text">使用說明</span>
        </el-menu-item>
        <el-menu-item index="/wireless-final/sensors">
          <el-icon size="20" class="menu-icon"><tools /></el-icon>
          <span class="menu-text">感測器列表</span>
        </el-menu-item>
        <el-menu-item index="/wireless-final/history">
          <el-icon size="20" class="menu-icon"><clock /></el-icon>
          <span class="menu-text">感測紀錄</span>
        </el-menu-item>
        <br v-for="num in 30" :key="num+1">
      </el-menu>
    </el-aside>


    <el-container direction="vertical">
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>


<script>
//import Header from '../components/Header';

export default {
  name: 'Layout',
  components: {
    //Header,
  }
}

</script>


<style scoped>
.aside {
  box-shadow: 5px 0px 70px black;
  text-align: center;
}

.title {
  font-size: 24px;
  color: #fff
}

.menu-text {
  font-size: 18px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.menu-icon {
  padding-bottom: 5px;
  color: white;
}

</style>