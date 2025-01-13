import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerComp from './ColorPicker'
import { IconContext } from '@/context/UpdateStore'

const IconControler = () => {
    const storagevalue = JSON.parse(localStorage.getItem('iconSet'))
    const [sizeValue, setSizeValue] = useState(storagevalue?.iconSize || 230)
    const [rotateValue, setRotateValue] = useState(storagevalue?.rotate || 0);
    const [color, setColor] = useState(storagevalue?.iconColor || '#fff')
    const { setIconUpdate } = useContext(IconContext);


    useEffect(() => {

        const updatedValue = {
            ...storagevalue,
            iconSize: sizeValue,
            rotate: rotateValue,
            iconColor: color,
            icon: 'Smile'
        }
        setIconUpdate(updatedValue)
        localStorage.setItem('iconSet', JSON.stringify(updatedValue))
    }, [sizeValue, rotateValue, color])


    return (
        <div>
            <div className='flex flex-col gap-4 '>
                <div>
                    <h1>Icon</h1>
                    <div className='bg-slate-300 inline-block p-4 rounded-lg '>
                        <Smile />
                    </div>
                </div>
                <div className='flex gap-3 flex-col ' >
                    <div className='flex justify-between'>
                        <span>Size</span> <span>{sizeValue} px</span>
                    </div>
                    <Slider defaultValue={[sizeValue]} max={512} step={1}
                        onValueChange={(e) => setSizeValue(e[0])}
                    />
                </div>
                <div className='flex gap-3 flex-col ' >
                    <div className='flex justify-between'>
                        <span>Rotate</span> <span>{rotateValue} °</span>
                    </div>
                    <Slider defaultValue={[rotateValue]} max={360} step={1}
                        onValueChange={(e) => setRotateValue(e[0])}
                    />
                </div>
                <div className='flex gap-3 flex-col ' >
                    <div className='flex justify-between'>
                        Icon Color
                    </div>
                    <ColorPickerComp selectedColor={setColor} />
                </div>
            </div>
        </div>
    )
}

export default IconControler