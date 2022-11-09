import { createBrowserRouter } from "react-router-dom"
import Main from '../../Layout/Main'
import Checkout from "../../Pages/Checkout/Checkout";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: 
                    <PrivateRoutes>
                        <About></About>
                    </PrivateRoutes>
                
            },
            {
                path: '/services',
                element: <PrivateRoutes>
                    <Services></Services>
                </PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services/:id',
                element: <PrivateRoutes>
                    <Checkout></Checkout>
                </PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
      },
])
export default router;
