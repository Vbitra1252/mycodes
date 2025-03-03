import React from 'react'
import './card.css'
const MyCard = (props) => {
    return (
        <div className='cont'>
            <h1>
                {props.title}
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio? Culpa, at.
            </p>
        </div>
    )
}

export default MyCard