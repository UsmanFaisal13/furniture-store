import React from 'react'

const Feature = () => {
    return (
        <section className='grid lg:grid-cols-3 w-full lg:h-[300px] h-[600px] justify-center items-center bg-[#FAF4F4]'>
            <div className='flex flex-col justify-center px-16'>
                <h1 className='font-medium text-[32px]'>Free Delivery</h1>
                <p className='text-[#9f9f9f]'>For all oders over $50, consectetur <br /> adipim scing elit.</p>
            </div>
            <div className='flex flex-col justify-center px-16'>
                <h1 className='font-medium text-[32px]'>90 Days Return</h1>
                <p className='text-[#9f9f9f]'>If goods have problems, consectetur <br /> adipim scing elit.</p>
            </div>
            <div className='flex flex-col justify-center px-16'>
                <h1 className='font-medium text-[32px]'>Secure Payment</h1>
                <p className='text-[#9f9f9f]'>100% secure payment, consectetur <br /> adipim scing elit.</p>
            </div>
        </section>
    )
}

export default Feature