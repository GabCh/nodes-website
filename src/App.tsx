import React from 'react'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'
import { createEchophon } from './sketches/ecophon'
import './App.css'
import SideMenu from './components/SideMenu'

export const App: React.FC = () => {
  return (
    <div className='App'>
      <P5Wrapper sketch={createEchophon}/>
      <h1>Hello, World!</h1>
      <SideMenu/>
    </div>
  )
}
