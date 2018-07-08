import React from 'react';

export default function AddButton(props) {
    return (
      <div>
        <button onClick={()=>props.add()} className="add-button"></button>
      </div>
    )
}