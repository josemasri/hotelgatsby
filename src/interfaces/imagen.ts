export interface Imagen {
  fluid: Fluid
}

export interface Fluid {
  srcSet: string
  aspectRatio: number
  base64: string
  sizes: string
  src: string
}
