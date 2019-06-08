import React from 'react';
import './StarWars.css';

// class StarKeys extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     console.log(this.state);
//
//     return (
//       <ul className="key">
//         <li>something</li>
//       </ul>
//     );
//
//   }
// }

const StarKeys = props => {
  console.log('props:',props);
  // console.log('getting keys:',Object.keys(props.charInfo));
  return (
    <ul className="key">
      <li>{props.charKeys}</li>
    </ul>
  )
}

export default StarKeys;
