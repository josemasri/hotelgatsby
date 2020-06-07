import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

import { NodeHabitacion } from "../interfaces/habitacion"

export interface HabitacionPreviewProps {
  habitacion: NodeHabitacion
}

const HabitacionPreview: React.FunctionComponent<HabitacionPreviewProps> = ({
  habitacion: {
    contenido,
    imagen: { fluid },
    titulo,
    slug,
  },
}) => {
  return (
    <li
      css={css`
        border: 1px solid #e1e1e1;
      `}
    >
      <Image fluid={fluid} />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>
        <Boton to={`/${slug}`}>Ver Mas</Boton>
      </div>
    </li>
  )
}

export default HabitacionPreview
