import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import styled from "styled-components"
import { withAuthenticationRequired } from '@auth0/auth0-react'

// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

function SecondPage ()  {
  
return (
    
 <Wrapper>
    <Header />
      <ContentWrapper>
        <StaticImage
      src="../images/net-ninja-SSG-pic.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Net Ninja Gatsby explanation"
      style={{ marginBottom: `1.45rem` }}
    />
       
                <TextWrapper>
          {/* <img src="/images/avatars/small-react-logo.png" alt="logo" /> */}
            <Title>This is the second page for React.js Project Assignment App for Kingsland University</Title>
           
            <Description>A Gatsby/React (SEO, Speed, Easy Update(using hooks)) site that acts like a SPA with a public area
                and private area with authentication.</Description>
           <Link to="/">Go back to the homepage</Link>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
  )
}



const Wrapper = styled.div`
    background: linear-gradient(180deg, #0276FD 30%, #74BBFB 100%);
`

const ContentWrapper = styled.div`
	max-width: 1234px;
	padding: 200px 30px;
	margin: 0 auto;
`
const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
	color: white;
`

const Description = styled.p`
    font-size: 17px;
    line-height: 130%;
`

export default withAuthenticationRequired(SecondPage)
