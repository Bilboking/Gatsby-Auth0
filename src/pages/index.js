//** Home page */
//** Also, using mostly .svg images to look sharp on any device */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import { useAuth0 } from "@auth0/auth0-react"




const  IndexPage = () => {

const { loginWithRedirect } = useAuth0()
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <button onClick={loginWithRedirect} className="button">Login</button>
    </Layout>
  )
}

export default IndexPage
