<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'

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
import RequisitoChecked from './RequisitoChecked.vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const open = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

function irPapeletasPage() {
  router.push({ name: 'papeletas' })
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <h1 class="text-xl md:text-2xl font-bold text-primary">
            Compromiso de pago para deuda no tributaria - Tránsito
          </h1>
        </DialogTitle>
        <DialogDescription>
          <div class="w-full flex flex-col md:flex-row mt-2 md:mt-2 mb-6">
            <RequisitoChecked
              :aprobado="true"
              title="Sin cuotas vencidas"
              sub-title="No tener cuotas vencidas de otras facilidades de pago en los últimos doce meses."
              class="border border-transparent border-r-transparent md:border-r-blue-200"
            />
            <RequisitoChecked
              :aprobado="false"
              class="mt-8 md:mt-0"
              title="Casilla electronica del MTC habilitada"
              sub-title="Debe contar con casilla electronica del MTC habilitada."
            />
          </div>
          <Alert class="bg-sky-50 border-sky-100">
            <TriangleAlert color="var(--primary)" />
            <AlertTitle class="text-sky-800 line-clamp-none"
              >Recuerda que el resultado de la atención de tu solicitud será remitida a tu casilla
              electrónica del MTC.
            </AlertTitle>
            <AlertDescription class="text-sky-600 font-light">
              Ver video paso a paso para crear su casilla del MTC
            </AlertDescription>
          </Alert>
        </DialogDescription>
      </DialogHeader>

      <!-- <Button @click="open = false" size="spacing">Aceptar</Button> -->
      <Button @click="irPapeletasPage()" size="spacing">Aceptar</Button>
    </DialogContent>
  </Dialog>
</template>
