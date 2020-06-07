import { Imagen } from "./imagen"

export interface DataHabitacion {
  allDatoCmsHabitacion: AllDatoCMSHabitacion
}

export interface AllDatoCMSHabitacion {
  nodes: NodeHabitacion[]
}

export interface NodeHabitacion {
  titulo: string
  id: string
  slug: string
  contenido: string
  imagen: Imagen
}
