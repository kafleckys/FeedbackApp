import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from "../context/FeedbackContext";


function FeedbackStats() {
  const {items}=useContext(FeedbackContext);


  let sum =items.reduce((acc,item)=>{
    return (
        acc+item.rating
    )
  },0)/items.length

sum=sum.toFixed(1).replace(/[.,]0/,'')


  return (
    <div className='feedback-stats'>
    <div>{items.length} Reviews</div>
    <div>Average rating: {isNaN(sum)?0:sum}</div>
    </div>
  )
}

FeedbackStats.propType={
items:PropTypes.array.isRequired,
}
export default FeedbackStats