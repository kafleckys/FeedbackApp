import React, { useContext } from "react";
import Feedbackitem from "./FeedbackItem";
// import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Imageloading from "./shared/Imageloading";

export default function Feedbacklist() {
  const { items, imageLoader } = useContext(FeedbackContext);

  if (!imageLoader && (!items || items.length === 0)) {
    return <p>Feedback list is empty</p>;
  }

  return imageLoader ? (
    <Imageloading />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedbackitem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Feedbacklist.propTypes = {
//   // items:PropTypes.array,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
