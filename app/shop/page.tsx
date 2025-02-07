
"use client"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import ProductCard from "../components/productCard"
import { useEffect, useState } from "react"

import { client } from "@/sanity/lib/client"
import { allProducts } from "@/sanity/lib/queries"
import Link from "next/link"
import { SanityImageSource } from '@sanity/image-url/lib/types/types'


interface Product {
    _id: string
    name: string
    price: number
    image: SanityImageSource
    slug: {
        current: string
    }
}


export default function Page() {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct() {
            const fetchProducts: Product[] = await client.fetch(allProducts)
            setProduct(fetchProducts)
        };
        fetchproduct()
    }, [])



    return (
        <>
            <Header />
            <main className="mb-80 lg:mb-0">
                <Hero name="Shop" />
                <section className="grid lg:grid-cols-4 grid-flow-row gap-32 lg:px-16  py-4 items-center justify-center lg:justify-start lg:mr-16">
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
                </section>
                <Feature />
            </main>
        </>
    )
}