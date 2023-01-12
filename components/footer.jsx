import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="footer_list">
          <li className="item_footer">
            <Link className="link_footer" href="/privacy">
              Copyright & Privacy policy
            </Link>
          </li>
          <li className="item_footer">
            <Link className="link_footer" href="/business">
              Log in like a business
            </Link>
          </li>
          <li className="item_footer">
            <Link className="link_footer" href="/admin">
              Log in like an admin
            </Link>
          </li>
        </ul>
        <h5 className="text_footer">© RENT&GO 2023. All rights reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
