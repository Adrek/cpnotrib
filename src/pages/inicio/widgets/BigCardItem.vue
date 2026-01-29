<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

defineProps<{
  title: string
  subTitle: string
}>()
</script>

<template>
  <Card class="w-full">
    <CardContent>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="md:col-span-1 flex flex-row justify-center"><slot /></div>
        <div class="text-center md:col-span-2 mt-2 md:mt-0">
          <h1 class="text-xl font-bold">{{ title }}</h1>
          <p class="my-2 text-sm text-muted-foreground">{{ subTitle }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
