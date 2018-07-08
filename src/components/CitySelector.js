import React from 'react';

export default function StateSelector(props) {
    return (
      <div>
        <input onChange={(e)=>props.getCity(e.target.value)} placeholder="City" className="location-input"/>
      </div>
    )
}