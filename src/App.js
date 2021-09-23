import React from "react";
import "./Styles.css";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Story from "./screens/Story";
import CaseStudy from "./screens/CaseStudy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Story">
          <Story />
        </Route>
        <Route exact path="/CaseStudy">
          <CaseStudy />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
