import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className="layout d-flex flex-column ">
            <Header />
            <div className="layout-body">
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout