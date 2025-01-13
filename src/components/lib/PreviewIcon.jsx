import { IconContext } from '@/context/UpdateStore'
import { icons } from 'lucide-react'
import React, { useContext } from 'react'

const PreviewIcon = () => {
    const storageValue = JSON.parse(localStorage.getItem('iconSet'))
    const { iconUpdates, setIconUpdate } = useContext(IconContext);


    const Icon = ({ name, color, size, rotate }) => {
        const LucuidIcon = icons[name];
        if (!LucuidIcon) {
            return alert('nil')
        }
        return <LucuidIcon color={color} size={size} style={{
            transform: `rotate(${rotate}deg)`
        }} />
    }
    // alert(storageValue.iconColor)
    return (
        <div className='flex justify-center items-center pt-10'>
            <div className='w-[512px] h-[512px] border'>
                <div className='flex justify-center items-center h-full'>
                    <Icon name={storageValue?.icon} color={storageValue.iconColor} size={storageValue.iconSize} rotate={storageValue.rotate} />
                </div>
            </div>
        </div>
    )
}

export default PreviewIcon