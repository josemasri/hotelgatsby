import { graphql, useStaticQuery } from "gatsby"

interface Data {
  datoCmsSite: DatoCMSSite
}

interface DatoCMSSite {
  globalSeo: GlobalSEO
}

interface GlobalSEO {
  siteName: string
  titleSuffix: string
  fallbackSeo: FallbackSEO
}

interface FallbackSEO {
  title: string
  description: string
}

const useSeo = (): GlobalSEO => {
  const data = useStaticQuery<Data>(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  return data.datoCmsSite.globalSeo
}

export default useSeo
