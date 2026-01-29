<template>
  <SidebarProvider>
    <!-- <AppSidebar /> -->

    <SidebarInset class="bg-red-500">
      <SiteHeader />
      <!-- Content -->
      <div class="bg-blue-50 flex h-full flex-col items-center">
        <slot />
      </div>
      <!-- Content -->
    </SidebarInset>
  </SidebarProvider>
</template>

<script lang="ts" setup>
// import SiteHeader from '@/components/SiteHeader.vue'
// import AppSidebar from '@/components/AppSidebar.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
</script>
