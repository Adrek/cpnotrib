<script setup lang="ts">
import { CopyIcon, RefreshCwIcon } from 'lucide-vue-next'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
</script>
<template>
  <div class="grid w-full max-w-xs gap-4">
    <InputGroup class="bg-white border border-transparent shadow-2xl shadow-black/5">
      <InputGroupAddon align="block-start" class="border-b border-gray-300/30">
        <InputGroupText class="font-medium">
          <img src="@/assets/images/SARA-short.webp" class="w-5 h-auto" alt="" />
          <span class="font-semibold">SATA</span>
        </InputGroupText>
        <InputGroupButton class="ml-auto" size="icon-xs">
          <RefreshCwIcon />
        </InputGroupButton>
        <InputGroupButton variant="ghost" size="icon-xs">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupTextarea
        id="textarea-code-32"
        placeholder="Hola 👋 ¿en qué podemos ayudarte hoy con el TUPA?"
        class="min-h-80 p-6"
      />
      <InputGroupAddon align="block-end" class="border-t border-gray-300/30">
        <InputGroupText>
          <Input
            id="chatboxMessage"
            placeholder="Escribe tu consulta aquí"
            class="border border-gray-300/60 rounded-sm p-2"
            required
          />
        </InputGroupText>
        <InputGroupButton size="sm" class="ml-auto px-4 py-4" variant="default">
          Enviar
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
