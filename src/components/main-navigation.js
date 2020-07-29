import React from "react"
import { Link } from "gatsby"

export default function MainNavigation() {
  return (
    <>
      <Link to="/" styles="nav-styles">
        Home
      </Link>
      <Link to="/about/"> About </Link>
      <Link to="/contact/"> Contact </Link>
      <Link to="/about-css-modules/"> AboutCSSModules </Link>
    </>
  )
}
