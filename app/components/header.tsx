'use client';
import Link from 'next/link';
import "../styles/nav.css";
import "../globals.css";
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import MenuOverlay from './menuOverlay';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    const menuToggleRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuToggleRef.current &&
                !menuToggleRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        }


        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);


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
            {/*mobile*/}
            <div className='menuToggle' onClick={toggleMenu} ref={menuToggleRef}>
                MENU
            </div>
            <div ref={menuRef}>
                <MenuOverlay isOpen={menuOpen} onClose={closeMenu} />
            </div>
        </div>
    );
}