import React from 'react'
import Modal from 'react-modal'

const colorPickerModal = ({ bandIndex, ...props }) => {
    return (
        <Modal
            //style={customStyles}
            contentLabel="Resistor Color Band Picker"
            {...props}
        >
            Band {bandIndex} Color
        </Modal>
    );
}

export default colorPickerModal;