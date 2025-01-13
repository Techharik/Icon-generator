import React, { useEffect, useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'


const ColorPickerComp = ({ selectedColor }) => {
    const [color, setColor] = useState('rgba(255,255,255,1)');



    return (

        <ColorPicker value={color} onChange={selectedColor} hidePresets hideOpacity hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType hideColorTypeBtns hideGradientType disableDarkMode />

    )
}

export default ColorPickerComp