import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Resistor4 from '../components/resistor4'
import Resistor5 from '../components/resistor5'
import Resistor6 from '../components/resistor6'

import BandModal, { colors, multiplierColors, toleranceColors, formatValue } from '../components/colorPickerModal'

class IndexPage extends React.Component {
  state = {
    mode: 4,
    modalIsOpen: false,
    selectedColors: {
      band1: 'yellow',
      band2: 'purple',
      band3: 'orange',
      band4: 'gold'
    },
    ohmValue: 0
  }
  componentDidMount() {
    this.calculateResult()
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
    }, () => {
      this.calculateResult()
    })
  }

  calculateResult = () => {
    const { mode, selectedColors } = this.state;
    let b1;
    let b2;
    let b3;
    let b4;
    let b5;
    let b6;
    let ohmValue;
    let ohmValueMax;
    let ohmValueMin;
    let tolerance;
    switch (mode) {
      case 4:
        b1 = colors.findIndex(color => color.toLowerCase() === selectedColors.band1);
        b2 = colors.findIndex(color => color.toLowerCase() === selectedColors.band2);
        b3 = multiplierColors.find(item => item.color.toLowerCase() === selectedColors.band3).value;
        b4 = toleranceColors.find(item => item.color.toLowerCase() === selectedColors.band4).value;

        ohmValue = Number(`${b1}${b2}`) * b3;
        tolerance = b4 * 100;
        break;
    }


    this.setState({
      ohmValue,
      tolerance
    })
  }
  render() {
    const { mode, ohmValue, tolerance } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {/* <h1>Resistor Calculator</h1> */}
        <div style={{

          display: "inline-block",
          position: "relative",
          width: "100%",
          paddingBottom: "60vh",
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

          <div style={{

            position: "absolute",
            top: "50%",
            textAlign: "center",
            width: "100%"
          }}>
            <h3> Resistor Value:</h3>
            <p>{formatValue(ohmValue)} &#8486; &plusmn; {tolerance}%</p>
          </div>
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
