<template>
  <div >
    <h1>HELLO VUE3</h1>
    <el-button type="primary" :icon="Edit">Waring</el-button>
    <el-button type="danger" :icon="Delete" circle />
    <el-pagination

      :page-sizes="[100, 200, 300, 400]"

      layout="total, sizes, prev, pager, next, jumper"
      :total="400"

    />
    <!-- <svg>
      <use xlink:href="#icon-watermelon"></use>
    </svg> -->
    <SvgIcon name="watermelon"/>
  </div>
</template>

<script setup lang="ts">
import { Edit, Delete } from "@element-plus/icons-vue";
import SvgIcon from "./components/SvgIcon.vue";
console.log(import.meta.env)
</script>

<style scoped lang="scss">
  div{
    h1{
      color:$primary-color
    }
  }
</style>