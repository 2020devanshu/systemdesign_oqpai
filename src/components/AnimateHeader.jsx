import React from 'react'

const AnimateHeader = ({ eng, hin, guj }) => {
    return (
        <h1 className='animate-text'>
            <span>{eng}</span>
            <span>{hin}</span>
            <span>{guj}</span>
        </h1>
    )
}

export default AnimateHeader