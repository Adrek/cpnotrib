<script lang="ts" setup>
import { ref } from 'vue'
/* UI */
import Button from '@/components/ui/button/Button.vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { TriangleAlert } from 'lucide-vue-next'
/* Custom */
import MainLayout from '@/layouts/MainLayout.vue'
import RobotChat from '@/components/RobotChat.vue'
/* Icons */
import BigCardItem from '@/pages/inicio/widgets/BigCardItem.vue'
import DocShieldCarIcon from '@/components/icons/DocShieldCarIcon.vue'
import CarCheckIcon from '@/components/icons/CarCheckIcon.vue'

const open = ref(false)

function abrirDialogRequisitos() {
  open.value = true
}
</script>

<template>
  <MainLayout>
    <div class="w-full max-w-4xl py-6 md:pt-16 px-4">
      <h1 class="text-2xl md:text-3xl font-bold text-primary">
        Compromiso de pago para deuda no tributaria - Tránsito
      </h1>
      <p class="text-sm md:text-base text-muted-foreground">
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
    <Dialog v-model:open="open">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h1 class="text-xl md:text-2xl font-bold text-primary">
              Compromiso de pago para deuda no tributaria - Tránsito
            </h1>
          </DialogTitle>
          <DialogDescription>
            <Alert class="bg-sky-50 border-sky-100">
              <TriangleAlert />
              <AlertTitle class="text-sky-800 line-clamp-none"
                >Recuerda que el resultado de la atención de tu solicitud será remitida a tu casilla
                electrónica del MTC.
              </AlertTitle>
              <AlertDescription>
                Ver video paso a paso para crear su casilla del MTC
              </AlertDescription>
            </Alert>
          </DialogDescription>
        </DialogHeader>

        <Button @click="open = false" size="spacing">Aceptar</Button>
      </DialogContent>
    </Dialog>
    <!-- End::Modal Requisitos -->
  </MainLayout>
</template>
