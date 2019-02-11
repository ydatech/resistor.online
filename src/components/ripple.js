import React from 'react'
import './ripple.css'
const Ripple = (props) => {


    return <div className="lds-ripple" {...props}><div></div><div></div></div>
}

export default Ripple