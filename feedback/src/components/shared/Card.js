import React from "react"
import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  //   return (
  //     <div className={`card ${reverse && 'reverse'}`}>
  //     {children}
  //     </div>
  //   )

//   return <div className='card' style={{
//     backgroundColor: reverse?'rgba(0,0,0,0.4)':'#fff',
//     color:reverse?'#fff':'#000'
//   }}>
//     {children}
//   </div>;
const style1={
    backgroundColor: reverse?'rgba(0,0,0,0.4)':'#fff',
     color:reverse?'#fff':'#000'

}
return (
    <div className="card" style={style1}>
        {children}
    </div>
)
}

Card.defaultProps ={
     reverse:false
    // reverse:true
}

 Card.propTypes ={
     children:PropTypes.node.isRequired,
     reverse:PropTypes.bool
 }


export default Card;
