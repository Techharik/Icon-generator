import React, { useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/lib/Header'
import SideNav from './components/lib/SideNav'

const App = () => {
  const [selectedValue, setSelectedValue] = useState(0)

  return (
    <div className=''>
      <Header />
      <div className='w-64 fixed border-r border-slate-200  min-h-screen'>
        <SideNav />
      </div>
      <div className='ml-64'>
        Body
      </div>
    </div>
  )
}

export default App