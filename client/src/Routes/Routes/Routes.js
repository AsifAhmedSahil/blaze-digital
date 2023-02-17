import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import HomePage from "../../Pages/HomePage/HomePage";
import Login from "../../Pages/Login/Login";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

export default router