import React from 'react'
import './styles/WelcomeScreen.css'
import logo from './wickedbackground.svg'
import github_icon from './GitHub_icon.png'

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
      <div className="login-head">
        <img className="logo-image" alt="Logo" src={logo} />
        <h1>Welcome to the Meet app</h1>
      </div>
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
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </span>
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <div className="dev-links" onClick={()=>{window.open('https://www.github.com/NikoSardas/meet')}}>
        <h5>By Niko Sardas</h5>
        <img
          className="github_icon"
          alt="github_icon"
          src={github_icon}
          width="64"
          height="64"
        />
      </div>
      <a
        href="https://NikoSardas.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
    </div>
  ) : null
}
export default WelcomeScreen
