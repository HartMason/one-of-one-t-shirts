import React from 'react'
import './footer.css'
import youTube from '../image/youTube.svg'
import twitter from '../image/twitter.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='footerHeader'>FOOTER</h1>
        <image src={youTube}></image>
        <image src={twitter}></image>
    </div>
  )
}

export default Footer