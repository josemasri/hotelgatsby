import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { DataHabitacion } from "../interfaces/habitacion"
import Layout from "./layout"

interface HabitacionTemplateProps {
  data: DataHabitacion
}

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionTemplate: React.FunctionComponent<HabitacionTemplateProps> = ({
  data: {
    allDatoCmsHabitacion: {
      nodes: [
        {
          contenido,
          imagen: { fluid },
          titulo,
        },
      ],
    },
  },
}) => {
  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >
          {titulo}
        </h1>
        <p>{contenido}</p>
        <Image fluid={fluid} />
      </main>
    </Layout>
  )
}

export default HabitacionTemplate
