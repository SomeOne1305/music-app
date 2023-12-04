import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const App = (props: Props) => {
  return (
    <div className="App"><Outlet/></div>
  )
}

export default App