import React from 'react';

const Station = (props) => {
  return(
    <div>
      <h3>{props.name}</h3>
      <h4>sea level rise rate: {props.rate} mm/yr</h4>
    </div>
  )
}

export default Station;