import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Resistor Calculator" />
    <h1>About</h1>
    <p>Resistor Calculator works both offline and online. It helps you to calculate 4-band, 5-band, 6-band colors resistor value (Resistance, Tolerance, and Temperature Coefficient).</p>
    <Link to="/">Go back to the app</Link>
  </Layout>
)

export default SecondPage
