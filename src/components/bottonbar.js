import React from 'react'
import { IconBxHomeAlt2, 
    IconSearch,
    IconLocationFood,
    IconHeart,
    IconUser
} from './ui/icons'
import Link from 'next/link'
function Bottonbar() {


  return (
    <div className="fixed bottom-0 w-[100%] h-[80px] px-7 bg-white blur-2px flex flex-row justify-between z-10">
        {/* icon */}
        <Link className="flex flex-col justify-center items-center" href="/">
            < IconBxHomeAlt2 className="w-[25px] h-[25px] text-black" />
        </Link>
        {/* icon */}
        <Link className="flex flex-col justify-center items-center" href="">
            <IconSearch className="w-[25px] h-[25px] text-black" />
        </Link>
        {/* icon */}
        <div className="flex flex-col justify-center items-center">
            <Link className="w-[40px] h-[40px] rounded-full bg-orange-400 flex flex-row " href="">
                <IconLocationFood className="w-[25px] h-[25px] text-white m-auto" />
            </Link>
        </div>
        {/* icon */}
        <Link className="flex flex-col justify-center items-center" href="">
            <IconHeart className="w-[25px] h-[25px] text-black" />
        </Link>
        {/* icon */}
        <Link className="flex flex-col justify-center items-center" href="/user">
            <IconUser className="w-[25px] h-[25px] text-black" />
        </Link>
    </div>
  )
}

export default Bottonbar