import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import HandsFashion from "../Pages/ProjectDetails/HandsFashion/HandsFashion";
import LawyerService from "../Pages/ProjectDetails/LawyerService/LawyerService";
import LearningPlatform from "../Pages/ProjectDetails/LearningPlatform/LearningPlatform";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/hands-fashion',
                element: <HandsFashion></HandsFashion>
            },
            {
                path: '/lawyer-service',
                element: <LawyerService></LawyerService>
            },
            {
                path: '/learning-platform',
                element: <LearningPlatform></LearningPlatform>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])
