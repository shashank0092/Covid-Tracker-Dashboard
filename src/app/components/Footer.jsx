import Image from "next/image";
import FooterImage from "../../../public/images/RecoveryLogo2.png"
const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-14 xsm:mb-0 xsm:mt-10 " > 
                <div>
                    <Image src={FooterImage} alt="footer-image" height={90} />
                </div>
                <div className="mt-5 " >
                    <p className="tracking-tight font-sans xsm:text-center" >© 2023 Post-COVID World Dashboard. All rights reserved.</p>
                    <p className="text-center  font-light font-sans " >Developed By Shahsnak Shukla</p>
                </div>
            </div>
        </>
    )
}

export default Footer;