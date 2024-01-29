import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between">
            <Link href="/dashboard">Trippo</Link>
            <Link href="/discover">Discover</Link>
        </nav>
    );
}
