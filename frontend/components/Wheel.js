import React, { useEffect, useState }from 'react'

import { connect } from 'react-redux'

import * as actions from '../state/action-creators'


function Wheel(props) {
 
  const [ state, setState ] = useState({
    currentCircle: [0,1,2,3,4,5]
  })
  return (
    <div id="wrapper">
      <div id="wheel"> 
        {state.currentCircle.map(idx => (
          <div key={idx} className={`cog${idx === props.wheel ? ' active': ''}`} style={{ "--i": idx }}>
            {idx === props.wheel ? 'B' : null}
          </div>
        ))
      }

      
      </div>
        <div id="keypad">
          <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise(1)}>Counter clockwise</button>
          <button id="clockwiseBtn" onClick={() => props.moveClockwise(1)}>Clockwise</button>
        </div> 
    </div>
  )
}

export default connect(state => state, actions)(Wheel);