import axios from './BaseURL'


export const LoginReq = async (values, funct =(res)=>{}) => {
const data = JSON.stringify(values)
try {
    const response = await axios.post('/auth/login',data,{
        headers:{   
        "Content-Type": "application/json"
        },
    })
    funct(response)
    
} catch (error) {
    console.log(error)
}
}