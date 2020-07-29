import React from "react"
import { Link } from "gatsby"
import MainNavigation from "../components/main-navigation"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <MainNavigation />
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}
