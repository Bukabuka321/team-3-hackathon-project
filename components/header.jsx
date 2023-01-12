import Image from "next/image";
import Link from "next/link";
import LogoImg from "../public/images/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <nav className="header_nav">
          <div className="logo_header">
            <Image src={LogoImg} alt="logo" width={100} />
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
