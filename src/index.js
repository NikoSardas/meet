import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import * as atatus from 'atatus-spa'

atatus.config('610ee4fd495b4ebba32404e51e243f0e').install()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()

reportWebVitals()

atatus.config('610ee4fd495b4ebba32404e51e243f0e').install()
