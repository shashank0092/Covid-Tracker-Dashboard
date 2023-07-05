'use client';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
const Footer = () => {
    return (
        <>
            <div className='flex flex-col border-t-2 py-11 mt-0 bg-gray-200  ' >
                <div className='flex justify-around ' >
                    <div className='flex flex-col gap-5' >
                        <div>
                            <p className='font-bold' >Resources</p>
                        </div>
                        <div className='flex flex-col gap-2' >
                            <p>Blog</p>
                            <p>FAQ</p>
                            <p>News</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <p className='font-bold' > Company</p>
                        </div>
                        <div  className='flex flex-col gap-2'>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Privacy</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <p className='font-bold'>Connect</p>
                        </div>
                        <div  className='flex flex-col gap-2'>
                            <p>Twitter</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around items-center mt-5 xsm:flex xsm:flex-col' >
                    <div className='mt-5' >
                        <p> <span className='font-bold' >© LIVE FREE</span> , 2023. Stay safe out there!</p>
                    </div>
                    <div className='mt-5' > 
                        <IconButton> <TwitterIcon/> </IconButton>
                        <IconButton> <InstagramIcon/> </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;