import React from "react"
import { Link } from "gatsby"
import MainNavigation from "../components/main-navigation"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <MainNavigation />
      <Header headerText="Hello Gatsby!" />
      <p>Testing auto deploy to Git and Netlify</p>
      <img
        src="https://source.unsplash.com/random/400x200/"
        alt="random image from unsplash"
      />
    </div>
  )
}
