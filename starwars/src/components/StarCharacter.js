import React from 'react';
import StarDetails from './StarDetails.js'
import './StarWars.css';

const StarCharacter = props => {
  console.log('props StarCharacter:',props);
  // console.log('values:',props.charValues);
  // console.log('getting keys:',Object.keys(props.charInfo));

  let subjHead=Object.values(props.starChar)[0];

  return (
    <div className="character">
      <h3>{subjHead}</h3>
      {delete props.starChar.name}
      {Object.keys(props.starChar).map(key => {
        return (
          <StarDetails details={key} values={props.starChar[key]} key={props.starChar[key].created}/>
        )
      })}
    </div>
  )
}

export default StarCharacter;
