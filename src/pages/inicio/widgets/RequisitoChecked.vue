<script lang="ts" setup>
import { Check, X } from 'lucide-vue-next'

defineProps<{
  title: string
  subTitle: string
  aprobado: boolean
}>()
</script>

<template>
  <div class="w-full flex flex-1 flex-col items-center justify-center px-4">
    <div v-if="aprobado" class="bg-success/10 rounded-full p-2">
      <Check color="var(--success)" />
    </div>
    <div v-else class="bg-error/10 rounded-full p-2">
      <X color="var(--error)" />
    </div>
    <h1 class="text-lg text-black font-bold text-center">{{ title }}</h1>
    <p class="my-0 text-md text-center">{{ subTitle }}</p>
  </div>
</template>
