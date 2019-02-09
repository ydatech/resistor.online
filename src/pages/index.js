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
    modalIsOpen: false,
    selectedColors: {
      band1: 'yellow',
      band2: 'purple',
      band3: 'orange',
      band4: 'gold'
    }
  }

  closeModal = () => {

    this.setState({
      modalIsOpen: false
    })
  }

  openModal = bandIndex => () => {
    this.setState({
      bandIndex,
      modalIsOpen: true,

    })
  }

  chooseColor = (color) => {

    this.setState({
      selectedColors: {
        ...this.state.selectedColors,
        ...{
          [`band${this.state.bandIndex}`]: color
        }
      },
      modalIsOpen: false
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
          overflow: "hidden",
          maxWidth: 600
        }}>
          {mode === 4 && <Resistor4
            openModal={this.openModal}
            selectedColors={this.state.selectedColors}
          />}
          {mode === 5 && <Resistor5
            openModal={this.openModal}
            selectedColors={this.state.selectedColors}
          />}
          {mode === 6 && <Resistor6
            openModal={this.openModal}
            selectedColors={this.state.selectedColors}
          />}
        </div>

        <BandModal
          mode={this.state.mode}
          bandIndex={this.state.bandIndex}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          chooseColor={this.chooseColor}

        />

      </Layout>
    )
  }

}


export default IndexPage
