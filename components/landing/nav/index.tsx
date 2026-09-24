
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#050509]/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

                <Link
                    href="/"
                    className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
                >
                    {/* Logo */}
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black">
                        <div className="h-3 w-3 rounded-lg bg-white" />
                    </div>

                    {/* Brand */}
                    <span className="text-2xl font-semibold tracking-tight text-white">
                        Intellinx
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-30">
                    {/* Navigation links */}
                    <div className="flex items-center gap-10 text-sm font-light text-zinc-400">
                        <Link
                            href="#features"
                            className="transition-colors hover:text-white"
                        >
                            Features
                        </Link>

                        <Link
                            href="#how-it-works"
                            className="transition-colors hover:text-white"
                        >
                            Integration
                        </Link>

                        <Link
                            href="#pricing"
                            className="transition-colors hover:text-white"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/api/auth"
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/api/auth"
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                        >
                            Get Started
                        </Link>
                    </div>




                </div>

            </div>
        </nav>
    );
};

export default Navbar;

