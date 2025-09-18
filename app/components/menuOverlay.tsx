import Link from "next/link";
import { usePathname } from 'next/navigation';

interface MenuOverlayProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function MenuOverlay({ onClose, isOpen }: MenuOverlayProps) {
    const pathname = usePathname();


    const links = [
        { href: "/categories/textile", label: "TEXTILE" },
        { href: "/categories/string", label: "STRING" },
        { href: "/categories/paper", label: "PAPER" },
        { href: "/categories/bead", label: "BEAD" }
    ];

    return (
        <div className={`menuOverlay ${isOpen ? 'menuOpen' : ''}`}>
            <nav className="menuCont">
                <Link href={"/"} onClick={onClose} className="mb6"
                >
                    HOME
                </Link>
                <div className="flex-col mb6">
                    {links.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={isActive ? "activeMenuItem mb3" : "menuItem mb1"}
                                onClick={onClose}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </div>
                
                <Link href={"/about"} onClick={onClose}
                >
                    ABOUT
                </Link>


            </nav>

        </div>
    )
}