import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi Stranger! This page is about myself</h1>
    <p>I am a graduate Civil Engineer, but in fact, the highest satisfaction is given me by building bridges between people and technology.<p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
