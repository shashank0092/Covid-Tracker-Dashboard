"use client";
import Footer from "../components/Footer";
import Hero from "./Hero";

import LoginReason from "./LoginReason";
import GoogleLoginSection from "./GoogleLoginSection";





const Login = () => {


    

    return (
        <>
            <Hero />
            <GoogleLoginSection/>
            <LoginReason />
            <Footer />
        </>
    )
}

export default Login;