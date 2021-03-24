import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"

const Layout = ({children}) => {
    return (
        <div className="layout d-flex flex-column hero">
            <Header />
            <Hero />
            <div className="layout-body">
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout