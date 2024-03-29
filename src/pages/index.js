import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Resistor4 from '../components/resistor4'
import Resistor5 from '../components/resistor5'
import Resistor6 from '../components/resistor6'

import Ripple from '../components/ripple'

import BandModal, { colors, multiplierColors, toleranceColors, temperatureColors, formatValue } from '../components/colorPickerModal'

const buttonStyleActive = {
  backgroundColor: "Transparent",
  backgroundRepeat: "no-repeat",
  border: "2px solid rebeccapurple",
  color: "rebeccapurple",
  cursor: "pointer",
  overflow: "hidden",
  outline: "none",
  margin: 10
}
const buttonStyleInactive = {
  ...buttonStyleActive,
  border: "1px solid gray",
  color: "gray"
}

const selectedColors4 = {
  band1: 'yellow',
  band2: 'purple',
  band3: 'orange',
  band4: 'gold'
}


const selectedColors5 = {
  band1: 'red',
  band2: 'orange',
  band3: 'purple',
  band4: 'black',
  band5: 'brown'
}

const selectedColors6 = {
  band1: 'brown',
  band2: 'orange',
  band3: 'green',
  band4: 'black',
  band5: 'brown',
  band6: 'orange'
}

const defaultColros = {
  selectedColors4,
  selectedColors5,
  selectedColors6
}
class IndexPage extends React.Component {
  state = {
    mode: 4,
    modalIsOpen: false,
    selectedColors: selectedColors4,
    ohmValue: 47000,
    tolerance: 0.05 * 100
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
      disableRipple: true
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

  switchMode = mode => () => {

    this.setState({
      mode,
      selectedColors: defaultColros[`selectedColors${mode}`]
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
    // let ohmValueMax;
    // let ohmValueMin;
    let tolerance;
    let temperature;
    switch (mode) {
      case 4:
        b1 = colors.findIndex(color => color.toLowerCase() === selectedColors.band1);
        b2 = colors.findIndex(color => color.toLowerCase() === selectedColors.band2);
        b3 = multiplierColors.find(item => item.color.toLowerCase() === selectedColors.band3).value;
        b4 = toleranceColors.find(item => item.color.toLowerCase() === selectedColors.band4).value;

        ohmValue = Number(`${b1}${b2}`) * b3;
        tolerance = b4 * 100;
        break;
      case 5:
        b1 = colors.findIndex(color => color.toLowerCase() === selectedColors.band1);
        b2 = colors.findIndex(color => color.toLowerCase() === selectedColors.band2);
        b3 = colors.findIndex(color => color.toLowerCase() === selectedColors.band3);
        b4 = multiplierColors.find(item => item.color.toLowerCase() === selectedColors.band4).value;
        b5 = toleranceColors.find(item => item.color.toLowerCase() === selectedColors.band5).value;
        ohmValue = Number(`${b1}${b2}${b3}`) * b4;
        tolerance = b5 * 100;
        break;
      case 6:
        b1 = colors.findIndex(color => color.toLowerCase() === selectedColors.band1);
        b2 = colors.findIndex(color => color.toLowerCase() === selectedColors.band2);
        b3 = colors.findIndex(color => color.toLowerCase() === selectedColors.band3);
        b4 = multiplierColors.find(item => item.color.toLowerCase() === selectedColors.band4).value;
        b5 = toleranceColors.find(item => item.color.toLowerCase() === selectedColors.band5).value;
        b6 = temperatureColors.find(item => item.color.toLowerCase() === selectedColors.band6).value;

        ohmValue = Number(`${b1}${b2}${b3}`) * b4;
        tolerance = b5 * 100;
        temperature = b6;
        break;
      default:
        break;
    }


    this.setState({
      ohmValue,
      tolerance,
      temperature
    })
  }

  setFirstRef = (element) => {
    this.firstBandRef = element;
  }
  render() {
    const { mode, ohmValue, tolerance, temperature, disableRipple } = this.state;
    let showRipple = false;
    let rippleTop = 0;
    let rippleLeft = 0;
    if (this.firstBandRef) {
      showRipple = true;
      const rect = this.firstBandRef.getBoundingClientRect();
      rippleLeft = rect.left;
      rippleTop = rect.top
    }

    showRipple = disableRipple ? false : showRipple;
    return (
      <Layout>
        <SEO title="Resistor Calculator" keywords={[`resistor calculator`, `resistor colors code calculator`, `resistor color code`, 'resistor value', 'resistor calculator 4 band', 'resistor calculator 5 band', 'resistor calculator 6 band', 'resistor calculator download']} />
        {/* <h1>Resistor Calculator</h1> */}
        <div style={{
          width: '100%',
          display: "flex",
          justifyContent: 'center'
        }}>
          <button
            onClick={this.switchMode(4)}
            style={mode === 4 ? buttonStyleActive : buttonStyleInactive}
          >
            4-Band
          </button>
          <button
            onClick={this.switchMode(5)}
            style={mode === 5 ? buttonStyleActive : buttonStyleInactive}
          >
            5-Band
          </button>
          <button
            onClick={this.switchMode(6)}
            style={mode === 6 ? buttonStyleActive : buttonStyleInactive}
          >
            6-Band
          </button>
        </div>
        <div style={{

          display: "inline-block",
          position: "relative",
          width: "100%",
          paddingBottom: "60vh",
          verticalAlign: "middle",
          overflow: "hidden",
          maxWidth: 600
        }}>
          {showRipple &&
            <Ripple
              onClick={this.openModal(1)}
              style={{
                top: rippleTop,
                left: rippleLeft - 16
              }}
            />}
          {mode === 4 && <Resistor4
            setFirstRef={this.setFirstRef}
            openModal={this.openModal}
            selectedColors={this.state.selectedColors}
          />}
          {mode === 5 && <Resistor5
          setFirstRef={this.setFirstRef}
            openModal={this.openModal}
            selectedColors={this.state.selectedColors}
          />}
          {mode === 6 && <Resistor6
          setFirstRef={this.setFirstRef}
            openModal={this.openModal}
            selectedColors={this.state.selectedColors}
          />}

          <div style={{

            position: "absolute",
            top: "50%",
            textAlign: "center",
            width: "100%",
            color: "rebeccapurple",
            lineHeight: .5
          }}>
            <h3> Resistor Value:</h3>
            <p>Resistence: <strong>{ohmValue > 1 ? formatValue(ohmValue) : ohmValue.toFixed(2)} &#8486;</strong></p>
            <p>Tolerance: <strong>&plusmn; {tolerance}% </strong></p>
            {mode === 6 && <p>Temperature Coefficient: <strong>{temperature} ppm/K</strong></p>}
          </div>
        </div>

        <BandModal
          mode={this.state.mode}
          bandIndex={this.state.bandIndex}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          chooseColor={this.chooseColor}
          selectedColors={this.state.selectedColors}

        />

      </Layout>
    )
  }

}


export default IndexPage
