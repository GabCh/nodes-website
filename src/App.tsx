import React from 'react'
import { AnimatedBackground } from './components/AnimatedBackground'
import { SideMenu } from './components/SideMenu'
import './App.css'

export const App: React.FC = () => (
  <div className='App'>
    <AnimatedBackground/>
    <h1>Nodes</h1>
    <SideMenu/>
  </div>
)
