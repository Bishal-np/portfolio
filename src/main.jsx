import { StrictMode } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../src/scss/base/common.scss"
import "../src/scss/base/variable.scss"
import "../src/scss/layouts/footer.scss"
import "../src/scss/layouts/header.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Post from './componant/layouts/Post.jsx'
import Blog from './componant/layouts/Blog.jsx'
import Pagenotfound from './componant/layouts/Pagenotfound.jsx'
import Contact from './componant/layouts/Contact.jsx'
import Banner from './componant/layouts/Banner.jsx'

 const router =createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/*",
    element: <Pagenotfound />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  

 ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
