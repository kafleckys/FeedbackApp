import React, { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

export default function Feedbackitem({ item }) {
  const { editItem, deleteItem } = useContext(FeedbackContext);

  // const deleteItemfunc =(id)=>{
  //   // console.log(item.id)
  //     deleteItem(id)
  // }
  return (
    // <Card reverse={false}>
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteItem(item.id)}>
        <FaTimes color="red" />
      </button>

      <button className="edit" onClick={() => editItem(item)}>
        <FaEdit color="green" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.prototype = {
  item: PropTypes.object.isRequired,
};
