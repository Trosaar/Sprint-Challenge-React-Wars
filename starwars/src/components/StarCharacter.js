import React from 'react';
import './StarWars.css';

const StarCharacter = props => {
  console.log('props StarCharacter:',props);
  // console.log('values:',props.charValues);
  // console.log('getting keys:',Object.keys(props.charInfo));
  return (
    <div className="character">
      <h4>{props.starChar.name}</h4>
    </div>
  )
}

export default StarCharacter;
