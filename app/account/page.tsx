import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"

export default function Page() {
    return (
        <>
            <Header />
            <Hero name="My Account" />
            <main className="mb-80 lg:mb-0">
                <section className="lg:grid lg:grid-cols-2 w-full justify-center items-center gap-32">
                    <div className="flex gap-12 lg:w-[608px] h-[630px] lg:px-48 px-8 flex-col justify-center">
                        <h1 className="font-semibold text-4xl">Log In</h1>
                        <form className="w-full">
                            <h1 className="pb-4 font-medium">Username or email address</h1>
                            <input type="text" className="border-2 border-[#9f9f9f] lg:w-[423px] w-full h-[75px] rounded-[10px]" />
                            <h1 className="py-4 pt-8 font-medium">Password</h1>
                            <input type="password" className="border-2 border-[#9f9f9f] lg:w-[423px] w-full h-[75px] rounded-[10px]" />
                            <div className="flex py-8 gap-4 items-center">
                                <input type="checkbox" className="border-2 border-[#9f9f9f] w-[30px] h-[27px] rounded-[5px]" /><label>Remember me</label>

                            </div>


                            <button className='text-xl w-[215px] h-16 rounded-[15px] border-[1px] border-black'>Log In</button>



                        </form>
                    </div>
                    <div className="flex gap-12 lg:w-[608px] h-[630px] flex-col justify-center px-8 lg:px-0">
                        <h1 className="font-semibold text-4xl">Register</h1>
                        <form className=" flex flex-col pb-4 gap-2">
                            <h1 className="pb-5 font-medium">Email address</h1>
                            <input type="text" className="border-2 border-[#9f9f9f] lg:w-[423px] w-full h-[75px] rounded-[10px]" />
                            <div className="py-4 pt-8 lg:w-[453px] flex flex-col gap-8">
                                <p>A link to set a new password will be sent to your email <br /> address.</p>
                                <p>Your personal data will be used to support your <br /> experience throughout this website,
                                    to manage access <br /> to your account, and for other purposes described in our <br /> <b>privacy policy.</b></p>

                            </div>


                            <button className='text-xl w-[215px] h-16 rounded-[15px] border-[1px] border-black'>Register</button>



                        </form>
                    </div>

                </section>

                <Feature />
            </main>




        </>
    )
};