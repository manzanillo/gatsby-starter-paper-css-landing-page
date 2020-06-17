import React from "react"
import PropTypes from "prop-types"

import headerImage from "../images/header.png"
import mainImage from "../images/main.webp"
import Paper from "../components/paper"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <Paper>
      <h1 style={{ textAlign: "center" }}>Landing Page Starter</h1>
      <p style={{ textAlign: "center" }}>
        This landing page looks great on all devices and is minimal in design.
        Add what you want and deploy.
      </p>
      <div style={{ textAlign: "center" }}>
        <button>Call to action</button>
      </div>
      <div style={{ margin: 60, position: "relative" }}>
        <img src={mainImage} alt="Some content" />
      </div>
    </Paper>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
