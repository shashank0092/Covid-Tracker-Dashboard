import Hero from "./Hero"
import NewsSearch from "./NewsSearch"
import NewsImage from "./NewsImage"
import FAQNews from "./FAQNews"
import Footer from "../components/Footer"

const News = () => {
    return (
        <>
            <Hero />
            <NewsSearch />
            <NewsImage />
            <FAQNews />
            <div className="mt-40 xsm:mt-20" >
                <Footer  />
            </div>
        </>
    )
}

export default News;