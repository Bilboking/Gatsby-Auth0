//** A REUSABLE structure for components! */

import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"


function HeroSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
            {/* <img src="/images/avatars/small-react-logo.png" alt="logo" /> */}
            <Title>React.js Project Assignment App for Kingsland University</Title>
           
            <Description>A Gatsby/React (SEO, Speed, Easy Update(using hooks)) site that acts like a SPA with a public area
                and private area with authentication.</Description>
            {/* <Link to="/page-2/">Login</Link> <br /> */}
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection

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
