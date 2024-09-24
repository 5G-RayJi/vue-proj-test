<template>
  <div class="page about container">
    <h1>This is an about page</h1>
    <div class="row">
      <div class="col-4">AAAAAAAAAA</div>
      <div class="col-8">VVVVVVVVVVVVVVVVV</div>
    </div>
  </div>
  <!-- <div class="about">
    <div>
      <ElButton>Button</ElButton>
      <el-button type="primary">Primary</el-button>
      <ElButton type="primary" :icon="Edit" circle />
    </div>
    <br />
  </div>
  <br />
  <ElButton color="#626aef" type="primary" loading>Loading</ElButton>
  <div>
    <ElIcon size="30" color="#85ce61">
      <Edit />
    </ElIcon>
  </div> -->
</template>
<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: aquamarine;
    width: 100vw;
  }
}
.page {
  width: 100%;
  height: 100%;
  background-color: blueviolet;
}
</style>
