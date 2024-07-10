import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GithubUserProvider } from './GithubContext/GithubUserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GithubUserProvider>
    <App />
  </GithubUserProvider>
  
)
