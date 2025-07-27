import Link from 'next/link';
import "../styles/nav.css";

export default function Header() {

    return (
        <div className='headerCont'>
            <div>
                <h1 className='logo'>Samewave 7</h1>
            </div>
            <nav className='navCont'>
                <Link href="/fabric" className="menuItem">TEXTILE</Link>
                <Link href="/yarn" className="menuItem">STRING</Link>
                <Link href="/yarn" className="menuItem">PAPER</Link>
            </nav>
        </div>
    );
}