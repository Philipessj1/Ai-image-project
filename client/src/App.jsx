import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

import { logo } from './assets';
import Home from "./pages/home";
import CreatePost from "./pages/createPost";

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App