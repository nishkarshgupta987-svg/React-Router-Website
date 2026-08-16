// Routing is the process of displaying different components based on the URL without reloading 
// the entire page.
// Routing ka use tab karte hain jab ek React application me multiple pages ya views hote hain 
// aur hume page reload kiye bina unke beech navigate karna hota hai.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/ContactUs/ContactUs.jsx'
import About from './Components/About/About.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader//Loader React Router ka ek function hai jo route render hone se pehle data fetch karta hai.
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



// createBrowserRouter()
// createBrowserRouter() creates the routing configuration for your application. 
// It defines which component should be displayed for each URL.

// RouterProvider
// RouterProvider provides the router to the entire React application 
// and enables navigation based on the current URL.