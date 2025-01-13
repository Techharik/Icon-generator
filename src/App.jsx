import React, { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/lib/Header'
import SideNav from './components/lib/SideNav'
import IconControler from './components/lib/IconControler'
import PreviewIcon from './components/lib/PreviewIcon'
import BackgroundControler from './components/lib/BackgroundControler'
import banner from '/rb_1217.png'
const App = () => {
  const [selectedValue, setSelectedValue] = useState(0)
  const [download, setDownload] = useState(false)


  return (
    <div className=''>
      <Header setDownload={setDownload} download={download} />
      <div className='w-64 fixed border-r border-slate-200  min-h-screen'>
        <SideNav setSelectedValue={setSelectedValue} />
      </div>
      <div className='fixed min-w-full -z-10 '>

        <div className='ml-64  flex h-screen  '>
          <div className='min-w-[350px] p-5 overflow-auto pb-40 border-r'>
            {
              selectedValue == 0 ? <IconControler /> : <BackgroundControler />
            }
          </div>

          <div className='flex-1 min-w-[600px]'>
            <PreviewIcon download={download} />
          </div>
          <div className='min-w-[100px] h-full w-[300px]'>
            <img src={banner} alt="" className='h-full w-full' />
          </div>

        </div >
      </div>
    </div >
  )
}

export default App