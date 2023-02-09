import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi Stranger! This page is about myself</h1>
    <p>I am a graduate Civil Engineer, but in fact, the highest satisfaction is given me by building bridges between people and technology.<p>
    <p>I have experience in technical sales of Calenberg elastomeric bearings for the building engineering industry.<p>
    <p>That is why I understand the business needs of manufacturers and clients.<p>
    <p>It's a great passion for me to develop and implement IT solutions, to make the work of people easier, by automating them.<p>
    <p>I am willing to act as an intermediary between the world of engineers and software developers.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
