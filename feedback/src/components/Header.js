import React from 'react'
import propTypes from 'prop-types'

function Header({child,bgColor,textColor}) {

  const styles ={
    backgroundColor:bgColor,
    color:textColor
  }
  return (
    <header style={styles}>
    <div className='container'>
    <h1>{child}
    </h1>
   
    </div>
    </header>
  
  )
}

Header.defaultProps ={
    child:"FeedBack UI",
    bgColor:'#00ff00',
    textColor:'rgba(255,40,40,0.8)'
}

Header.propTypes = {
    child : propTypes.string,
    bgColor:propTypes.string,
    textColor:propTypes.string
  
}
export default Header