'use client';
import { addToCart } from "../actions/actions"
import { Product } from "@/types/products"
import Swal from 'sweetalert2'

export function CartButton({ product }: { product: Product }) {
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        Swal.fire({
            position: 'top',
            title: `${product.name} added to cart`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
        addToCart(product)

    }
    return (

        <button className='text-xl w-[215px] h-16 rounded-[15px] border-[1px] border-black' onClick={handleAddToCart}>Add to cart</button>

    )

}
