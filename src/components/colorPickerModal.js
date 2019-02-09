import React from 'react'
import Modal from 'react-modal'

import './colorPickerModal.css'

const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

const colors = [
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


const renderColors = (bandIndex, chooseColor, mode) => {


    switch (mode) {
        case 4:
            if (bandIndex === 4) {

            } else if (bandIndex === 3) {

            }
            return <>{colors.map((color, index) => (
                <div className="band-color-item">
                    <div className="band-color-content">
                        <button
                            onClick={() => {
                                chooseColor(color.toLowerCase())
                            }}
                            style={{
                                width: 50,
                                height: 50,
                                backgroundColor: color.toLocaleLowerCase()
                            }}></button>

                        <p style={{ margin: 0, padding: 0 }}>{color}</p>
                        <p style={{ margin: 0, padding: 0 }}>{index}</p>
                    </div>
                </div>
            ))}</>
        case 5:
            return null
        case 6:

            return null

    }


}

const colorPickerModal = ({ bandIndex, chooseColor, mode, ...props }) => {
    return (
        <Modal
            style={{ content: { margin: 'auto', maxWidth: 550 } }}
            contentLabel="Resistor Color Band Picker"
            {...props}
        >
            <h3>Choose {ordinal_suffix_of(bandIndex)} Band Color</h3>
            <div className="band-color-container">
                {
                    renderColors(bandIndex, chooseColor, mode)
                }
            </div>
        </Modal >
    );
}

export default colorPickerModal;