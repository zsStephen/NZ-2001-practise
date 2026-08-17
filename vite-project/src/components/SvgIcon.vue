<template>
  <svg class="svg-icon" :style="{ width: size, height: size }" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
//接收父组件传递过来的参数
const props = defineProps({
  // 图标名称，对应 assets/icons 下的文件名（不含 .svg）
  name: { type: String, required: true },
  // 尺寸，默认 1em（跟随字体大小）
  size: { type: String, default: '16em' },
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  overflow: hidden;
  vertical-align: -0.15em;
}
</style>
