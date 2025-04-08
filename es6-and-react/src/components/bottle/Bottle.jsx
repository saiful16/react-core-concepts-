import React from 'react'
import './bottle.css'

function Bottle({ bottle }) {
    console.log(bottle)
    const { name, img, price, seller, stock, shipping } = bottle
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p>Only Reamining : {stock}</p>
        </div>
    )
}

export default Bottle