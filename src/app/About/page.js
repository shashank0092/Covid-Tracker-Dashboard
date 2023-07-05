import Footer from "../components/Footer";
import HeadingSection from "./HeadingSection";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Team from "./Team";


const About=()=>{
    return(
        <>
            <HeadingSection/>
            <Hero/>
            <Team/>
            <Newsletter/>        
            <div className="mt-20" >
            <Footer/>
            </div>
        </>
    )
}

export default About;