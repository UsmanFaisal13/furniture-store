import React from 'react'
import Image from 'next/image'

const Hero = (pages: {
    name: string
}
) => {
    return (
        <section className='w-full h-[316px] bg-[#FBEBB5] flex flex-col justify-center items-center bg-[url(/images/banner.png)] bg-cover bg-no-repeat bg-opacity-50'>
            <Image src={'/icons/logo.png'} width={77} height={77} alt='logo'></Image>
            <h1 className='text-5xl font-medium'>{pages.name}</h1>

            <h2 className='pt-4'><span className='font-medium'>Home &gt;</span><span className='font-light'> {pages.name}</span></h2>




        </section>

    )
}

export default Hero 