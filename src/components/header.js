import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'
// import logo from '../images/small-react-logo.png'
import { useAuth0 } from "@auth0/auth0-react"


//** a stateful class component applied to header */
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',     
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    }else { 
      this.setState({ hasScrolled: false })

    }
  }



  render() {

 const UserNav = () => {

    const { isLoading, isAuthenticated, logout, loginWithRedirect } = useAuth0()

      if (isLoading) return null

     if (isAuthenticated) return (
        <ul>
        <li><button onClick={logout} >Logout</button></li>
        </ul>
      )

      return (
         <ul>
        <li><button onClick={loginWithRedirect} >Login</button></li>
        </ul>
      )

    }
    return (
    //** ternary expression to activate scroll block for css*/
      <div className={ this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/">Home</Link>
          <Link to="/page-2">Page 2</Link>
          <Link to="/page-3">Page 3</Link>
          <Link to="/workshops">Stateful component on page scroll</Link>
          <Link to="/buy"><button>Buy</button></Link>
          <UserNav />
        </div>
      </div>
         
      
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = { 
  siteTitle: ``,
}

export default Header
