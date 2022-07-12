import React from 'react'
import PropTypes from 'prop-types'

function Data(props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className=' text-fem-200 font-bold text-lg'>{props.number}</h2>
            <span className='text-xs text-fem-300 font-extralight'>{props.children}</span>
        </div>
    )
}

Data.propTypes = {
    number: PropTypes.string,
    children: PropTypes.string,
}

export default Data
