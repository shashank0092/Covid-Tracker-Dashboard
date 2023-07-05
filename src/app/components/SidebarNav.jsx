import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Link from "next/link";


const SidebarNav = ({ sideBar, setSideBar, }) => {
    return (
        <>
            <Sidebar className="  text-white rounded-lg w-9 xsm:w-4 xsm:h-[50vh]  h-[100vh] border-r-2 border-b-2 border-black px-5   " >
                <Menu className="" >
                    <MenuItem className="menu1 my-2 xsm:my-0     text-black hover:rounded-3xl  rounded-3xl  ">
                        <h2 className="font-bold text-lg font-sans  xsm:text-sm" >LIVE FREE</h2>
                    </MenuItem>
                    <div className='h-[1px]  w-[full] bg-white   ' ></div>
                    <Link href={"/Profile"} >
                        <MenuItem className="bg-[#3c3c3c] xsm:h-[50px] hover:bg-[#898989] hover:text-black rounded-3xl ">
                            <p className="font-sans xsm:text-sm" ><IconButton><AccountCircleIcon sx={{ color: 'white', }} className="hover:text-black" /></IconButton>  My Account</p>
                        </MenuItem>
                    </Link>
                    <div className='h-[1px] my-2 w-[full] bg-white  xsm:my-0  ' ></div>
                    <Link href={"/News"} >
                        <MenuItem className="bg-[#3c3c3c] hover:bg-[#898989] hover:text-black rounded-3xl">
                            <p className="font-sans" > <IconButton> <ArticleIcon sx={{ color: 'white' }} />  </IconButton> News</p>
                        </MenuItem>
                    </Link>
                    <div className='h-[1px] my-2 w-[full] bg-white  xsm:my-0  ' ></div>
                    <Link href={"/About"} >
                        <MenuItem className="bg-[#3c3c3c] hover:bg-[#898989] hover:text-black rounded-3xl" >
                            <p className="font-sans" > <IconButton> <InfoIcon sx={{ color: 'white' }} /> </IconButton> About Us</p>
                        </MenuItem>
                    </Link>
                    <div className='h-[1px] my-2 w-[full] bg-white  xsm:my-0  ' ></div>
                    <Link href={"/Feedback"} >
                        <MenuItem className="bg-[#3c3c3c] hover:bg-[#898989] hover:text-black rounded-3xl" >
                            <p className="font-sans" > <IconButton> <FeedbackIcon sx={{ color: 'white' }} /> </IconButton>Feedback</p>
                        </MenuItem>
                    </Link>
                    <div className='h-[1px] my-5 w-[full] xsm:my-0  ' ></div>
                    <MenuItem  >
                        <div className="flex gap-4 " >
                            <div>
                                <Button variant="outlined" color="error" className="text-white hover:bg-red-600  font-bold bg-red-600 " size="small" >
                                    Sign Out
                                </Button>
                            </div>
                            <div>
                                <Button variant="outlined" className="text-black border-black" onClick={() => setSideBar(false)} size="small"  >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}

export default SidebarNav;