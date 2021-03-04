import React from 'react'

import {Navbar} from './components/navbar/Navbar.jsx'
import Routes from './routes'

import CenterContainer from './components/center/CenterContainer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <CenterContainer />
      <Routes />
    </div>
  )
}

export default App
