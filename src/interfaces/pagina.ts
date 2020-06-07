import { Imagen } from "./imagen"

export interface DataPagina {
  allDatoCmsPagina: AllDatoCMSPagina
}

export interface AllDatoCMSPagina {
  nodes: Node[]
}

export interface Node {
  titulo: string
  contenido: string
  imagen: Imagen
}
