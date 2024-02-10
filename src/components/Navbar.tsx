"use client";

import Link from "next/link";
import Container from "./Container";
import { PlaneLanding } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    if (pathname === "/") return null;

    return (
        <div className="bg-blue-600 text-white shadow-lg">
            <Container>
                <nav className="flex justify-between items-center py-4">
                    <Link
                        href="/dashboard"
                        className="flex space-x-2 items-center"
                    >
                        <PlaneLanding />
                        <p className="font-bold text-xl">Trippo</p>
                    </Link>
                    <Link
                        href="/discover"
                        className="text-sm border rounded-lg px-4 py-2 outline-white font-extrabold hover:bg-white hover:text-blue-600"
                    >
                        Discover
                    </Link>
                </nav>
            </Container>
        </div>
    );
}
