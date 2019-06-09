import React, { Component } from 'react';
// import StarCharDetail from './StarCharDetail.js' <StarCharDetail val={props.values}/>
import './StarWars.css';

const StarDetails = props => {
  console.log('StarDetails:',props.values)
  // console.log('values:',props.details);
  // console.log('getting keys:',Object.keys(props.charInfo));
  return (
    <p>{props.details}: <span>
      {props.values}
    </span></p>

  )
}

export default StarDetails;
