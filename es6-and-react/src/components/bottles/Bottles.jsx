import React, { use } from 'react'
import Bottle from '../bottle/bottle';
import './bottles.css'

function Bottles({bottlePromise}) {
    const bottlesData = use(bottlePromise);
    console.log(bottlesData)
  return (
    <div >
        <h3>Bottles : {bottlesData.length}</h3>
        <div className='bottle-container'>
        {
            bottlesData.map( bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
        }
        </div>
    </div>
  )
}

export default Bottles