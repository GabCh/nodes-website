import React from 'react'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'
import { createSketch } from './sketches/sketch'
import './App.css'
import SideMenu from './components/SideMenu'

export const App: React.FC = () => {
  return (
    <div className='App'>
      <P5Wrapper sketch={createSketch}/>
      <h1>Hello, World!</h1>
      <SideMenu/>
    </div>
  )
}
