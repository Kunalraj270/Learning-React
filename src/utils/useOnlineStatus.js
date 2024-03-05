//if online 
// show green signal
// if offline

import { useEffect, useState } from "react";

// show red signal
const useOnlineStatus = ()=>{
    const [onlineStatus , setOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener('online' ,()=>{
            setOnlineStatus(true);
        });
        window.addEventListener('offline', ()=>{
            setOnlineStatus(false);
        },[]);
    })
    return onlineStatus;
}
export default useOnlineStatus;