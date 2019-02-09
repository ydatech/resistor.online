import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Resistor4 from '../components/resistor4'
import Resistor5 from '../components/resistor5'
import Resistor6 from '../components/resistor6'

class IndexPage extends React.Component {
  state = {
    mode: 4
  }
  render() {
    const { mode } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {/* <h1>Resistor Calculator</h1> */}
        <div style={{

          display: "inline-block",
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          verticalAlign: "middle",
          overflow: "hidden"
        }}>
          {mode === 4 && <Resistor4
          />}
          {mode === 5 && <Resistor5
          />}
          {mode === 6 && <Resistor6
          />}
        </div>

      </Layout>
    )
  }

}


export default IndexPage
