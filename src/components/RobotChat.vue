<script setup lang="ts">
import ChatWidget from './ChatWidget.vue'
import RobotChatIcon from './icons/RobotChatIcon.vue'
import { ref } from 'vue'

const openChatbox = ref(false)

function toggleChatbox() {
  openChatbox.value = !openChatbox.value
}
</script>

<template>
  <div class="fixed bottom-6 right-8">
    <div class="relative">
      <div
        class="bg-white rounded-xl px-3 py-2 shadow-md shadow-black/5 cursor-pointer"
        @click="toggleChatbox()"
      >
        <div class="flex flex-col items-center">
          <p class="text-center font-bold text-xs">¿Necesitas<br />ayuda?</p>
          <RobotChatIcon class="ml-2 w-12 h-auto my-1" />
        </div>
      </div>

      <!-- <div class="w-xs bg-white shadow-xl shadow-gray-400/10 rounded-xl absolute bottom-30 right-0">
        <div class="p-4 border border-transparent border-b-gray-400/20">
          <span class="font-semibold">SARA</span>
        </div>
        <div class="h-90"></div>
        <div class="p-4 border border-transparent border-t-gray-400/20">
          <span class="font-semibold">SARA</span>
        </div>
      </div> -->
      <div class="w-svw flex flex-row justify-end absolute bottom-30 right-0">
        <ChatWidget v-show="openChatbox" />
      </div>
    </div>
  </div>
</template>
