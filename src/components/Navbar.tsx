import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between">
            <Link href="/dashboard">Trippo</Link>
            <Link href="/discover">Discover</Link>
        </nav>
    );
}

/**
 * 1. Home page ("/")
 * 2. Dashboard page ("/dashboard")
 * 3. Discover page ("/discover")
 *
 * Your assignment:
 * 1. Add the discover page
 * 2. Add navigation in between the dashboard and the discover page
 *      1. When the user clicks Trippo -> takes them to dashboard
 *      2. When the user clicks Discover -> takes them to discover
 */
