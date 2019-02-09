import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Resistor4 from '../components/resistor4'
import Resistor5 from '../components/resistor5'
import Resistor6 from '../components/resistor6'

import BandModal from '../components/colorPickerModal'

class IndexPage extends React.Component {
  state = {
    mode: 4,
    modalIsOpen: false
  }

  closeModal = () => {

    this.setState({
      modalIsOpen: false
    })
  }

  openModal = bandIndex => () => {
    this.setState({
      bandIndex,
      modalIsOpen: true
    })
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
            openModal={this.openModal}
          />}
          {mode === 5 && <Resistor5
            openModal={this.openModal}
          />}
          {mode === 6 && <Resistor6
            openModal={this.openModal}
          />}
        </div>

        <BandModal
          mode={this.state.mode}
          bandIndex={this.state.bandIndex}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        />

      </Layout>
    )
  }

}


export default IndexPage
