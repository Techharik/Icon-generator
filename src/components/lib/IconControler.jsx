import { icons, Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerComp from './ColorPicker'
import { IconContext } from '@/context/UpdateStore'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { lucideIconNames } from '@/constants/Sidenav.constant'

const IconControler = () => {
    const storagevalue = JSON.parse(localStorage.getItem('iconSet'))
    const [sizeValue, setSizeValue] = useState(storagevalue?.iconSize || 230)
    const [rotateValue, setRotateValue] = useState(
        0);
    const [color, setColor] = useState(storagevalue?.iconColor || '#fff')
    const { setIconUpdate } = useContext(IconContext);
    const [selectedIcon, setSelectedIcon] = useState(storagevalue?.icon || 'Smile')
    const [isDialogOpen, setDialogOpen] = useState(false);

    const Icon = ({ name, color, size, rotate }) => {
        const LucuidIcon = icons[name];
        if (!LucuidIcon) {
            return <div>No Icon Found</div>;
        }
        return (
            <div
                className='bg-slate-400 inline-flex p-2 justify-center rounded-lg cursor-pointer' onClick={() => {
                    setSelectedIcon(name)
                    setDialogOpen(false)
                }}
            >
                <LucuidIcon color={color} size={size} />
            </div>
        );
    };


    useEffect(() => {

        const updatedValue = {
            ...storagevalue,
            iconSize: sizeValue,
            rotate: rotateValue,
            iconColor: color,
            icon: selectedIcon
        }
        setIconUpdate(updatedValue)
        localStorage.setItem('iconSet', JSON.stringify(updatedValue))
    }, [sizeValue, rotateValue, color, selectedIcon])


    return (
        <div>
            <div className='flex flex-col gap-4 '>
                <div>
                    <h1>Icon</h1>

                    <Dialog open={isDialogOpen}>

                        <div className=' ' onClick={() => setDialogOpen(true)}>
                            <Icon name={selectedIcon} />
                        </div>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Select Icons</DialogTitle>
                                <DialogDescription>
                                    <div className='grid grid-cols-6 h-[400px] overflow-auto gap-5'>
                                        {
                                            lucideIconNames.slice(0, 100).map((icon, ind) => <Icon key={ind} name={icon} size={24} color={color} />)
                                        }
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
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
                    <ColorPickerComp hideControler={true} selectedColor={setColor} />
                </div>
            </div>
        </div>
    )
}

export default IconControler