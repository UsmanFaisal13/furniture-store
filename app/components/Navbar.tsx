"use client"
import { useState } from "react"
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>

            <div className={`mx-4  flex flex-col gap-2 lg:hidden justify-center items-end ${isOpen ? `z-50` : `z-40`}`} onClick={() => setOpen(!isOpen)}>

                <div className={`h-[3px] w-6 bg-black rounded-3xl ${isOpen ? `rotate-45 translate-y-2` : `block`} transition-all`} ></div>
                <div className={`h-[3px] w-6 bg-black rounded-3xl ${isOpen ? `-rotate-45 translate-y-2 relative bottom-[11px]` : `block`} transition-all`}></div>

            </div>
            <nav className={`bg-[#FBEBB5] w-full h-full flex flex-col items-center justify-center lg:hidden absolute z-40 rounded-xl ${isOpen ? `flex ` : `hidden`} transition-all`}>
                <div className={`flex flex-col gap-16 items-center justify-center py-16`}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/shop'}>Shop</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/contact'}>Contact</Link>
                </div>
                <div className="flex gap-16 items-center justify-center">
                    <Link href={'/account'}><Image src={'/icons/account.svg'} width={28} height={28} alt='icon'></Image></Link>
                    <Link href={'/'}><Image src={'/icons/search.svg'} width={28} height={28} alt='icon'></Image></Link>
                    <Link href={'/'}><Image src={'/icons/like.svg'} width={28} height={28} alt='icon'></Image></Link>
                    <Link href={'/cart'}><Image src={'/icons/cart.svg'} width={28} height={28} alt='icon'></Image></Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar