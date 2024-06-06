import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/styles.css'
import './assets/css/fonts.css'
import './assets/css/colors.css'

import './assets/i18n/i18nify.js'

import Routes from './utils/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Routes />
)
