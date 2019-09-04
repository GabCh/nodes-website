import React from 'react';
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <P5Wrapper sketch={sketch}/>
    </div>
  );
};

export default App;
