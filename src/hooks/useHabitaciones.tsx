import { graphql, useStaticQuery } from "gatsby"
import { DataHabitacion, NodeHabitacion } from "../interfaces/habitacion"

export interface useHabitacionesProps {}

const useHabitaciones = (): NodeHabitacion[] => {
  const data = useStaticQuery<DataHabitacion>(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return data.allDatoCmsHabitacion.nodes
}

export default useHabitaciones
