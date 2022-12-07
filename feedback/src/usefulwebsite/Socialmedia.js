import React from 'react'
import Card from '../components/shared/Card'
import Linkedbutton from './Linkedbutton'
const Socialmedia = () => {
  return (
 <Card>
     <h1 >Useful Website</h1>
    <h3> Which website do you want to open? </h3>
    <Linkedbutton name="Google" link="https://google.com"/>
    <Linkedbutton name="Facebook" link="https://facebook.com"/>
    <Linkedbutton name="Youtube" link="https://youtube.com"/>
    <Linkedbutton name="Twitter" link="https://twitter.com"/>
    <Linkedbutton name="Instagram" link="https://instagram.com"/>
    <Linkedbutton name="Github" link="https://github.com"/>
  
    </Card>
  )
}

export default Socialmedia