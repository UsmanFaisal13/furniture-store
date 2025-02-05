import Header from "../components/Header"
import Image from "next/image"
import Card from "../components/productCard"
import Link from "next/link"
import { products } from "../productList"


export default function Page({ params }: { params: { product: string } }) {
    const product = products.find(p => p.id === params.product);
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <>
            <Header />

            <main className='flex flex-col gap-48 lg:gap-0 mb-80 lg:mb-0'>
                <section className="h-[100px] w-full flex mt-4 flex-wrap items-center lg:gap-12 gap-6 lg:px-32">
                    <h1 className="text-[#9f9f9f]">Home</h1>
                    <b>&gt;</b>
                    <h1 className="text-[#9f9f9f]">Shop</h1>
                    <b>&gt;</b>
                    <svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2" />
                    </svg>
                    <h1>{product.name}</h1>
                </section>

                <section className="flex flex-wrap w-full h-[820px] mb-[600px] lg:mb-0 lg:px-16 lg:py-8">
                    <div className="lg:w-[76px] w-full h-[76px] lg:h-[416px] lg:px-2 flex lg:flex-col items-center gap-4 lg:mx-4 my-4 lg:my-0">
                        <div className="w-[76px] h-[80px] flex items-center bg-[#FFF9E5]">
                            <Image src={`/${product.image}`} width={83} height={55} alt={'sofa'}></Image>
                        </div>
                        <div className="w-[76px] h-[80px] flex items-center bg-[#FFF9E5]">
                            <Image src={`/${product.image}`} width={83} height={55} alt={'sofa'}></Image>
                        </div>
                        <div className="w-[76px] h-[80px] flex items-center bg-[#FFF9E5]">
                            <Image src={`/${product.image}`} width={83} height={55} alt={'sofa'}></Image>
                        </div>
                        <div className="w-[76px] h-[80px] flex items-center bg-[#FFF9E5]">
                            <Image src={`/${product.image}`} width={83} height={55} alt={'sofa'}></Image>
                        </div>
                    </div>





                    <div className="w-[451px] h-[450px] flex items-center bg-[#FFF9E5]">
                        <Image src={`/${product.image}`} width={481} height={391} alt={'sofa'}></Image>
                    </div>
                    <div className="flex flex-col gap-4 lg:px-8 py-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[32px]">{product.name}</h1>
                            <h1 className="text-2xl text-[#9f9f9f]">{product.price}</h1>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-3">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFDA5B" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFDA5B" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFDA5B" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFDA5B" />
                                </svg>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.1563 6.0125L0.800049 6.9375L5.40005 11.4188L4.31255 17.75L10 14.7625V0.25L7.1563 6.0125Z" fill="#FFDA5B" />
                                </svg>

                            </div>
                            <svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2" />
                            </svg>
                            <h1 className="font-light text-[13px] text-[#9f9f9f]">5 Customer Review</h1>
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[424px]">
                            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#9f9f9f]">Size</h1>
                            <div className="flex gap-5">
                                <button className='w-[30px] h-[30px] bg-[#FBEBB5] text-[13px] flex justify-center items-center rounded-[5px]'>L</button>
                                <button className='w-[30px] h-[30px] bg-[#FAF4F4] text-[13px] flex justify-center items-center rounded-[5px]'>XL</button>
                                <button className='w-[30px] h-[30px] bg-[#FAF4F4] text-[13px] flex justify-center items-center rounded-[5px]'>XS</button>


                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#9f9f9f]">Color</h1>
                            <div className="flex gap-5">
                                <button className='w-[30px] h-[30px] bg-[#816DFA] text-[13px] flex justify-center items-center rounded-full'></button>
                                <button className='w-[30px] h-[30px] bg-[#000000] text-[13px] flex justify-center items-center rounded-full'></button>
                                <button className='w-[30px] h-[30px] bg-[#CDBA7B] text-[13px] flex justify-center items-center rounded-full'></button>


                            </div>
                        </div>
                        <div className="flex gap-4 my-8">
                            <div className="grid grid-cols-3 gap-2 border rounded-[10px] border-[#9F9F9F] h-16 w-[123px] justify-center items-center ">
                                <button>-</button>
                                <input type="number" name="quantity" defaultValue="1" min="1" className="text-center font-medium pl-3 " />
                                <button>+</button>

                            </div>
                            <div className="flex items-center">

                                <button className='text-xl w-[215px] h-16 rounded-[15px] border-[1px] border-black'>Add to cart</button>

                            </div>


                        </div>
                        <div className="flex items-center gap-4 border-t border-[#D9D9D9] py-8 my-8">
                            <div className="flex flex-col gap-5 text-[#9F9F9F]">
                                <h1>SKU</h1>
                                <h1>Category</h1>
                                <h1>Tags</h1>
                                <h1>Share</h1>
                            </div>
                            <div className="flex flex-col gap-5 text-[#9F9F9F]">
                                <h1>: SS001</h1>
                                <h1>: Sofas</h1>
                                <h1>: Sofa, Chair, Home, Shop</h1>
                                <h1 className="flex items-center">:
                                    <div className="flex gap-4 items-center px-1">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black" />
                                        </svg>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 2.36501C0.833252 1.95879 0.994624 1.5692 1.28187 1.28196C1.56911 0.994717 1.9587 0.833346 2.36492 0.833346H17.6333C17.8346 0.833017 18.034 0.872398 18.22 0.949234C18.4061 1.02607 18.5752 1.13885 18.7176 1.28113C18.8601 1.4234 18.973 1.59237 19.0501 1.77835C19.1271 1.96434 19.1667 2.1637 19.1666 2.36501V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5754 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5755 1.02653 18.4065 0.949604 18.2206C0.87268 18.0347 0.833143 17.8354 0.833252 17.6342V2.36501ZM8.08992 7.82335H10.5724V9.07001C10.9308 8.35335 11.8474 7.70835 13.2249 7.70835C15.8658 7.70835 16.4916 9.13585 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82335ZM3.50659 16.4925H6.17992V7.70835H3.50659V16.4917V16.4925ZM6.56242 4.84335C6.56746 5.07224 6.52673 5.29983 6.44262 5.51277C6.35851 5.72571 6.23271 5.91971 6.07261 6.08337C5.91251 6.24704 5.72133 6.37707 5.5103 6.46585C5.29926 6.55463 5.07262 6.60036 4.84367 6.60036C4.61472 6.60036 4.38808 6.55463 4.17704 6.46585C3.966 6.37707 3.77483 6.24704 3.61473 6.08337C3.45463 5.91971 3.32883 5.72571 3.24472 5.51277C3.16061 5.29983 3.11988 5.07224 3.12492 4.84335C3.13481 4.39406 3.32024 3.9665 3.64149 3.65225C3.96274 3.338 4.39427 3.16203 4.84367 3.16203C5.29307 3.16203 5.7246 3.338 6.04585 3.65225C6.3671 3.9665 6.55253 4.39406 6.56242 4.84335Z" fill="black" />
                                        </svg>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z" fill="black" />
                                        </svg>
                                        <div className="lg:pl-64 pl-28">

                                            <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.3454 4.0199L22.3451 4.01948C21.6808 3.11213 20.9059 2.40248 20.068 1.91945L20.0672 1.91902C19.1994 1.41671 18.2785 1.16479 17.356 1.16775L17.3544 1.16776C16.0603 1.16775 14.7804 1.66041 13.65 2.62125L13.65 2.62126C13.3793 2.85137 13.1212 3.10484 12.8759 3.38207L12.5014 3.80527L12.127 3.38207C11.8817 3.10484 11.6236 2.85137 11.3529 2.62126L11.3529 2.62125C10.2225 1.66041 8.94259 1.16775 7.64844 1.16775C6.71383 1.16775 5.80421 1.41629 4.9356 1.91902L4.93498 1.91938C4.09406 2.40448 3.32529 3.10849 2.65762 4.01964L2.65708 4.02037C1.99329 4.92279 1.45757 6.00566 1.08544 7.21026L22.3454 4.0199ZM22.3454 4.0199C23.0086 4.9237 23.5443 6.00664 23.9176 7.21071L22.3454 4.0199ZM6.2519 24.8117L6.25195 24.8118C7.58046 26.5212 8.9036 27.9676 9.90881 28.9987C10.4112 29.514 10.8334 29.9249 11.1363 30.2122C11.2878 30.3559 11.4093 30.4686 11.4958 30.5479C11.5392 30.5875 11.5736 30.6187 11.5986 30.6412L11.6285 30.6678L11.6373 30.6756C11.639 30.6771 11.64 30.6779 11.6403 30.6782L11.6404 30.6783L11.6482 30.685L11.6481 30.6851L12.333 31.2971C12.3331 31.2972 12.3333 31.2973 12.3334 31.2974C12.4037 31.3598 12.4617 31.3734 12.5 31.3734C12.5382 31.3734 12.5963 31.3598 12.6666 31.2974C12.6667 31.2973 12.6668 31.2972 12.667 31.2971L13.3519 30.6851L13.3519 30.685C13.4542 30.5937 16.0859 28.2335 18.7481 24.8117C20.3514 22.7493 21.6362 20.7228 22.5672 18.789C23.155 17.5664 23.6151 16.3611 23.9301 15.2052L23.9303 15.2043C24.3103 13.82 24.5 12.4654 24.5 11.1714V11.1704C24.5028 9.79608 24.3044 8.4634 23.9176 7.21074L6.2519 24.8117ZM6.2519 24.8117C4.64859 22.7493 3.36376 20.7228 2.4328 18.789M6.2519 24.8117L2.4328 18.789M2.4328 18.789C1.84537 17.5671 1.38779 16.3616 1.06962 15.2043L2.4328 18.789ZM0.5 11.1714C0.5 9.79625 0.698502 8.46309 1.08543 7.21029L1.06956 15.2041C0.689659 13.8199 0.5 12.4654 0.5 11.1714Z" stroke="#FF0000" />
                                            </svg>

                                        </div>

                                    </div>


                                </h1>
                            </div>


                        </div>


                    </div>

                </section>
                <section className=' border-t border-[#d9d9d9] flex w-full h-[744px] bg-[#ffffff] flex-col items-center mb-[600px] lg:mb-16 lg:mt-32'>
                    <div className="flex pt-16 gap-8 flex-wrap" >
                        <h1 className='text-2xl'>Description</h1>
                        <h1 className='text-2xl text-[#9f9f9f]'>Additional Information</h1>
                        <h1 className='text-2xl text-[#9f9f9f]'>Reviews [5]</h1>
                    </div>
                    <div className="flex flex-col pt-16 gap-8" >

                        <p className=' text-[#9f9f9f] lg:w-[1026px]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                        <p className=' text-[#9f9f9f] lg:w-[1026px]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    </div>
                    <div className="flex pt-16 gap-8 flex-wrap" >
                        <div className="lg:w-[605px] h-[348px] flex items-center justify-center  bg-[#FFF9E5]">
                            <Image src={'/cloud-sofa-3.png'} width={551} height={391} alt={'sofa'}></Image>
                        </div>
                        <div className="lg:w-[605px] h-[348px] flex items-center justify-center bg-[#FFF9E5]">
                            <Image src={'/cloud-sofa-4.png'} width={551} height={391} alt={'sofa'}></Image>
                        </div>



                    </div>



                </section>
                <section className='border-t border-[#d9d9d9] flex w-full h-[877px] bg-[#ffffff] flex-col items-center mb-[1000px] lg:mb-0'>
                    <h1 className='font-medium text-4xl pt-16'>Related Products</h1>
                    <div className='flex items-center justify-center gap-12 pt-16 flex-wrap'>
                        <Link href={'/1'}><Card image='sofa_2.png' name='Trenton modular sofa_3' amount='Rs. 25,000.00' /></Link>
                        <Link href={'/2'}><Card image='dinner-table.png' name='Granite dining table with dining chair' amount='Rs. 25,000.00' /></Link>
                        <Link href={'/3'}><Card image='stool.png' name='Outdoor bar table and stool' amount='Rs. 25,000.00' /></Link>
                        <Link href={'/4'}><Card image='mirror.png' name='Plain console with teak mirror' amount='Rs. 25,000.00' /></Link>




                    </div>
                    <Link href={'/'}><button className='relative lg:top-24 text-xl font-medium h-16 border-b-2 border-black'>View More</button></Link>


                </section>

            </main >









        </>
    )
};