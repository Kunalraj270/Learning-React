import React , {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";
import ResturantMenu from "./components/ResturantMenu";
import { Shimmer } from "react-shimmer";
//chunking
//dyanmic bundling
//lazy loading
//on demand loading
//dyanmic loading
const Grocery = lazy(() => import('./components/Grocery'));
const Applayout = () => (
  <div className="app">
    <Header />
    <Outlet/>
  </div>
)




const appRouter = createBrowserRouter([
  {
    path : '/', //parent
    element : <Applayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path :'/grocery',
        element:<Suspense fallback={<Shimmer/>} ><Grocery/></Suspense>
      },
      {
        path : '/resturant/:resId',
        element: <ResturantMenu/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< RouterProvider router={appRouter} />) //replace not append