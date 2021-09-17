import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Weather from "components/Weather"
import {FC} from "react"

const IndexPage: FC = () => {
    return (
        <Layout>
            <SEO title="🌡 adobe weather" />
            <Weather />
        </Layout>
    )
}

export default IndexPage
