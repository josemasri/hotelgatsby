import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { DataPagina } from "../interfaces/pagina"

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  p {
    line-height: 2;
  }
`

const ContenidoInicio: React.FunctionComponent = () => {
  const informacion = useStaticQuery<DataPagina>(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
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
  `)
  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]
  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid}></Image>
      </TextoInicio>
    </>
  )
}

export default ContenidoInicio
