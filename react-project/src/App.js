import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Writereview from "./pages/writereview/Writereview"
import Businesslogin from "./pages/businesslogin/Businesslogin"
import Business from "./pages/business/Business"
import Login from "./pages/login/Login"
import Signin from "./pages/signin/Signin"
import Reviewpage from "./pages/reviewpage/Reviewpage";
import Cafepage from "./pages/cafepage/Cafepage";

function App() {
  


  const router = createBrowserRouter([
    {
      path: "/writereveiw",
      element: <Writereview />
    },
    {
      path: "/businesslogin",
      element: <Businesslogin />
    },
    {
      path: "/business",
      element: <Business />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signin",
      element: <Signin />
    },
    {
      path: "/review-page",
      element: <Reviewpage />
    },
    {
      path: "/cafe-page",
      element: <Cafepage />
    },
    {
      path: "/",
      element: <Home />
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
