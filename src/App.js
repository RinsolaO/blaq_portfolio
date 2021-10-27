import React from "react";
import "./Styles.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Story from "./screens/Story";
import CaseStudy from "./screens/CaseStudy";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
