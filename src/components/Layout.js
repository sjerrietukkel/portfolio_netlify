import React from "react"
import Header from "./Header"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />
            <div className="layout-body">
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Layout