import React from 'react';
import StarCharacter from './StarCharacter.js'
// import StarValues from './StarValues.js'
import './StarWars.css';

const StarList = props => {
  console.log('props StarList:',props);
  // console.log('getting keys:',Object.keys(props.charInfo));
  return (
    <div className="starListContainer">
      {props.charInfo.map(char => {
        return (
          <StarCharacter starChar={char} key={props.charInfo.name}/>
        )
      })}
    </div>
  )
}

export default StarList;
