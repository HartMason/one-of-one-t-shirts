import React from 'react'
import Footer from './Footer'
import './DisplayShirt.css'
import Checkboxes from './CheckBox'

const DisplayShirt = () => {
  return (

    <div className='displayShirt'>
        <body >
        <h2>Cat Shirt</h2>
        <Checkboxes/>
        </body>
        <Footer/>
    </div>
  )
}

export default DisplayShirt