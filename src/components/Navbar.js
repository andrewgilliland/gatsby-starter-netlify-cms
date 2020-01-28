import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent text-gray-900 bg-gray-100 font-semibold"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between px-10 py-5">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="flex flex-col sm:flex-row mt-5 sm:mt-0">
              <Link className="px-5 mt-1 sm:mt-0 hover:bg-gray-300 rounded" to="/about">
                About
              </Link>
              <Link className="px-5 mt-1 sm:mt-0 hover:bg-gray-300 rounded" to="/blog">
                Blog
              </Link>
              <Link className="px-5 mt-1 sm:mt-0 hover:bg-gray-300 rounded" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
