import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedBackground } from './components/AnimatedBackground'
import { FacebookFeed } from './components/FacebookFeed'
import { SideMenu } from './components/SideMenu'
import './App.css'

export const App: React.FC = () => (
  <div className='App'>
    <AnimatedBackground/>
    <h1>Nodes</h1>
    <Router>
      <SideMenu/>
      <Route path='/' />
      <Route path='/follow_us' component={FacebookFeed} />
    </Router>
  </div>
)
