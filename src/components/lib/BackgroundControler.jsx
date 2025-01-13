import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerComp from './ColorPicker'
import { IconContext } from '@/context/UpdateStore'

const BackgroundControler = () => {
    const storagevalue = JSON.parse(localStorage.getItem('bgset'))
    const [roundedValue, setRoundedValue] = useState(storagevalue?.rounded || 0)
    const [paddingValue, setPaddingValue] = useState(storagevalue?.padding || 0);
    const [color, setColor] = useState(storagevalue?.bgcolur)
    const { setIconUpdate } = useContext(IconContext);

    useEffect(() => {
        const updatedValue = {
            ...storagevalue,
            rounded: roundedValue,
            padding: paddingValue,
            bgcolur: color,

        }
        setIconUpdate(updatedValue)
        localStorage.setItem('bgset', JSON.stringify(updatedValue))
    }, [roundedValue, paddingValue, color])

    return (
        <div>
            <div className='flex flex-col gap-4 '>

                <div className='flex gap-3 flex-col ' >
                    <div className='flex justify-between'>
                        <span>Rounded</span> <span>{roundedValue} px</span>
                    </div>
                    <Slider defaultValue={[roundedValue]} max={100} step={1}
                        onValueChange={(e) => setRoundedValue(e[0])}
                    />
                </div>
                <div className='flex gap-3 flex-col ' >
                    <div className='flex justify-between'>
                        <span>Padding</span> <span>{paddingValue} px</span>
                    </div>
                    <Slider defaultValue={[paddingValue]} max={100} step={1}
                        onValueChange={(e) => setPaddingValue(e[0])}
                    />
                </div>
                <div className='flex gap-3 flex-col ' >
                    <div className='flex justify-between'>
                        Background Color
                    </div>
                    <ColorPickerComp selectedColor={setColor} hideControler={false} />
                </div>
            </div>
        </div>
    )
}

export default BackgroundControler