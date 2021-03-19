//** Wrapper for every single page */
import React from "react"
import "./layout.css"
import Header from "./header"

function Layout({ children }) {
  return (
    <>

  <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout