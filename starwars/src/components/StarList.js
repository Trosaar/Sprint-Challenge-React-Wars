import React from 'react';
import StarKeys from './StarKeys.js'
import './StarWars.css';

const StarList = props => {
  // console.log('props:',props);
  console.log('getting keys:',Object.keys(props.charInfo));
  return (
    <div className="starListContainer">
      {Object.keys(props.charInfo).map( key => {
        return (
          <StarKeys charKeys={key}/>
        )
      })}
    </div>
  )
}

export default StarList;
