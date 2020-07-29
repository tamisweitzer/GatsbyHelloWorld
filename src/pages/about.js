import React from "react"
import MainNavigation from "../components/main-navigation"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <MainNavigation />
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty  cool" />
      <p>Such wow. Very React</p>
    </div>
  )
}
