import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [editedItem, setEditedItem] = useState({
    item: {},
    edit: false,
  });

  const [imageLoader, setImageLoader] = useState(true);
  const [items, setItems] = useState([]);

  /////////////////////////////////////////////////////////
  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setItems(data);
    setImageLoader(false);
  };
  ///////////////////////////////////////////////////////

  const deleteItem = async (id) => {
    // const newArray =[...items].filter((item)=>(item.id !==id))
    // setItems(newArray)
    if (window.confirm("Are you sure you want to delete")) {
      // const newArray = items.filter((item) => item.id !== id);
      // setItems(newArray);
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });

      setItems(items.filter((item) => item.id !== id));
    }
    //  setItems([...items].filter((item)=>(item.id !==id)))
  };
  /////////////////////////////////////////////////////////////
  const setallData = async (newData) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    setItems([data, ...items]);
  };
  ////////////////////////////////////////////////////////////
  const editItem = (objects) => {
    setEditedItem({
      item: objects,
      edit: true,
    });
  };

  ///////////////////////////////////////////////
  const updateFeedback = async(id, updItem) => {
    const response =  await fetch(`/feedback/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(updItem)
    })

    
    const data =await response.json();
    // items,setItems
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  ////////////////////////////////////////////
  //return kai line ma huna parcha
  return (
    <FeedbackContext.Provider
      value={{
        items,
        imageLoader,
        deleteItem,
        setallData,
        editItem,
        editedItem,
        setItems,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
