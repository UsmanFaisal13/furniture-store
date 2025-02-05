import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <Header />
            <Hero name="Cart" />
            <main className=" mb-80 lg:mb-0">
                <section className="w-full py-8 w-6xl mx-auto  ">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 "><div className="md:col-span-2 rounded-lg lg:p-6 flex flex-col overflow-x-auto">
                        <table className="w-full text-left block md:table">
                            <thead className="block md:table-header-group ">
                                <tr className="bg-[#FFF9E5]  block md:table-row">
                                    <th className="py-2  lg:text-center font-medium  block md:table-cell">Product</th>
                                    <th className="py-4 font-medium block md:table-cell">Price</th>
                                    <th className="py-2 font-medium block md:table-cell">Quantity</th>
                                    <th className="py-2  font-medium block md:table-cell">Subtotal</th>
                                    <th className="block md:table-cell"></th>
                                </tr>
                            </thead>
                            <tbody className="block md:table-row-group">
                                <tr className="block md:table-row">
                                    <td className="py-4 px-4 lg:flex items-center  table-cell">
                                        <Image
                                            src="/products/asgaard.png"
                                            height={100}
                                            width={100}
                                            alt="Asgaard sofa"
                                            className="w-[106px] h-[106px] rounded-md mr-4  bg-[#FBEBB5]"
                                        />
                                        <h1 className="text-[#9f9f9f]">Asgaard sofa</h1>
                                    </td>
                                    <td className="py-4 px-4 text-[#9f9f9f] block md:table-cell">Rs. 250,000.00</td>
                                    <td className="py-4 px-4 block md:table-cell">
                                        <input
                                            type="number"
                                            className="w-8 h-8 border border-gray-300 rounded-lg"
                                        />
                                    </td>
                                    <td className="py-4 px-4 block md:table-cell">Rs. 250,000.00</td>
                                    <td className="py-4 px-4 block md:table-cell">
                                        <button>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z" fill="#FBEBB5" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                        <div className="bg-yellow-50 rounded-lg p-6 lg:w-[393px] h-[390px] mx-8 lg:mx-0">
                            <h2 className="text-xl font-semibold mb-24 relative lg:left-28">Cart Totals</h2>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">Subtotal</span>
                                <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg mb-4">
                                <span>Total</span>
                                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className=" my-6 h-[64px] w-[205px] border rounded-lg">
                                    <Link href="/checkout">Check Out</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <Feature />
            </main>




        </>
    )
};