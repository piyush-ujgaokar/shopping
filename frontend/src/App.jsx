import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App