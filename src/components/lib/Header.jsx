import React from 'react'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'

const Header = () => {
    return (
        <div className='border flex justify-between items-center p-5 '>
            <img src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" alt="dummy-logo" className='w-10 h-10' />
            <Button> <Download /> Download</Button>
        </div>
    )
}

export default Header