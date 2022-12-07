import React from "react";
import Card from "../shared/Card";
import {Link} from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version :1.0.0</p>
        <Link to="/">Back to home</Link>
        {/* <a href="/">Back to home</a> //it is not good to use a tag in react it will refresh page
        a tags are good for external link but not for internal links  */}
      </div>
    </Card>
  );
}

export default AboutPage;
