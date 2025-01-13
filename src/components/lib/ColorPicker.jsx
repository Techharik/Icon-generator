import React, { useEffect, useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'


const ColorPickerComp = ({ selectedColor, hideControler }) => {


    const [color, setColor] = useState('rgba(255,255,255,1)');



    return (

        <ColorPicker value={color} onChange={selectedColor} hideControls={hideControler} disableDarkMode />

    )
}

export default ColorPickerComp