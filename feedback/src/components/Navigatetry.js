import React from "react";
import Card from "./shared/Card";
import { Navigate, useNavigate,Route,Routes } from "react-router-dom";

function Navigatetry() {
  const status = 200;
  const navigate = useNavigate(); //navigate variable le arko thauma lagcha page lai

  //status 404 huda automatic /notfound ma redirect huncha
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const navigateClick = () => {
    console.log("mesa"); //yo kam grcha then arko page ma jancha
    navigate("/about");
  };
  return (
    <Card>
      Navigatetry
      <button onClick={navigateClick}>About page </button>
      <Routes>
        <Route path="/show" element={<h1>showing new element here</h1>}>

        </Route>
      </Routes>
    </Card>
  );
}

export default Navigatetry;
