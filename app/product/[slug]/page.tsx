
import Image from "next/image"
import Header from "@/app/components/Header"

import { groq } from "next-sanity"
import { client } from '@/sanity/lib/client'
import { Metadata } from "next"

import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image"

import { CartButton } from "@/app/components/Addtocart"
import { Product } from "@/types/products"






interface ProductPageProps {
    params: Promise<{ slug: string }> // Wrap params in Promise
}
async function getProduct(slug: string): Promise<Product | null> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        _type,
        name,
        image,
        price,
        discountPercentage,
        description,
        "slug": slug.current,
        category,
        stockLevel,
        rating,
       
        tags
      }`,
        { slug }
    )
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { slug } = await params
    const product = await getProduct(slug)

    if (!product) {
        return {
            title: 'Product Not Found',
        }
    }

    return {
        title: product.name,
        description: product.description,
    }
}





export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params // Resolve the promise to get slug
    const product = await getProduct(slug)

    if (!product) {
        notFound()
    }
    return (
        <>
            <Header />

            <main className='flex flex-col gap-16 lg:gap-0'>
                <section className=" w-full flex mt-4 flex-wrap items-center lg:gap-12 gap-6 lg:px-32">
                    <h1 className="text-[#9f9f9f]">Home</h1>
                    <b>&gt;</b>
                    <h1 className="text-[#9f9f9f]">Shop</h1>
                    <b>&gt;</b>
                    <svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" x2="1" y2="37" stroke="#9F9F9F" strokeWidth="2" />
                    </svg>
                    <h1>{product.name}</h1>
                </section>

                <section className="flex flex-wrap w-full h-[820px] mb-[600px] lg:mb-0 lg:px-16 lg:py-8">






                    <div className="w-[451px] h-[450px] flex items-center bg-[#FFF9E5]">
                        {product.image && (
                            <Image
                                src={urlFor(product.image).width(400).height(400).url()}
                                alt={product.name}
                                width={400}
                                height={400}

                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-4 lg:px-8 py-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[32px] w-80">{product.name}</h1>
                            <h1 className="text-2xl text-[#9f9f9f]">$ {product.price}</h1>
                        </div>
                        {/* <div className="flex items-center gap-6">

                            <svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2" />
                            </svg>
                            <h1 className="font-light text-[13px] text-[#9f9f9f]">Customer Review</h1>

                        </div> */}
                        <div className="flex flex-col gap-2 lg:w-[424px]">
                            <p>
                                {product.description}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[424px]">
                            <p>
                                <span className="font-bold">{product.stockLevel}</span> in stock
                            </p>
                        </div>


                        <div className="flex gap-4 my-8">
                            {/* <div >

                                <input type="number" name="quantity" defaultValue="1" min="1" className=" border rounded-[10px] border-[#9F9F9F] font-medium h-16 text-center w-16 " />


                            </div> */}
                            <div className="flex items-center">
                                <CartButton product={product} />

                            </div>


                        </div>
                        <div className="flex items-center gap-4 border-t border-[#D9D9D9] py-8 mb-32">
                            <div className="flex flex-col gap-5 text-[#9F9F9F]">
                                <h1>SKU</h1>
                                <h1>Category</h1>
                                <h1>Tags</h1>
                                <h1>Share</h1>
                            </div>
                            <div className="flex flex-col gap-5 text-[#9F9F9F]">
                                <h1>: SS001</h1>
                                <h1>: Sofa </h1>
                                <h1>: Sofa, Chair, Home, Shop</h1>
                                <h1 className="flex items-center">:
                                    <div className="flex gap-4 items-center px-1">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black" />
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.833252 2.36501C0.833252 1.95879 0.994624 1.5692 1.28187 1.28196C1.56911 0.994717 1.9587 0.833346 2.36492 0.833346H17.6333C17.8346 0.833017 18.034 0.872398 18.22 0.949234C18.4061 1.02607 18.5752 1.13885 18.7176 1.28113C18.8601 1.4234 18.973 1.59237 19.0501 1.77835C19.1271 1.96434 19.1667 2.1637 19.1666 2.36501V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5754 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5755 1.02653 18.4065 0.949604 18.2206C0.87268 18.0347 0.833143 17.8354 0.833252 17.6342V2.36501ZM8.08992 7.82335H10.5724V9.07001C10.9308 8.35335 11.8474 7.70835 13.2249 7.70835C15.8658 7.70835 16.4916 9.13585 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82335ZM3.50659 16.4925H6.17992V7.70835H3.50659V16.4917V16.4925ZM6.56242 4.84335C6.56746 5.07224 6.52673 5.29983 6.44262 5.51277C6.35851 5.72571 6.23271 5.91971 6.07261 6.08337C5.91251 6.24704 5.72133 6.37707 5.5103 6.46585C5.29926 6.55463 5.07262 6.60036 4.84367 6.60036C4.61472 6.60036 4.38808 6.55463 4.17704 6.46585C3.966 6.37707 3.77483 6.24704 3.61473 6.08337C3.45463 5.91971 3.32883 5.72571 3.24472 5.51277C3.16061 5.29983 3.11988 5.07224 3.12492 4.84335C3.13481 4.39406 3.32024 3.9665 3.64149 3.65225C3.96274 3.338 4.39427 3.16203 4.84367 3.16203C5.29307 3.16203 5.7246 3.338 6.04585 3.65225C6.3671 3.9665 6.55253 4.39406 6.56242 4.84335Z" fill="black" />
                                        </svg>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z" fill="black" />
                                        </svg>


                                    </div>


                                </h1>
                            </div>


                        </div>


                    </div>

                </section>


            </main >









        </>
    )
};