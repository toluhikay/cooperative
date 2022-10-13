import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const TokenContext = createContext(null);
        
 export default function RequestAuth({children}){
    const navigate = useNavigate()
     const [{token}] = useState(() => {
         return {
             token: localStorage.getItem('cooperation_token')
         };
     });
    useEffect(()=> {
    if(!token) {
        toast.error('Session expire, Log in again');
        navigate('/', { replace: true });
        } else {
            let id = setTimeout(() => {
                localStorage.clear();
                
            }, 86400000);
            return () => {
                clearTimeout(id)
            }
        }


},[token])
     return <>
         <TokenContext.Provider value={[token]}>
             {children}
         </TokenContext.Provider>
     </>
}