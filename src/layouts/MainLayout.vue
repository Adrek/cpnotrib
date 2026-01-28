<template>
  <SiteHeader />
  <div class="h-full bg-blue-100">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import SiteHeader from '@/components/SiteHeader.vue'
</script>
