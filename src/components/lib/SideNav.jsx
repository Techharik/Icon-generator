import { sideNavMenu } from '@/constants/Sidenav.constant'
import React, { useState } from 'react'

const SideNav = ({ setSelectedValue }) => {
    const [menuList, setMenuList] = useState(sideNavMenu)
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className='flex justify-between flex-col  relative '>
            <div className='flex-1 min-h-[500px]'>
                {
                    menuList.map((menu, index) => {
                        return <div key={index}
                            className={`p-3  flex gap-4 items-start my-2 text-slate-500 hover:bg-primary hover:text-white cursor-pointer mt-5 rounded-r-xl  transition-all duration-100 ${activeIndex === index && 'bg-primary text-white '}`}
                            onClick={() => {
                                setActiveIndex(index);
                                setSelectedValue(index)
                            }
                            }
                        >
                            <menu.icon />
                            {menu.name}
                        </div>
                    })
                }
            </div>
            <div className='flex justify-center flex-col items-center gap-2 '>
                <p>
                    Powered By
                </p>

                <p>
                    @techharik.in
                </p>
            </div>
        </div >
    )
}

export default SideNav