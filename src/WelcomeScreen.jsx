import React from 'react'
import './styles/WelcomeScreen.css'
// import logo from './wickedbackground.svg'
import github_icon from './GitHub_icon.png'
const config = require('./config')

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <h1>Welcome to the Meet app</h1>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <button
            onClick={() => {
              props.getAccessToken()
            }}
            rel="nofollow noopener"
            className="btn-text"
          >
            <span className="google-icon-wrapper">
              <img
                className="google-icon"
                src={config.GOOGLE_ICON}
                alt="Google sign-in"
              />
            </span>
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <div
        className="dev-links"
        onClick={() => {
          window.open(config.GITHUB_MEET)
        }}
      >
        <h5>By Niko Sardas</h5>
        <img
          className="github_icon"
          alt="github_icon"
          src={github_icon}
          width="64"
          height="64"
        />
      </div>
      <a href={config.PRIVACY_HTML} rel="nofollow noopener">
        Privacy policy
      </a>
    </div>
  ) : null
}
export default WelcomeScreen
