import React from 'react'
import Image from 'next/image'

const Card = (product: { image: string, name: string, amount: string }) => {
    return (
        <div className='flex flex-col w-[287px] h-[372px] justify-center '>
            <div className='w-full h-full flex justify-center items-center'>
                <Image src={`/products/${product.image}`} width={287} height={287} alt='image' />
            </div>

            <h1>{product.name}</h1>
            <h1 className='font-medium text-2xl pt-2'>{product.amount}</h1>
        </div>
    )
}
export default Card