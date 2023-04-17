import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/scss/index.scss'
import { Home } from './views/index.views';

// eslint-disable-next-line import/no-extraneous-dependencies
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
