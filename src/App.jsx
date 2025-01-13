import React, { useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/lib/Header'
import SideNav from './components/lib/SideNav'
import IconControler from './components/lib/IconControler'
import PreviewIcon from './components/lib/PreviewIcon'
import BackgroundControler from './components/lib/BackgroundControler'

const App = () => {
  const [selectedValue, setSelectedValue] = useState(0)

  return (
    <div className=''>
      <Header />
      <div className='w-64 fixed border-r border-slate-200  min-h-screen'>
        <SideNav />
      </div>
      <div className='fixed min-w-full -z-10 '>

        <div className='ml-64  flex h-screen  '>
          <div className='min-w-[350px] p-5 overflow-auto pb-40 border-r'>
            {
              setSelectedValue == 0 ? <IconControler /> : <BackgroundControler />
            }
          </div>

          <div className='flex-1'>
            <PreviewIcon />
          </div>
          <div className='min-w-[150px] bg-green-200'>
            Ads
          </div>

        </div >
      </div>
    </div >
  )
}

export default App