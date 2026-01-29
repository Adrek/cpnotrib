<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CircleAlert } from 'lucide-vue-next'

import MainLayout from '@/layouts/MainLayout.vue'
import RobotChat from '@/components/RobotChat.vue'
import DataTable from '@/components/DataTable.vue'

const data = [
  {
    id: 1,
    placa: 'ABC-123',
    licencia: '984654715',
    falta: 'G47',
    docDeuda: '140115152',
    fecInfraccion: '2023-02-14',
    importe: '856.00',
    costesGastos: '50.0',
    deuda: '906.00',
    tipo: 'Propietario',
    estadoCompromiso: 'Apto',
  },
  {
    id: 2,
    placa: 'PJ9-3E3',
    licencia: '8465465465',
    falta: 'G57',
    docDeuda: '84564655',
    fecInfraccion: '2022-06-13',
    importe: '856.00',
    costesGastos: '50.0',
    deuda: '906.00',
    tipo: 'Propietario',
    estadoCompromiso: 'Apto',
  },
  {
    id: 3,
    placa: 'BRS-302',
    licencia: '6546544544',
    falta: 'M01',
    docDeuda: '01545151',
    fecInfraccion: '2020-05-20',
    importe: '856.00',
    costesGastos: '50.0',
    deuda: '906.00',
    tipo: 'Propietario',
    estadoCompromiso: 'Apto',
  },
]
</script>

<template>
  <MainLayout>
    <div class="w-full max-w-6xl py-6 md:pt-10 px-4">
      <h1 class="text-2xl md:text-3xl font-bold">
        Verificar y seleccionar las papeletas asociados como propietario o responsable.
      </h1>

      <p class="text-sm md:text-base text-muted-foreground mt-2">
        En esta sección se muestran las papeletas asociadas a tu vehículo o como condición de
        responsable
      </p>

      <Card class="w-full mt-4">
        <CardContent>
          <div class="bg-accent/30 rounded-xl p-5 mb-4">
            <span class="text-primary font-bold">Filtra y refina tu búsqueda</span>
          </div>

          <DataTable :data="data" />

          <div
            class="flex flex-row items-center justify-end border border-tertiary rounded-md mt-6 py-2 px-3 font-bold"
          >
            <span class="text-sm text-primary"> Monto a financiar (Soles): </span>
            <span class="text-md ml-2"> S/ 00.00 </span>
          </div>

          <Alert class="bg-sky-50 border-sky-100 mt-6">
            <CircleAlert color="var(--primary)" />
            <AlertTitle class="text-sky-800 line-clamp-none">
              Podrás seleccionar uno o mas deudas a ser acumulativas para generar un compromiso de
              pago.
            </AlertTitle>
            <AlertDescription class="text-sky-600 font-light">
              La deuda no debe ser menor a 200.00
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div class="w-full flex flex-row justify-end mt-4">
        <Button variant="tertiary" size="spacing">Cancelar</Button>
      </div>
    </div>

    <!-- RobotChat -->
    <RobotChat class="hidden md:block" />
    <!-- End::RobotChat -->
  </MainLayout>
</template>
