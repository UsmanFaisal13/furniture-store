import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"

export default function Page() {
    return (
        <>
            <Header />
            <Hero name="Checkout" />
            <main className="mb-80 lg:mb-0">
                <section className="w-full px-4 py-8 lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
                    <div className="flex flex-col flex-wrap">
                        <h1 className="font-semibold text-4xl my-16">Billing details</h1>
                        <form className="flex flex-col gap-8">
                            <div className="flex gap-40">
                                <h1 className="font-medium">First Name</h1>
                                <h1 className="font-medium relative right-8 lg:right-0 hidden lg:block">Last Name</h1>
                            </div>
                            <div className="flex flex-wrap gap-8">
                                <input type="text" className="border-[1px] border-[#9f9f9f] lg:w-[211px] h-[75px] rounded-[10px]" />
                                <h1 className="font-medium lg:hidden block">Last Name</h1>
                                <input type="text" className="border-[1px] border-[#9f9f9f] lg:w-[211px] h-[75px] rounded-[10px]" />
                            </div>
                            <label className="font-medium">Company Name</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />
                            <label className="font-medium">Country / Region</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />
                            <label className="font-medium">Street address</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />
                            <label className="font-medium">Town / City</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />
                            <label className="font-medium">Province</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />
                            <label className="font-medium">ZIP code</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />
                            <label className="font-medium">Phone</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />
                            <label className="font-medium">Email address</label>
                            <input type="text" className="border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />

                            <input type="text" placeholder="Additional information" className=" p-6 my-8 border-[1px] border-[#9f9f9f] w-full lg:w-[452px] h-[75px] rounded-[10px]" />


                        </form>

                    </div>
                    <div >
                        <div className="grid grid-cols-2 gap-28 border-b-2 border-[#d9d9d9] pb-8 ">
                            <div className="flex flex-col gap-8">
                                <h1 className="font-semibold text-2xl mt-20">Product</h1>
                                <p className="text-[#9F9F9F]">Asgaard sofa</p>
                                <p>Subtotal</p>
                                <p>Total</p>

                            </div>
                            <div className="flex flex-col gap-8 items-end">
                                <h1 className="font-semibold text-2xl mt-20">Subtotal</h1>
                                <p>Rs. 250,000.00</p>
                                <p>Rs. 250,000.00</p>
                                <h1 className="text-[#B88E2F] font-bold text-2xl">Rs. 250,000.00</h1>


                            </div>
                        </div>
                        <div className="my-8">
                            <h3 className="text-lg font-medium my-4">
                                <li>Direct Bank Transfer</li>
                            </h3>
                            <div className="flex flex-col gap-4">

                                <p className="font-light text-[#9F9F9F] mb-2">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                                <label className="flex items-center mb-2 font-medium text-[#9F9F9F]">
                                    <input type="radio" name="payment-method" className="mr-2 " />
                                    Direct Bank Transfer
                                </label>
                                <label className="flex items-center mb-2 font-medium  text-[#9F9F9F]">
                                    <input type="radio" name="payment-method" className="mr-2" />
                                    Cash on Delivery
                                </label>
                                <p className=" mb-2">
                                    Your personal data will be used to support your experience <br /> throughout this website,
                                    to manage access to your account, and for other purposes described in our <b>privacy policy.</b> </p>
                            </div>
                        </div>

                        <button className="h-[64px] lg:w-[318px] w-full border border-black  py-2 rounded-lg lg:ml-16 "
                        >
                            Place order
                        </button>
                    </div>

                </section >



                <Feature />
            </main>

        </>
    )
};