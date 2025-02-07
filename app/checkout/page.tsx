"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { Product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Feature from "@/app/components/Feature";
import Footer from "@/app/components/Footer";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";




export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        zipCode: false,
        phone: false,
        email: false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory
        ,
        0
    );
    const total = Math.max(subtotal - discount, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            address: !formValues.address,
            city: !formValues.city,
            zipCode: !formValues.zipCode,
            phone: !formValues.phone,
            email: !formValues.email,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = async () => {
        if (validateForm()) {


            const orderData = {

                _type: 'order',
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                email: formValues.email,
                phone: formValues.phone,
                address: formValues.address,
                city: formValues.city,
                zipCode: formValues.zipCode,
                items: cartItems,
                total: total,
                discount: discount,


                cartItems: cartItems.map((item) => ({ _type: 'reference', _ref: item._id })),
                orderDate: new Date().toISOString()
            };
            try {
                await client.create(orderData);
                localStorage.removeItem('appliedDiscount');
                Swal.fire({
                    title: "Order Placed",
                    text: "Your order has been placed successfully",
                    icon: "success"
                }

                ).then(() => {
                    Swal.fire({
                        title: "We'll keep you updated",
                        text: "We'll update you on your order status via email",
                        icon: "info"
                    })

                })

            }







            catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <>
            <Header />
            <main className="mb-80 lg:mb-0">
                <Hero name="Checkout" />
                <div className="px-4 lg:px-32 py-8">
                    <nav className="flex items-center gap-4 mb-8">
                        <Link href="/cart" className="text-[#9F9F9F] hover:text-[#B88E2F]">
                            Cart
                        </Link>
                        <CgChevronRight className="w-4 h-4 text-[#9F9F9F]" />
                        <span>Checkout</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-8">

                        <div className="border border-[#D9D9D9] rounded-[10px] p-6">
                            <h2 className="text-2xl mb-8">Order Summary</h2>
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item._id} className="flex gap-4 pb-4 border-b border-[#D9D9D9]">
                                        <div className="w-32 h-32">
                                            {item.image && (
                                                <Image
                                                    src={urlFor(item.image).url()}
                                                    alt={item.name}
                                                    width={128}
                                                    height={128}
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl">{item.name}</h3>
                                            <p className="text-[#9F9F9F]">
                                                Quantity: {item.inventory}
                                            </p>
                                            <p className="text-[#B88E2F] text-xl">
                                                ${item.price * item.inventory}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 space-y-2">
                                <div className="flex justify-between">
                                    <p>Subtotal:</p>
                                    <p>${subtotal}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Discount:</p>
                                    <p>-${discount}</p>
                                </div>
                                <div className="flex justify-between text-xl font-medium pt-4">
                                    <p>Total:</p>
                                    <p className="text-[#B88E2F]">${total.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-[#D9D9D9] rounded-[10px] p-6">
                            <h2 className="text-2xl mb-8">Billing Information</h2>
                            <div className="space-y-6">
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2">First Name</label>
                                        <input
                                            id="firstName"
                                            className="w-full h-[75px] border-2 border-[#9F9F9F] rounded-[10px] px-4"
                                            placeholder="Enter your first name"
                                            value={formValues.firstName}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.firstName && (
                                            <p className="text-red-500 mt-1">First name is required</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2">Last Name</label>
                                        <input
                                            id="lastName"
                                            className="w-full h-[75px] border-2 border-[#9F9F9F] rounded-[10px] px-4"
                                            placeholder="Enter your last name"
                                            value={formValues.lastName}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.lastName && (
                                            <p className="text-red-500 mt-1">Last name is required</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2">Address</label>
                                        <input
                                            id="address"
                                            className="w-full h-[75px] border-2 border-[#9F9F9F] rounded-[10px] px-4"
                                            placeholder="Enter your address"
                                            value={formValues.address}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.address && (
                                            <p className="text-red-500 mt-1">address is required</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2">City</label>
                                        <input
                                            id="city"
                                            className="w-full h-[75px] border-2 border-[#9F9F9F] rounded-[10px] px-4"
                                            placeholder="Enter your city"
                                            value={formValues.city}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.city && (
                                            <p className="text-red-500 mt-1">city name is required</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2">Zip Code</label>
                                        <input
                                            id="zipCode"
                                            className="w-full h-[75px] border-2 border-[#9F9F9F] rounded-[10px] px-4"
                                            placeholder="Enter your zip code"
                                            value={formValues.zipCode}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.zipCode && (
                                            <p className="text-red-500 mt-1">zip code is required</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2">Phone number</label>
                                        <input
                                            id="phone"
                                            className="w-full h-[75px] border-2 border-[#9F9F9F] rounded-[10px] px-4"
                                            placeholder="Enter your phone number"
                                            value={formValues.phone}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.phone && (
                                            <p className="text-red-500 mt-1">Phone number is required</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2">Email</label>
                                        <input
                                            id="email"
                                            className="w-full h-[75px] border-2 border-[#9F9F9F] rounded-[10px] px-4"
                                            placeholder="Enter your first email"
                                            value={formValues.email}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.email && (
                                            <p className="text-red-500 mt-1">email is required</p>
                                        )}
                                    </div>

                                </div>

                                <button

                                    onClick={handlePlaceOrder}
                                    className="w-full lg:w-[215px] h-16 border border-black rounded-[15px] hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] transition-all"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Feature />
            <Footer />
        </>
    );
};
