import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "@/components/MainLayout.tsx";
import {HomePage} from "@/pages/HomePage.tsx";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: "/",
            element: <HomePage/>
        }]
}]);