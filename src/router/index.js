import { createBrowserRouter } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Layout from "../layouts/Layout";
import Comics from "./comics/Comics.jsx";

const indexRouter = createBrowserRouter([

    { path: '/',  element: <Layout/>, children: [

    { path: '/' , element: <Carousel/>},
    
    {path: '/comics', element: <Comics/>}
]}
]) 



export default indexRouter