<script lang="ts">
import { z } from 'zod'
import { h } from 'vue'
import DraggableRow from './DraggableRow.vue'

export const schema = z.object({
  id: z.number(),
  placa: z.string(),
  licencia: z.string(),
  falta: z.string(),
  docDeuda: z.string(),
  fecInfraccion: z.string(),
  importe: z.string(),
  costesGastos: z.string(),
  deuda: z.string(),
  tipo: z.string(),
  estadoCompromiso: z.string(),
})
</script>

<script setup lang="ts">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'
//import { RestrictToVerticalAxis } from "@dnd-kit/abstract/modifiers"
/* import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheckFilled,
  IconDotsVertical,
  IconLayoutColumns,
  IconLoader,
  IconPlus,
} from '@tabler/icons-vue' */
import { FileText } from 'lucide-vue-next'
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
/* import { DragDropProvider } from 'dnd-kit-vue'
import { Badge } from '@/components/ui/badge' */

import { Checkbox } from '@/components/ui/checkbox'
/* import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu' */
/*
import { Label } from '@/components/ui/label' */
/* import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select' */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const props = defineProps<{
  data: TableData[]
}>()

/* interface TableData {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
} */

type TableData = z.infer<typeof schema>

/* const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({}) */

const columns: ColumnDef<TableData>[] = [
  {
    id: 'select',
    header: ({ table }) =>
      /* h(Checkbox, {
        modelValue:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:modelValue': (value) => table.toggleAllPageRowsSelected(!!value),
        'aria-label': 'Select all',
      }), */
      h(Checkbox, { class: 'bg-white border border-primary' }),
    cell: ({ row }) =>
      /* h(Checkbox, {
        modelValue: row.getIsSelected(),
        'onUpdate:modelValue': (value) => row.toggleSelected(!!value),
        'aria-label': 'Select row',
      }), */
      h(Checkbox, {}),
  },
  {
    accessorKey: 'placa',
    header: 'Nº Placa',
    cell: ({ row }) => h('span', String(row.getValue('placa'))),
  },
  {
    accessorKey: 'licencia',
    header: 'Nº Licencia',
    cell: ({ row }) => h('span', String(row.getValue('licencia'))),
  },
  {
    accessorKey: 'falta',
    header: 'Falta',
    cell: ({ row }) => h('span', String(row.getValue('falta'))),
  },
  {
    accessorKey: 'docDeuda',
    header: 'Nº DocDeuda',
    cell: ({ row }) => h('span', String(row.getValue('docDeuda'))),
  },
  {
    accessorKey: 'fileDoc',
    header: '',
    cell: ({ row }) => h(FileText, { color: 'var(--primary)' }),
  },
  {
    accessorKey: 'fecInfraccion',
    header: 'Fec.Infracción',
    cell: ({ row }) => h('span', String(row.getValue('fecInfraccion'))),
  },
  {
    accessorKey: 'importe',
    header: 'Importe',
    cell: ({ row }) => h('span', String(row.getValue('importe'))),
  },
  {
    accessorKey: 'costesGastos',
    header: 'Costes y gastos',
    cell: ({ row }) => h('span', String(row.getValue('costesGastos'))),
  },
  {
    accessorKey: 'deuda',
    header: 'Deuda',
    cell: ({ row }) => h('span', String(row.getValue('deuda'))),
  },
  {
    accessorKey: 'tipo',
    header: 'Tipo',
    cell: ({ row }) => h('div', { class: 'text-center' }, String(row.getValue('tipo'))),
  },
  {
    accessorKey: 'estadoCompromiso',
    header: 'Estado para compromiso',
    cell: ({ row }) => h('div', { class: 'text-center' }, String(row.getValue('estadoCompromiso'))),
  },
]

const table = useVueTable({
  get data() {
    return props.data
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  /* onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === 'function' ? updaterOrValue(sorting.value) : updaterOrValue
  },
  onColumnFiltersChange: (updaterOrValue) => {
    columnFilters.value =
      typeof updaterOrValue === 'function' ? updaterOrValue(columnFilters.value) : updaterOrValue
  },
  onColumnVisibilityChange: (updaterOrValue) => {
    columnVisibility.value =
      typeof updaterOrValue === 'function' ? updaterOrValue(columnVisibility.value) : updaterOrValue
  },
  onRowSelectionChange: (updaterOrValue) => {
    rowSelection.value =
      typeof updaterOrValue === 'function' ? updaterOrValue(rowSelection.value) : updaterOrValue
  }, */
  /* state: {
    get sorting() {
      return sorting.value
    },
    get columnFilters() {
      return columnFilters.value
    },
    get columnVisibility() {
      return columnVisibility.value
    },
    get rowSelection() {
      return rowSelection.value
    },
  }, */
})
</script>

<template>
  <div class="overflow-hidden rounded-lg border">
    <Table>
      <TableHeader class="bg-accent sticky top-0 z-10">
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            :col-span="header.colSpan"
            class="text-accent-foreground font-bold"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="**:data-[slot=table-cell]:first:w-8">
        <template v-if="table.getRowModel().rows.length">
          <DraggableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :row="row"
            :index="row.index"
          />
        </template>
        <TableRow v-else>
          <TableCell :col-span="columns.length" class="h-24 text-center"> No results. </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
