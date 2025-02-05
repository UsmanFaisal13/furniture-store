import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Header />
            <main className="w-full mb-80 lg:mb-0">
                <Hero name="Contact" />
                <section className="flex flex-col gap-4 justify-center items-center">
                    <h1 className='font-semibold text-center lg:text-left text-4xl pt-16'>Get In Touch With Us</h1>
                    <p className='text-[#9f9f9f] font-medium text-center'>For More Information About Our Product & Services.
                        Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out.
                        Do Not Hesitate!</p>
                    <div className="pt-16 grid lg:grid-cols-2">
                        <div className="flex flex-col gap-12 pt-8 lg:items-start items-center">
                            <div className="flex gap-6">
                                <Image src={'/icons/map.svg'} width={22} height={28.18
                                } alt={'map'} className="mb-16"></Image>
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-medium py-2">Address</h1>
                                    <p>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
                                </div>

                            </div>
                            <div className="flex gap-6">
                                <Image src={'/icons/phone.svg'} width={22} height={28.18
                                } alt={'map'} className="mb-12"></Image>
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-medium py-2">Phone</h1>
                                    <p>Mobile: +(84) 546-6789 <br />
                                        Hotline: +(84) 456-6789</p>
                                </div>

                            </div>
                            <div className="flex gap-6">
                                <Image src={'/icons/clock_2.svg'} width={22} height={28.18
                                } alt={'map'} className="mb-12"></Image>
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-medium py-2">Working Time</h1>
                                    <p>Monday-Friday: 9:00 - 22:00 <br />
                                        Saturday-Sunday: 9:00 - 21:00</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <form className="lg:w-full flex flex-col gap-4">
                                <h1 className=" pt-8 font-medium">Your name</h1>
                                <input type="text" className="border-2 border-[#9f9f9f] lg:w-[527px] w-80 h-[75px] rounded-[10px]" />
                                <h1 className="pt-8 font-medium">Email Address</h1>
                                <input type="text" className="border-2 border-[#9f9f9f] lg:w-[527px] w-80 h-[75px] rounded-[10px]" />
                                <h1 className="pt-8 font-medium">Subject</h1>
                                <input type="text" className="border-2 border-[#9f9f9f] lg:w-[527px] w-80 h-[75px] rounded-[10px]" />
                                <h1 className="pt-8 font-medium">Message</h1>
                                <input type="text" className="border-2 border-[#9f9f9f] lg:w-[527px] w-80 h-[120px] rounded-[10px]" />
                                <button className='my-16 text-xl w-[215px] h-12 rounded-[15px] border-[1px] border-black'>Submit</button>



                            </form>
                        </div>

                    </div>




                </section>
                <Feature />
            </main>




        </>
    )
};