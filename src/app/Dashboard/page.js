'use client'
import Footer from "../components/Footer";
import Data from "./Data";
import FAQS from "./FAQS";
import Hero from "./Hero";
import RealTimeNews from "./RealTimeNews";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const Dashboard = () => {
    return (
        <>
            
            <Hero />
            <Data />
            <RealTimeNews />
            <FAQS />
            <div className="mt-20 " >
                <Footer />
            </div>
        </>
    )
}

export default Dashboard;