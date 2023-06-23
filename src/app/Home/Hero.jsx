import Navbar from "@/app/components/Navbar";


const Hero = () => {

    return (
        <>

            <div className=" bg-heroblack h-[100vh]  flex flex-col    ">
                <div className="flex-grow " >
                    <Navbar />
                </div>
                <div className="mb-4">
                    <div   >
                        <div className="text-myYellow align-bottom text-7xl font-extrabold text-center tracking-wide font-sans   ">
                            <p className="leading-snug xsm:text-2xl " >
                                Explore the new world
                            </p>
                            <p className=" xsm:text-lg "  >
                                beyond COVID-19
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}

export default Hero;