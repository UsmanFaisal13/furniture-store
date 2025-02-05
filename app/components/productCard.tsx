import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface ProductCardProps {
    _id: string
    name: string
    price: number
    image: any
};

const ProductCard = ({ name, price, image }: ProductCardProps) => {
    return (
        <div className='flex flex-col w-[287px] h-[372px] justify-center'>
            <div className='w-full h-full flex justify-center items-center'>
                <Image
                    src={urlFor(image).url()}
                    width={287}
                    height={287}
                    alt={name}
                    className='h-[287px] w-auto rounded-lg '
                />
            </div>
            <h1>{name}</h1>
            <h1 className='font-medium text-2xl pt-2'>${price}</h1>
        </div>
    )
}

export default ProductCard