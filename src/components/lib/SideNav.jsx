import { sideNavMenu } from '@/constants/Sidenav.constant'
import React, { useState } from 'react'

const SideNav = () => {
    const [menuList, setMenuList] = useState(sideNavMenu)
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div>
            <div>
                {
                    menuList.map((menu, index) => {
                        return <div key={index}
                            className={`p-3  flex gap-4 items-start my-2 text-slate-500 hover:bg-primary hover:text-white cursor-pointer mt-5 rounded-r-xl  transition-all duration-100 ${activeIndex === index && 'bg-primary text-white '}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <menu.icon />
                            {menu.name}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SideNav