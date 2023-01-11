import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, ...props }) => {
    return (
        <div className="content ">
            <Header />
            <main {...props}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;