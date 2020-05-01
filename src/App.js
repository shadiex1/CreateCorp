import React from 'react';
import './App.css';
import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/about/aboutPage";
import WorkPage from "./pages/work/workPage";
import BlogPage from "./pages/blog/blogPage";
import Contactpage from "./pages/contact/contactPage"

import  {
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
       <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/about">
      <AboutPage />
    </Route>
    <Route path="/work">
      <WorkPage />
    </Route>
    <Route path="/blog">
      <BlogPage />
    </Route>
    <Route path="/contact">
      <Contactpage/>
    </Route>
  </Switch>
    </div>
  );
}

export default App;
