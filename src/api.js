import { mockData } from './mock-data'
import axios from 'axios'
import NProgress from 'nprogress'

import './styles/nprogress.css'
const config = require('./config')

export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location)
  const locations = [...new Set(extractLocations)]
  return locations
}

export const getEvents = async () => {
  NProgress.start()

  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done()
    return mockData
  }

  if (!navigator.onLine) {
    const data = localStorage.getItem('lastEvents')
    NProgress.done()
    return data ? JSON.parse(data).events : []
  }

  const token = await getAccessToken()
  if (token) {
    removeQuery()
    const url = config.GET_EVENTS + '/' + token
    const result = await axios.get(url)
    if (result.data) {
      var locations = extractLocations(result.data.events)
      localStorage.setItem('lastEvents', JSON.stringify(result.data))
      localStorage.setItem('locations', JSON.stringify(locations))
    }
    NProgress.done()
    return result.data.events
  }
}

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token')
  const tokenCheck = accessToken && (await checkToken(accessToken))

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token')
    const searchParams = new URLSearchParams(window.location.search)
    const code = await searchParams.get('code')

    if (!code) {
      const results = await axios.get(config.GET_AUTH_URL)
      const { authUrl } = results.data
      return (window.location.href = authUrl)
    }
    return code && getToken(code)
  }
  return accessToken
}

export const checkToken = async (accessToken) => {
  const result = await fetch(`${config.ACCESS_TOKEN}${accessToken}`)
    .then((res) => res.json())
    .catch((error) => console.log(error))

  return result ? result : { error: true }
}

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname
    window.history.pushState('', '', newurl)
  } else {
    newurl = window.location.protocol + '//' + window.location.host
    window.history.pushState('', '', newurl)
  }
}

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code)
  const { access_token } = await fetch(config.API_TOKEN + '/' + encodeCode)
    .then((res) => {
      return res.json()
    })
    .catch((error) => error)

  access_token && localStorage.setItem('access_token', access_token)

  return access_token ? access_token : { error: true }
}
