import Link from 'next/link';
import "../styles/nav.css";

export default function Header() {

    return (
        <div className='headerCont'>
            <Link href={"/"}>
                <h1 className='logo'>Samewave 7</h1>
            </Link>


            <nav className='navCont'>
                <Link href="/fabric" className="menuItem">TEXTILE</Link>
                <Link href="/yarn" className="menuItem">STRING</Link>
                <Link href="/yarn" className="menuItem">PAPER</Link>
            </nav>
        </div>
    );
}