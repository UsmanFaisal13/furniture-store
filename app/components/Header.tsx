import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'


const Header = () => {
    return (
        <header className="grid lg:grid-cols-3 h-[100px]">
            <Navbar />
            <div className='hidden lg:block'></div>

            <div className="h-full hidden lg:flex justify-center items-center">
                <nav>
                    <ul className="flex pt-8 md:pt-0 lg:pt-0 lg:gap-16 gap-4 justify-center items-center font-medium text-base">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/shop'}>Shop</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </ul>
                </nav>
            </div>
            <div className="h-full hidden lg:flex justify-center items-center">
                <nav>
                    <ul className="flex gap-10 justify-center items-center">
                        <Link href={'/cart'}><Image src={'/icons/cart.svg'} width={28} height={28} alt='icon'></Image></Link>

                    </ul>

                </nav>

            </div>

        </header>
    )
}

export default Header