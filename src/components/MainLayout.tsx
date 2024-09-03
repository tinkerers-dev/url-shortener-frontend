import {Outlet} from "react-router-dom";
import {Footer} from "@/components/Footer.tsx";
import {Header} from "@/components/Header.tsx";

export const MainLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
);

