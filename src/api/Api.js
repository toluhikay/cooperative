import toast from "react-hot-toast"

export const LoginReq = async (values, funct =(res)=>{}) => {
const data = JSON.stringify(values)
try {
    const response = await fetch('https://refiners-cooperative-api.herokuapp.com/api/v1/auth/login',{
        method:'POST',
        body:data,
        headers:{   
        "Content-Type": "application/json"
        },
    })
    funct(response.json())
    
} catch (error) {
    console.log(error)
    if(!error) return 
    const message = error.response.data.message
    toast.error(message)
}
}