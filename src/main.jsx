 
import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider ,Route, createRoutesFromElements} from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Layout from "./Layout/Layout.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Github, {githubInfoLoader} from "./components/Github/Github.jsx"
import About from "./components/About/About.jsx"
import User from "./components/User/User.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route
        path="Github"
        loader={githubInfoLoader}
        element={<Github />} />
      <Route path="User/:userid" element={<User />} />
    </Route>
  )
)
  


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)