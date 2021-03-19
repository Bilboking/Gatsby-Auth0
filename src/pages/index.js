//** Home page */
//** Also, using mostly .svg images to look sharp on any device */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import { useAuth0 } from "@auth0/auth0-react"

const CTA = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (isAuthenticated) return null 
  return (
  <div className="cta">
    <button onClick={loginWithRedirect} className="button">Login or Register</button>
  </div>
  )
}

const  IndexPage = () => {


  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <CTA />
      {/* <button onClick={loginWithRedirect} className="button">Login</button> */}
    </Layout>
  )
}

export default IndexPage
