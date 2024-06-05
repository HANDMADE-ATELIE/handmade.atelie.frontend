import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/global/styles.css'
import './assets/global/fonts.css'
import './assets/global/colors.css'

import './assets/i18n/i18nify.js'

import Routes from './utils/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Routes />
)
