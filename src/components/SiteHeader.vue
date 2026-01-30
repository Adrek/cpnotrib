<script setup lang="ts">
import { Button } from '@/components/ui/button'
// import { Separator } from '@/components/ui/separator'
import SATIcon from './icons/SATIcon.vue'
</script>
<template>
  <header
    class="flex h-(--header-height) shrink-0 items-center gap-2 border-0 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
  >
    <div class="flex w-full items-center gap-1 px-4 py-4 lg:gap-2 lg:px-6 bg-blue-900 text-white">
      <!-- <SidebarTrigger class="-ml-1" /> -->
      <!-- <Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" /> -->
      <div class="text-base inline-flex items-center gap-5"><SATIcon /> 11/06/2024 02:57 p.m.</div>
      <div class="ml-auto flex items-center gap-2">
        <Button variant="ghost" as-child size="sm" class="hidden sm:flex">
          <a
            href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
            rel="noopener noreferrer"
            target="_blank"
            class="dark:text-foreground"
          >
            Alertas y notificaciones
          </a>
        </Button>
      </div>
    </div>
  </header>
</template>
