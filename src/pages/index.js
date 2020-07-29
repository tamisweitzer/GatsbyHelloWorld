import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/about/" style={{ display: "inline-block", marginRight: 16 }}>
        About
      </Link>

      <Link to="/contact/" style={{ display: "inline-block", marginRight: 16 }}>
        Contact{" "}
      </Link>

      <Link to="/about-css-modules/">AboutCSSModules</Link>

      <Header headerText="Hello Gatsby!" />

      <p>Testing auto deploy to Git and Netlify</p>
      <img
        src="https://source.unsplash.com/random/400x200/"
        alt="random image from unsplash"
      />
    </div>
  )
}
