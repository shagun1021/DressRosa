import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './fontawesome';
import './index.css'

// import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import ContextHome from './components/usecontext/ContextHome.jsx';
// import Exploremore from './components/usecontext/Exploremore.jsx';

// const router =createBrowserRouter([


//   {
//     path:'/',
//     element:<ContextHome/>
//   } ,

//   {
//     path:'/Exploremore',
//     element:<Exploremore/>
//   }


// ]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    {/* <RouterProvider router={router}/> */}
    <App/>
  </React.StrictMode>,
)
