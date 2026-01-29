<script lang="ts" setup>
import { ref } from 'vue'
/* UI */
import Button from '@/components/ui/button/Button.vue'
/* Custom */
import MainLayout from '@/layouts/MainLayout.vue'
import RobotChat from '@/components/RobotChat.vue'
/* Icons */
import BigCardItem from '@/pages/inicio/widgets/BigCardItem.vue'
import DocShieldCarIcon from '@/components/icons/DocShieldCarIcon.vue'
import CarCheckIcon from '@/components/icons/CarCheckIcon.vue'
import DialogRequisitos from './widgets/DialogRequisitos.vue'

const openDialog = ref(false)

function abrirDialogRequisitos() {
  openDialog.value = true
}
</script>

<template>
  <MainLayout>
    <div class="w-full max-w-4xl py-6 md:pt-16 px-4">
      <h1 class="text-2xl md:text-3xl font-bold text-primary">
        Compromiso de pago para deuda no tributaria - Tránsito
      </h1>
      <p class="text-sm md:text-base text-muted-foreground mt-2">
        Selecciona sobre qué opción deseas generar tu compromiso de pago.
      </p>

      <div class="w-full flex flex-col md:flex-row gap-4 mt-6 md:mt-8 mb-8">
        <BigCardItem
          title="Generar Compromiso de Pago"
          sub-title="Para generar compromisos de Pago de  infracciones de tránsito."
          @click="abrirDialogRequisitos()"
          ><DocShieldCarIcon
        /></BigCardItem>
        <BigCardItem
          title="Visualizar Compromisos de Pago"
          sub-title="Para visualizar compromisos de Pago Generados."
          ><CarCheckIcon
        /></BigCardItem>
      </div>

      <div class="w-full flex flex-row justify-end mt-4">
        <Button variant="tertiary" size="spacing">Cancelar</Button>
      </div>
    </div>

    <!-- RobotChat -->
    <RobotChat class="hidden md:block" />
    <!-- End::RobotChat -->

    <!-- Modal Requisitos -->
    <DialogRequisitos v-model="openDialog" />
    <!-- End::Modal Requisitos -->
  </MainLayout>
</template>
