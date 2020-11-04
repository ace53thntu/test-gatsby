import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Inquiry from './Inquiry'
import '../styles/layout.css'
import '../styles/responsive.css'

export default function Layout(props) {
  return (
    <div id="wrapper">
      <Header />
      {props.children}
      <Inquiry />
      <Footer />
    </div>
  )
}
