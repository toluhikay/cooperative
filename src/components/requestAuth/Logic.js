import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

 export default function RequestAuth({children}){
    const navigate = useNavigate()
const [token] = useState(()=> {
    return {
        token: localStorage.getItem('cooperation_token')
    }
})
useEffect(()=> {
    if(!token.token) {
    navigate('/', {replace: true})
    }

})
return <>
    {children}
    </>
 }