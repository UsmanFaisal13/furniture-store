import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex justify-center flex-col gap-8  w-full h-[555px] bg-white">
            <div className="grid lg:grid-cols-4 lg:gap-2 gap-12 bg-white">
                <div className="flex justify-center items-center">
                    <span className="px-18 text-[#9f9f9f]">400 University Drive Suite 200 Coral <br /> Gables, <br />
                        FL 33134 USA</span>

                </div>
                <div className="flex flex-col justify-center items-center lg:gap-12 gap-6 ">
                    <h1 className="lg:pr-7 text-[#9f9f9f]">Links</h1>
                    <ul className="flex flex-col justify-center items-center lg:items-start lg:gap-12 gap-6">


                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/shop'}>Shop</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li> <Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center lg:gap-12 gap-6" >
                    <h1 className="lg:pr-7 text-[#9f9f9f]">Help</h1>
                    <ul className="flex flex-col justify-center items-center lg:items-start lg:gap-12 gap-6">
                        <li><Link href={'/'}>Payment Options</Link></li>
                        <li><Link href={'/'}>Returns</Link></li>
                        <li><Link href={'/'}>Privacy Policy</Link></li>

                    </ul>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-12 gap-6">
                    <h1 className="text-[#9f9f9f]">News Letter</h1>
                    <form>
                        <input type="text" className="border-b-2 border-b-neutral-950 w-[210px] h-8" placeholder="Enter Your Email Address" /> <button type="submit" className="mx-4 text-center border-b-2 border-black h-8 px-0">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <div className="border-t-2 p-8"><p>2022 Meubel House. All rights reverved</p></div>


        </footer>

    )
}

export default Footer