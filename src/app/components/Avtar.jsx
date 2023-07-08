import { useGlobalContext } from '@/context/Store';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from "@mui/material/Tooltip"


const Avtar = () => {
    const { userDetails, loginType, walletAdress } = useGlobalContext();
    console.log(userDetails)




    
    return (
        <>
            {
                loginType == "Web2.0" ? (
                    <>
                        <div  >
                            <Tooltip title={`${userDetails.name}`} arrow >
                                <IconButton size='small' className='w-5 h-5' >
                                    <Avatar sx={{ bgcolor: 'skyblue' }} alt={userDetails.name} src={userDetails.imageUrl} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </>
                ) :
                    (
                        <>
                            <div className=' ' >
                                <Tooltip title={`${walletAdress}`} arrow >
                                    <IconButton size='small' className='w-5 h-5' >
                                        <Avatar sx={{ bgcolor: 'skyblue' }} alt={"user"} src={userDetails.imageUrl} />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default Avtar;