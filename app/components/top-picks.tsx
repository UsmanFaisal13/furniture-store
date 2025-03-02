'use client'

import { four } from "@/sanity/lib/queries"
import { useEffect, useState } from "react"
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Link from "next/link"
import ProductCard from "./productCard"

import { client } from "@/sanity/lib/client"
interface Product {
    _id: string
    name: string
    price: number
    image: SanityImageSource
    slug: {
        current: string
    }
}


const Featured = () => {

    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct() {
            const fetchProducts: Product[] = await client.fetch(four)
            setProduct(fetchProducts)
        };
        fetchproduct()
    }, [])
    return (
        <>
            <h1 className='font-medium text-4xl pt-16 pb-8'>Top Picks For You</h1>
            <p className='text-[#9f9f9f] font-medium text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className='flex items-center justify-center gap-2 pt-16 flex-wrap'>
                {product.map((product) => (
                    <Link href={`/product/${product.slug.current}`} key={product._id}>
                        <ProductCard
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    </Link>
                ))}

                <br />
            </div>

        </>
    )
}

export default Featured