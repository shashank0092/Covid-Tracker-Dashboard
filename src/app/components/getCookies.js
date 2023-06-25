import {cookies} from "next/headers"

export default Cookies=()=>{
    const cookieStroe=cookies();
    const cookieValue=cookieStroe.get('next-auth.session-token')
    return cookieValue;
}