import React from 'react'
import { IconNotificationsOutline } from './ui/icons'

function Navbar() {
  return (
    <div className="fixed top-0 w-[100%] h-[50px] bg-white text-black z-10">
        <div className='flex flex-row justify-between py-3 px-4'>
            <p className="">WeEat.</p>
            <div className="">
                <IconNotificationsOutline className="w-[20px] h-[20px] mr-2 text-black" />
            </div>
        </div>
        {/* 多個漸變色分隔線，白->粉->橘->紫->橘->粉->白 */}
        <div className="h-[5px] bg-gradient-to-r from-white to-white via-orange-600"></div>

    </div>
  )
}

export default Navbar