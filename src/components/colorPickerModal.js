import React from 'react'
import Modal from 'react-modal'
import numeral from 'numeral'
import './colorPickerModal.css'
Modal.setAppElement('#___gatsby')
const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

export const colors = [
    "Black",
    "Brown",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Gray",
    "White"
];

export const multiplierColors = [
    {
        color: "Black",
        value: 1
    },
    {
        color: "Brown",
        value: 10
    },
    {
        color: "Red",
        value: 100
    },
    {
        color: "Orange",
        value: 1000
    },
    {
        color: "Yellow",
        value: 10000
    },
    {
        color: "Green",
        value: 100000
    },
    {
        color: "Blue",
        value: 1000000
    },
    {
        color: "Purple",
        value: 10000000
    },
    {
        color: "Gold",
        value: 0.1
    },
    {
        color: "Silver",
        value: 0.01
    }

];

export const toleranceColors = [
    {
        color: "Brown",
        value: 0.01
    },
    {
        color: "Red",
        value: 0.02
    },
    {
        color: "Green",
        value: 0.005
    },
    {
        color: "Blue",
        value: 0.0025
    },
    {
        color: "Purple",
        value: 0.001
    },
    {
        color: "Gray",
        value: 0.0005
    },
    {
        color: "Gold",
        value: 0.05
    },
    {
        color: "Silver",
        value: 0.1
    }
]


export const formatValue = (number) => {
    return numeral(number).format('0 a')
}

const renderColors = (bandIndex, chooseColor, mode, selectedColors) => {


    switch (mode) {
        case 4:
            if (bandIndex === 4) {

                return (
                    <>
                        <div className="band-color-header">
                            <h3>Choose {ordinal_suffix_of(bandIndex)} Band Color (Tolerance)</h3>
                        </div>
                        <div className="band-color-container">
                            {toleranceColors.map((item, index) => (

                                <div
                                    key={item.color}
                                    className="band-color-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        chooseColor(item.color.toLowerCase())
                                    }}

                                    style={{
                                        border: selectedColors[`band${bandIndex}`] === item.color.toLowerCase() ? '2px solid rebeccapurple' : '',
                                        color: item.color,
                                        borderRadius: "5px"

                                    }}

                                >
                                    <div className="band-color-content">
                                        <span

                                            style={{
                                                width: 50,
                                                height: 50,
                                                backgroundColor: item.color.toLocaleLowerCase()
                                            }}></span>

                                        <p style={{ margin: 0, padding: 0 }}>{item.color}</p>
                                        <p style={{ margin: 0, padding: 0 }}>{item.value * 100}%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )

            } else if (bandIndex === 3) {

                return (
                    <>
                        <div className="band-color-header">
                            <h3>Choose {ordinal_suffix_of(bandIndex)} Band Color (Mulitiplier)</h3>
                        </div>
                        <div className="band-color-container">
                            {multiplierColors.map((item, index) => (

                                <div

                                    key={item.color}
                                    className="band-color-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        chooseColor(item.color.toLowerCase())
                                    }}

                                    style={{
                                        border: selectedColors[`band${bandIndex}`] === item.color.toLowerCase() ? '2px solid rebeccapurple' : '',
                                        color: item.color,
                                        borderRadius: "5px"

                                    }}

                                >
                                    <div className="band-color-content">
                                        <span
                                            style={{
                                                width: 50,
                                                height: 50,
                                                backgroundColor: item.color.toLocaleLowerCase()
                                            }}></span>

                                        <p style={{ margin: 0, padding: 0 }}>{item.color}</p>
                                        <p style={{ margin: 0, padding: 0 }}>{item.value > 1 ? formatValue(item.value) : item.value} &#8486;</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
            return (
                <>
                    <div className="band-color-header">
                        <h3>Choose {ordinal_suffix_of(bandIndex)} Band Color</h3>
                    </div>
                    <div className="band-color-container">
                        {colors.map((color, index) => (
                            <div
                                key={color}
                                className="band-color-item"
                                onClick={(e) => {
                                    e.preventDefault()
                                    chooseColor(color.toLowerCase())
                                }}

                                style={{
                                    border: selectedColors[`band${bandIndex}`] === color.toLowerCase() ? '2px solid rebeccapurple' : '',
                                    color: color,
                                    borderRadius: "5px"

                                }}

                            >
                                <div className="band-color-content">
                                    <span

                                        style={{
                                            width: 50,
                                            height: 50,
                                            backgroundColor: color.toLocaleLowerCase()
                                        }}></span>

                                    <p style={{ margin: 0, padding: 0 }}>{color}</p>
                                    <p style={{ margin: 0, padding: 0 }}>{index}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )
        case 5:
            return null
        case 6:

            return null
        default:
            return null

    }


}

const colorPickerModal = ({ bandIndex, chooseColor, mode, selectedColors, ...props }) => {
    return (
        <Modal
            style={{
                content: {
                    margin: 'auto', maxWidth: 550,
                    color: 'rebeccapurple',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'
                }
            }}
            contentLabel="Resistor Color Band Picker"
            {...props}
        >

            {
                renderColors(bandIndex, chooseColor, mode, selectedColors)
            }

        </Modal >
    );
}

export default colorPickerModal;