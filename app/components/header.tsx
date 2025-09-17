import Link from 'next/link';
import "../styles/nav.css";

export default function Header() {

    return (
        <div className='headerCont'>
            <Link href={"/"}>
                <h1 className='logo'>SAMEWAVE 7</h1>
            </Link>


            <nav className='navCont'>
                <Link href="/categories/textile" className="menuItem">TEXTILE</Link>
                <Link href="/categories/string" className="menuItem">STRING</Link>
                <Link href="/categories/paper" className="menuItem">PAPER</Link>
                <Link href="/categories/bead" className="menuItem">BEAD</Link>
            </nav>
        </div>
    );
}