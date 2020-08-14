import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Red from './components/Red'
import Blue from './components/Blue'
import Square from './components/Square'
import BlueClass from './components/BlueClass'
function App() {
  const [colorState, setColorState] = useState('pink');
  const change = () => {
    setColorState('black')
  };

  return <div className='container' onClick={() => change()}>
    <BlueClass colorText={colorState}></BlueClass></div>;
}

export default App;
// const list = [];
  // for (let i = 1; i <= 64; i++) {
  //   let color = '';
  //   // row xac dinh hang cua bàn cơ
  //   const row = Math.ceil(i / 8);
  //   const checkNum = row + i;
  //   if (checkNum % 2 != 0) {
  //     color = 'black';
  //   } else {
  //     color = 'white';
  //   }
  //   // list.push(<Squ
