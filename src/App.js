import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./component/Home";
import Login from "./component/Login/Login";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import Support from "./component/Support/Support";
import FAQs from "./component/FAQ's/faqs";

import Pune from "./component/Location/Pune";
import Bengalure from "./component/Location/Bengalure";
import Goa from "./component/Location/Goa";
import Mumbai from "./component/Location/Mumbai";
import Delhi from "./component/Location/Delhi";

import Error from "./component/Error";

import { Fragment } from "react";

export default function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route>
              <Route exact path="/" element={<Home />} />
              <Route exact path="login" element={<Login />} />
              <Route exact path="contact" element={<Contact />} />
              <Route exact path="about" element={<About />} />
              <Route exact path="blogs" element={<Blogs />} />
              <Route exact path="support" element={<Support />} />
              <Route exact path="faqs" element={<FAQs />} />

              <Route exact path="pune" element={<Pune />} />
              <Route exact path="bengalure" element={<Bengalure />} />
              <Route exact path="goa" element={<Goa />} />
              <Route exact path="mumbai" element={<Mumbai />} />
              <Route exact path="delhi" element={<Delhi />} />
            </Route>
            <Route exact path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}
