import toast from "react-hot-toast";
import axios from './BaseURL';

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


export const ForgetReq = async (values, funct =(res)=>{}) => {
    const data = JSON.stringify(values)
    try {
    
        const response = await fetch('https://refiners-cooperative-api.herokuapp.com/api/v1/auth/forgot-password',{
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

    export async function ResetPasswordReq(values,funct=(res)=>{}){
        const data = JSON.stringify(values)
        try {
        
            const response = await fetch('https://refiners-cooperative-api.herokuapp.com/api/v1/auth/forgot-password',{
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


    export async function RegisterMember(value,funct=(res)=>{}){
        const data = JSON.stringify(value)
        try {
        
            const response = await fetch('https://refiners-cooperative-api.herokuapp.com/api/v1/auth/create-user',{
                method:'POST',
                body:data,
                headers:{   
                "Content-Type": "application/json"
                },
            })
    
            funct(response.json())
            
        } catch (error) {
            if(!error) return 
            const message = error.message
            toast.error(message)
        }

    }