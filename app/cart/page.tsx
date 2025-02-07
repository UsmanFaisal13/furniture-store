"use client";

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import {
    getCartItems,
    removeFromCart,
    updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Feature from "../components/Feature";
import Hero from "../components/Hero";

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire(
                    "Removed!",
                    "Item has been removed from your cart.",
                    "success"
                );
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
            handleQuantityChange(id, product.inventory + 1);
        }
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1) {
            handleQuantityChange(id, product.inventory - 1);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.inventory,
            0
        );
    };
    const router = useRouter();
    const handleProceed = () => {
        Swal.fire({
            title: "Processing your order...",
            text: "Please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    "Success!",
                    "Your order has been successfully processed!",
                    "success"
                );
                router.push("/checkout");

                setCartItems([]);
            }
        });
    };
    return (
        <>
            <Header />
            <main className="mb-80 lg:mb-0">
                <Hero name="Cart" />
                <div className="px-4 lg:px-32 py-8">
                    <div className="space-y-4 lg:space-y-8">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-4 lg:p-6 border border-[#D9D9D9] rounded-[10px]"
                                >
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 w-full lg:w-auto">
                                        {item.image && (
                                            <Image
                                                src={urlFor(item.image).url()}
                                                className="w-full lg:w-32 h-48 lg:h-32 object-cover rounded-lg"
                                                alt={item.name}
                                                width={500}
                                                height={500}
                                            />
                                        )}
                                        <div className="flex flex-col gap-2 lg:gap-4 w-full lg:w-auto">
                                            <h2 className="text-xl lg:text-2xl">{item.name}</h2>
                                            <p className="text-[#9F9F9F] text-lg lg:text-xl">$ {item.price}</p>
                                            <div className="flex items-center gap-4 mt-2 lg:mt-0">
                                                <button
                                                    onClick={() => handleDecrement(item._id)}
                                                    className="w-8 h-8 border border-[#9F9F9F] rounded-md"
                                                >
                                                    -
                                                </button>
                                                <span>{item.inventory}</span>
                                                <button
                                                    onClick={() => handleIncrement(item._id)}
                                                    className="w-8 h-8 border border-[#9F9F9F] rounded-md"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(item._id)}
                                        className="text-[#B88E2F] hover:text-red-600 mt-4 lg:mt-0"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-[#9F9F9F] text-center text-lg lg:text-xl">Your cart is empty.</p>
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div className="mt-8 lg:mt-16 flex flex-col gap-4 lg:gap-8 items-center lg:items-end">
                            <div className="flex gap-16 lg:gap-32">
                                <h2 className="text-xl lg:text-2xl">Total:</h2>
                                <p className="text-xl lg:text-2xl text-[#B88E2F]">
                                    ${calculateTotal().toFixed(2)}
                                </p>
                            </div>
                            <button
                                type="submit"
                                onClick={handleProceed}
                                className="w-full lg:w-[215px] h-12 lg:h-16 border border-black rounded-[15px] hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] transition-all"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
                <Feature />
            </main>
            <Footer />
        </>
    )
};

export default CartPage;