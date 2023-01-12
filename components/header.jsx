import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header>
                <nav className="header_nav">
                    <div className="logo_header">
                        <Image src="/logo.png" alt="logo" width={70} height={60} />
                    </div>
                    <ul className="header_list">
                        <li className="item_header">
                            <Link className="link_header" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="item_header">
                            <Link className="link_header" href="/about">
                                About us
                            </Link>
                        </li>
                        <li className="item_header">
                            <Link className="link_header" href="/login">
                                Log in
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

