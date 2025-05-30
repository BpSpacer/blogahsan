"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import logo from '@/public/logo-dark.png';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!email) {
            setError('Email is required.');
            return;
        }

        // Just simulate success (without Sanity)
        setSuccess(true);
        setEmail('');
    };

    return (
        <section className="py-10 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-8">
                    {/* Brand Info */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <Image src={logo} alt="Ads by Ahsan logo" width={100} height={100} className="h-10 w-10" />
                        <p className="text-sm sm:text-base leading-relaxed mt-4 sm:mt-7">
                            Empowering creators to launch blogs effortlessly and monetize their content through Content.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            {/* Social Links */}
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100012592726188" className="flex items-center justify-center transition-all duration-200 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ahsankamal.ai/" className="flex items-center justify-center transition-all duration-200 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest uppercase">Company</p>
                        <ul className="mt-6 space-y-4">
                            <li><Link href="/security/about-us" className="flex text-base hover:text-primary">About</Link></li>
                            <li><Link href="/security/contact-us" className="flex text-base hover:text-primary">Contact</Link></li>
                            <li><Link href="/security/disclaimer" className="flex text-base hover:text-primary">Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest uppercase">Help</p>
                        <ul className="mt-6 space-y-4">
                            <li><a href="/security/dmca" className="flex text-base hover:text-primary">DMCA</a></li>
                            <li><a href="/security/terms" className="flex text-base hover:text-primary">Terms & Conditions</a></li>
                            <li><a href="/security/privacy-policy" className="flex text-base hover:text-primary">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Subscription Form */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest uppercase">Subscribe us</p>
                        <form onSubmit={handleSubmit} className="mt-6">
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full p-4 transition-all duration-200 border border-primary rounded-md focus:outline-none focus:border-primary"
                                required
                            />
                            <Button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold rounded-md">
                                Subscribe
                            </Button>
                            {success && <p className="text-green-500 mt-2">Subscribed successfully!</p>}
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-primary" />
                <p className='text-sm text-center'>&copy; {new Date().getFullYear()} Copyright , All Rights Reserved by AdsByAhsan</p>
            </div>
        </section>
    );
};

export default Footer;
