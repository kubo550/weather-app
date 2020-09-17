import React from 'react';
import './App.css';
import ButtonGrid from './components/ButtonsGrid';


function App() {
  let r,g,b, color
  const user = 'admin';
  const colorsArr = ['red', 'green', 'yellow', 'blue', 'orange', 'violet', 'grey', 'white'];

  const newRandomColor = () => {
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      color = `rgb(${r},${g},${b})`;
  }

  newRandomColor();
  return (
    <div className="App">
      <h1>Classify This Color!</h1>
      <div 
        className="random-color"
        style={{background:color}}>
          bg: {color}
        </div>
      <ButtonGrid user={user} colorsArr={colorsArr} />
    </div>
  );
}

export default App;
