import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Card from "../components/productCard"
import Link from "next/link"
import { products } from "../productList"

export default function Page() {
    return (
        <>
            <Header />
            <main className="mb-80 lg:mb-0">
                <Hero name="Shop" />

                <section className="grid lg:grid-cols-4 grid-flow-row gap-8 lg:px-32 py-4 items-center justify-center lg:justify-start">
                    {products.map((product, index) => (
                        <Link href={`/${product.id}`} key={index}>
                            <Card image={product.image} name={product.name} amount={product.price} />
                        </Link>
                    ))}

                </section>

                <Feature />
            </main>





        </>
    )
};