import React from 'react';
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import './App.css';
import SideMenu from "./components/SideMenu";

const App: React.FC = () => {
  return (
    <div className="App">
      <P5Wrapper sketch={sketch}/>
      <h1>Hello, World!</h1>
      <SideMenu/>
    </div>
  );
};

export default App;
