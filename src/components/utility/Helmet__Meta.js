import * as React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import { useSiteMetadata } from "./GraphQL__UseSiteMetadata";

const Helmet_Meta = ({description, lang, title}) => {
    const {mainTitle, siteUrl, fontEmbed, mainDescription, author} = useSiteMetadata()
    const metaDescription = description || mainDescription
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = window.location.pathname === rootPath
    let titleText

    if (isRootPath) {
        titleText = mainTitle
    } else {
        titleText = title
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={titleText}
        >
            <meta property="og:title" content={titleText}/>
            <meta name="twitter:title" content={titleText}/>
            <meta name="description" content={metaDescription}/>
            <meta name="twitter:description" content={metaDescription}/>
            <meta property="og:description" content={metaDescription}/>
            <meta name="author" content={author}/>
            <meta name="copyright" content={author}/>
            <meta name="twitter:site" content={author}/>
            <meta name="twitter:creator" content={author}/>
            <meta name="twitter:card" content="summary"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`${siteUrl}${window.location.pathname}`}/>
            <meta property="og:site_name" content={mainTitle}/>
            <meta property="og:locale" content="en_US"/>
            <meta name="robots" content="index, follow"/>
            <meta property="cache-control" content="no-cache"/>
            <link rel="stylesheet" href={fontEmbed}/>
        </Helmet>
    )
}

Helmet_Meta.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

Helmet_Meta.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
}

export default Helmet_Meta