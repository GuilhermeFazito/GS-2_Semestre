import { } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  

    children:[
      {path: '/', element: <Login/>},
      {path: '/home', element: <Home/>},
      {path: '/login', element: <Login/>},
      

    ]
  
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
