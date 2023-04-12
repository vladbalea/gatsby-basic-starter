import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home() {
    return (
        <Layout>
            <h1 className="font-bold">Hello World</h1>
        </Layout>
    )
}

export const Head = () => (
    <Seo
        title="The index page"
    />
)