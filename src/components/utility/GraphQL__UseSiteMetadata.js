import {useStaticQuery, graphql} from "gatsby"

export const useSiteMetadata = () => {
    const {site} = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    siteUrl
                    fontEmbed
                    mainTitle
                    headline
                    titleTemplate
                    author
                    mainDescription
                }
            }
        }
    `)
    return site.siteMetadata
}