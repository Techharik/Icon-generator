import React from 'react'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'
import Logo from '/logo.png'
const Header = ({ setDownload, download }) => {
    return (
        <div className='border flex justify-between items-center p-5 '>
            <img src={Logo} alt="dummy-logo" className='w-10 h-10' />
            <Button onClick={() => setDownload(Date.now())}> <Download /> Download</Button>
        </div>
    )
}

export default Header