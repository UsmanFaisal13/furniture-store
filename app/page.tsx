import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Featured from './components/top-picks';




export default function Home() {

  return (
    <>
      <header className="grid lg:grid-cols-3 w-full h-[100px] bg-[#FBEBB5]">
        <Navbar />
        <div className='hidden lg:block'></div>

        <div className="h-full hidden lg:flex justify-center items-center">
          <nav>
            <ul className="flex lg:gap-16 gap-4 justify-center items-center font-medium text-base">
              <Link href={'/'}>Home</Link>
              <Link href={'/shop'}>Shop</Link>
              <Link href={'/about'}>About</Link>
              <Link href={'/contact'}>Contact</Link>
            </ul>
          </nav>
        </div>
        <div className="h-full hidden lg:flex justify-center items-center">
          <nav>
            <ul className="flex gap-10 justify-center items-center">
              <Link href={'/cart'}><Image src={'/icons/cart.svg'} width={28} height={28} alt='image' /></Link>

            </ul>
          </nav>

        </div>

      </header>
      <main className='flex flex-col  lg:gap-0 mb-80 lg:mb-0'>

        <section className='w-full lg:h-[600px] h-[400px] bg-[#FBEBB5] flex justify-center   lg:pl-14 pl-4  '>
          <div className='flex flex-col gap-8 justify-center items-start font-medium'>
            <h1 className='text-[64px] lg:w-[500px]  font-medium'>High Quality Furnitures</h1>
            <button className="hover:text-[#555555] hover:border-b-[#555555] transition-all border-b-2 border-b-neutral-950 h-8">Shop Now</button>
          </div>

          <Image src={'/products/rocket.png'} width={500} height={500} alt='image' className='lg:block md:hidden hidden' />


        </section>
        <section className='flex w-full h-[877px] bg-[#ffffff] flex-col items-center  mb-[1000px] lg:mb-0 md:mb-[300px] sm:mb-[300px]'>
          <Featured />
          <Link href={'/shop'}><button className='hover:text-[#555555] hover:border-b-[#555555] transition-all relative lg:top-12 text-xl font-medium h-16 border-b-2 border-black'>View More</button></Link>

        </section>



        <section className='flex w-full  pb-4 bg-[#FFF9E5] justify-center lg:gap-32 flex-wrap mt-48 lg:mt-0 md:mt-0 sm:mt-0'>
          <Image src={'/products/asgaard.png'} width={700} height={100} alt='image' />
          <div className='flex flex-col gap-6 items-center justify-center'>
            <h1 className='text-2xl font-medium'>New Arrivals</h1>
            <h1 className='text-5xl font-bold pb-8 text-center'>Asgaard sofa</h1>
            <Link href={'/shop'}><button className='hover:text-[#555555] hover:border-b-[#555555] transition-all border-2 border-black w-64 h-16 font-medium text-xl'>Order Now</button></Link>
          </div>

        </section>

        <section className='flex flex-col w-full h-[844px] bg-[#FFFfff] items-center mb-[800px] lg:mb-0 md:mb-0 sm:mb-[300px] mt-[100px]'>
          <h1 className='font-medium text-4xl pt-16 pb-8'>Our Blogs</h1>
          <p className='text-[#9f9f9f] font-medium text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          <div className='flex justify-center lg:gap-12 gap-20 pt-16 items-center flex-wrap'>
            <div className='flex flex-col w-72 h-96 justify-center items-center'>
              <Image src={'/blog-1.png'} width={400} height={400} alt='blog' />
              <h1 className='pt-8'>Going all-in with millennial design</h1>
              <Link href={'/about'}><button className='hover:text-[#555555] hover:border-b-[#555555] transition-all text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
              <Image src={'/icons/time.png'} width={200} height={100} className='pt-4' alt='blog' />
            </div>
            <div className='flex flex-col w-72 h-96 justify-center items-center'>
              <Image src={'/blog-2.png'} width={400} height={400} alt='blog' />
              <h1 className='pt-8'>Going all-in with millennial design</h1>
              <Link href={'/about'}><button className='hover:text-[#555555] hover:border-b-[#555555] transition-all text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
              <Image src={'/icons/time.png'} width={200} height={100} className='pt-4' alt='blog' />
            </div>
            <div className='flex flex-col w-72 h-96 justify-center items-center'>
              <Image src={'/blog-3.png'} width={400} height={400} alt='blog' />
              <h1 className='pt-8'>Going all-in with millennial design</h1>
              <Link href={'/about'}><button className='hover:text-[#555555] hover:border-b-[#555555] transition-all text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
              <Image src={'/icons/time.png'} width={200} height={100} className='pt-4' alt='icon' />
            </div>

          </div>
          <Link href={'/'}><button className='hover:text-[#555555] hover:border-b-[#555555] transition-all relative top-32 text-xl font-medium h-16 border-b-2 border-black'>View All Post</button></Link>


        </section>
        <section className='flex flex-col w-full h-[450px] justify-center items-center gap-8 bg-bg-pattern bg-cover bg-center bg-no-repeat mt-48 lg:mt-0'>
          <h1 className='font-bold lg:text-6xl text-5xl text-center'>Our Instagram</h1>
          <p className=' text-xl'>Follow our store on Instagram</p>
          <Link href={'/'}><button className='hover:text-[#555555] hover:border-b-[#555555] transition-all text-xl w-64 h-16 rounded-[50px] drop-shadow-md bg-[#FAF4F4]'>Follow Us</button></Link>

        </section>
      </main>
      <Footer />


    </>
  );

}
