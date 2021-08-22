
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import React from "react"


const Layout: React.FC = ({children}) => {
    return (
        <>
        <Navbar/>
            {children}
       <Footer/>
        </>
    )
}

export default Layout
