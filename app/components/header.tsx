'use client';
import Link from 'next/link';
import "../styles/nav.css";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();


    const links = [
        { href: "/categories/textile", label: "TEXTILE" },
        { href: "/categories/string", label: "STRING" },
        { href: "/categories/paper", label: "PAPER" },
        { href: "/categories/bead", label: "BEAD" }
    ];

    return (
        <div className='headerCont'>
            <Link href={"/"}>
                <h1 className='logo'>SAMEWAVE 7</h1>
            </Link>

            <nav className='navCont'>
                <p className=''>medium:</p>
                {links.map(({ href, label }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={isActive ? "activeMenuItem" : "menuItem"}
                        >
                            {label}
                        </Link>
                    )
                })}
            </nav>
        </div>
    );
}