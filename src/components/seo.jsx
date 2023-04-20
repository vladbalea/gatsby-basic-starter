import React from "react"
import { useLocation } from "@reach/router"
import useSiteMetadata from "../hooks/use-site-metadata"

export default function Seo({ title, description, image, children }) {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        url: defaultUrl,
        icon,
        language,
    } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${defaultUrl}${image || defaultImage}`,
        url: useLocation().href,
    }

    return (
        <>
            <html lang={language} />
            <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:site_name" content={defaultTitle} />
            <meta property="og:type" content="website" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="icon" href={`${defaultUrl}${icon}`} />
            {children}
        </>
    )
}