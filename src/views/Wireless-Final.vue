<template>
  <el-container class="container">
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
        <el-menu-item index="/explaination">
          <el-icon size="20" class="menu-icon"><info-filled /></el-icon>
          <span class="menu-text">使用說明</span>
        </el-menu-item>
        <el-menu-item index="/sensors">
          <el-icon size="20" class="menu-icon"><tools /></el-icon>
          <span class="menu-text">感測器列表</span>
        </el-menu-item>
        <el-menu-item index="/history">
          <el-icon size="20" class="menu-icon"><clock /></el-icon>
          <span class="menu-text">感測紀錄</span>
        </el-menu-item>
        
      </el-menu>
    </el-aside>


    <el-container direction="vertical">
      <el-main class="main">
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
.container {
  height: 100%
}

.aside {
  box-shadow: 5px 0px 70px black;
  text-align: center;
  height: 100%;
  background-color: #015249;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgb(230, 230, 230);
  
}
.el-menu {
  border-right-width: 0px;
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

.main {
  padding: 30px;
}

</style>
