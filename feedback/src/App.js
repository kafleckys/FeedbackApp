import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header";
import Feedbacklist from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import Navigatetry from "./components/Navigatetry";
import { FeedbackProvider } from "./context/FeedbackContext";
import Socialmedia from "./usefulwebsite/Socialmedia";


function App() {
  // const [items, setItems] = useState(FeedBackData);



  return (
    <FeedbackProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />

                  <FeedbackForm />
                  <FeedbackStats />

                  <Feedbacklist />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/socialmedia" element={<Socialmedia/>}></Route>

            <Route path="/post/:id/:name" element={<Post />}></Route>
            <Route path="/navigatetry/*" element={<Navigatetry />}></Route>
          </Routes>
          <Card>
            <NavLink to="/" activeclassname="active" className="simple">
              Home
            </NavLink>
            <NavLink to="/about" activeclassname="active" className="simple">
              About
            </NavLink>

            <NavLink to="/socialmedia" activeclassname="active" className="simple">
              Social Media
            </NavLink>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
