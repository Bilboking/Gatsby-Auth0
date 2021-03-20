//** Home page */

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import { useAuth0 } from "@auth0/auth0-react"

const CTA = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  if (isLoading || isAuthenticated) return null 
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
