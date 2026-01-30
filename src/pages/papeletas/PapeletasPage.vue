<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CircleAlert } from 'lucide-vue-next'

import MainLayout from '@/layouts/MainLayout.vue'
import RobotChat from '@/components/RobotChat.vue'
import DataTable from '@/components/DataTable.vue'
import ShieldIcon from '@/components/icons/ShieldIcon.vue'

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

const fieldLabelClass = 'text-sm font-semibold pl-1 text-primary'
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
          <div class="grid grid-cols-5 gap-4 items-end">
            <Field class="col-span-5 md:col-span-3">
              <FieldLabel for="numPlaca" :class="fieldLabelClass"
                >Buscar deuda por número de documento</FieldLabel
              >
              <Input id="numPlaca" placeholder="Ejem.12345678" required />
            </Field>
            <div class="col-span-5 md:col-span-2 grid grid-cols-2 gap-4">
              <Button variant="outline" size="spacing" @click="$router.back()"> Limpiar </Button>
              <Button variant="default" size="spacing" @click="$router.back()"> Buscar </Button>
            </div>
          </div>

          <div class="bg-accent/30 rounded-xl p-5 mb-4 mt-5">
            <span class="text-primary font-bold">Filtra y refina tu búsqueda</span>

            <form class="mt-3">
              <FieldGroup>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Field>
                    <FieldLabel for="numPlaca" :class="fieldLabelClass">Número de placa</FieldLabel>
                    <Input id="numPlaca" placeholder="Ejem.12345678" required />
                  </Field>
                  <Field>
                    <FieldLabel for="nroLicencia" :class="fieldLabelClass">
                      Número de Licencia
                    </FieldLabel>
                    <Input id="nroLicencia" placeholder="Ejem.12345678" required />
                  </Field>
                  <Field>
                    <FieldLabel for="checkout-exp-month-ts6" :class="fieldLabelClass">
                      Month
                    </FieldLabel>
                    <Select default-value="">
                      <SelectTrigger id="checkout-exp-month-ts6">
                        <SelectValue placeholder="Propietario" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01"> 01 </SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              </FieldGroup>
            </form>
          </div>

          <div
            class="flex flex-col md:flex-row justify-between my-3 text-primary text-sm font-semibold px-3"
          >
            <span>Deudas activas hasta hoy 03/10/2025</span>

            <span>◄ 3 papeletas de 20 ►</span>
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

      <div
        class="w-full flex flex-col md:flex-row justify-between my-3 text-primary text-sm font-medium px-3"
      >
        <div class="flex flex-row items-center">
          <ShieldIcon class="mr-3" /> Protegemos la integridad de tus datos personales.
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-2">
          <Button class="" variant="tertiary" size="spacing" @click="$router.back()">
            Atrás
          </Button>
          <Button class="order-first md:order-last" size="spacing"> Generar plan de pagos </Button>
        </div>
      </div>
    </div>

    <!-- RobotChat -->
    <RobotChat class="hidden md:block" />
    <!-- End::RobotChat -->
  </MainLayout>
</template>
