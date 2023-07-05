import { useGlobalContext } from '@/context/Store';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from "@mui/material/Tooltip"


const Avtar = ({ image, name, email }) => {
    const { userDetails } = useGlobalContext();
    console.log(userDetails)
    return (
        <>
            <div className=' ' >
                <Tooltip title={`${userDetails.name}`} arrow >
                    <IconButton size='small' className='w-5 h-5' >
                        <Avatar sx={{ bgcolor: 'skyblue' }} alt={name} src={userDetails.imageUrl} />
                    </IconButton>
                </Tooltip>
            </div>
        </>
    )
}

export default Avtar;