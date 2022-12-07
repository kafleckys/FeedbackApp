import React, { useState, useContext } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import { useEffect } from "react";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const {setallData,editedItem,updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    // setbtnDisabled(false);
    if(editedItem.edit === true)
    {
      setText(editedItem.item.text);
      setRating(editedItem.item.rating);
      setbtnDisabled(false);
    }
  
  }, [editedItem]);


  const textInput = (event) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("enter at least 10 characters");
      setbtnDisabled(true);
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    setText(event.target.value);
  };

  // const editItem =()=>{
  //   setText(editedItem.text)
  // }
  const formDataSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newData = {
        rating: rating,
        text: text,
        newdate :new Date().toLocaleTimeString()
      }
     if(editedItem.edit === true)
     {
      updateFeedback(editedItem.item.id,newData);
      editedItem.edit=false;
     }
     else{
      setallData(newData);
     }
          
      setText("");
      setbtnDisabled(true);
    }
  };
  return (
    <Card>
      <form onSubmit={formDataSubmit}>
        <h2>How would you like for rate our service?</h2>
        <RatingSelect selectedfunc={(select) => setRating(select)} />
        {/* {something here } */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Leave your review "
            onChange={textInput}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            SUBMIT NOW
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
