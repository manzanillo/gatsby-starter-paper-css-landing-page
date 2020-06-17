import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not Found :(</h1>
    <p>Try another page.</p>
  </Layout>
)

export default NotFoundPage
