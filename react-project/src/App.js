import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const layout =  () =>{
    return(
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/",
      element: <Home/>
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
