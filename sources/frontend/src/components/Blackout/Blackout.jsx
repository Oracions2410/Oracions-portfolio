import React from 'react'

const Blackout = ({ setElement }) => {
    return <React.Fragment>
        <div ref={el => setElement(el)} class="blackout"></div>
    </React.Fragment>
}

export default Blackout