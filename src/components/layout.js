//** Wrapper for every single page */
import React from "react"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout