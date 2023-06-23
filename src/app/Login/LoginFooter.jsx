'use client';
import Image from "next/image";
import LoginpageFooterImage from "../../../public/images/LoginpageFooterImage.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';


const LoginFooter = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-32 xsm:mb-0" >
                <div>
                    <Image src={LoginpageFooterImage} alt="loginfooter" height={250} />
                </div>
                <div className="flex gap-5" >
                    <div>
                        <TwitterIcon  />
                    </div>
                    <div>
                        <InstagramIcon />
                    </div>
                    <div>
                        <FacebookIcon />
                    </div>
                    <div>
                        <EmailIcon />
                    </div>
                </div>
                <div className="mt-5" >
                    <p>© LiveLifeTech 2023</p>
                </div>
            </div>
        </>
    )
}

export default LoginFooter;