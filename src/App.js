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
    <Route exact path={process.env.PUBLIC_URL + '/'}>
      <HomePage />
    </Route>
    <Route path={process.env.PUBLIC_URL + '/about'}>
      <AboutPage />
    </Route>
    <Route path={process.env.PUBLIC_URL + '/work'}>
      <WorkPage />
    </Route>
    <Route path={process.env.PUBLIC_URL + '/blog'}>
      <BlogPage />
    </Route>
    <Route path={process.env.PUBLIC_URL + '/contact'}>
      <Contactpage/>
    </Route>
  </Switch>
    </div>
  );
}

export default App;
