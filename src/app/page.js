import Hero from "./Pages/Home/Hero"
import Imapct from "./Pages/Home/Impact"
import Recovery from "./Pages/Home/Recovery"
import Trends from "./Pages/Home/Trends"
import Info from "./Pages/Home/Info"
import Footer from "./components/Footer"


const Home=()=>{
  return(
    <>
      <Hero/>
      <Recovery/>
      <Trends/>
      <Imapct/>
      <Info/>
      <Footer/>
    </>
  )
}

export default Home