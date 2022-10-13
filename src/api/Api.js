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

    export async function ResetPasswordReq(values,funct=(res)=>{},token){
        const data = JSON.stringify(values)
        try {
        
            const response = await fetch('https://refiners-cooperative-api.herokuapp.com/api/v1/auth/forgot-password',{
                method:'POST',
                body:data,
                headers:{   
                    "Content-Type": "application/json",
                    "Authorization":`bearer ${token}`,
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

    export async function GetMembers( page,funct=(res)=>{}, token){
        try {
        
            const response = await fetch(`https://refiners-cooperative-api.herokuapp.com/api/v1/members?page=${page}&limit=10`,{
                method:'GET',
                headers:{   
                "Content-Type": "application/json",
                    'Authorization': `bearer ${token}`
                },
            })
    
            funct(response.json())
            
        } catch (error) {
            if(!error) return 
            const message = error.message
            toast.error(message)
        }

    }


    export async function GetAccountSummary(funct=(res)=>{},token){
        try {
        
            const response = await fetch('https://refiners-cooperative-api.herokuapp.com/api/v1/members/member-account-summaries',{
                method:'GET',
                headers:{   
                "Content-Type": "application/json",
            "Authorization":`bearer ${token}`
                },
            })
    
            funct(response.json())
            
        } catch (error) {
            if(!error) return 
            const message = error.message
            toast.error(message)
        }

    }

    export async function GetMemberAccountSummary(funct=(res)=>{},token){
        try {
        
            const response = await fetch('https://refiners-cooperative-api.herokuapp.com/api/v1/members/member-account-summaries',{
                method:'GET',
                headers:{   
                "Content-Type": "application/json",
            "Authorization":`bearer ${token}`
                },
            })
    
            funct(response.json())
            
        } catch (error) {
            if(!error) return 
            const message = error.message
            toast.error(message)
        }

    }


export async function GetMemberAccount(name, funct = (res) => { }, token) {
        try {
        
            const response = await fetch(`https://refiners-cooperative-api.herokuapp.com/api/v1/members/account-total/details?account=${name}`,{
                method:'GET',
                headers:{   
                "Content-Type": "application/json",
            "Authorization":`bearer ${token}`
                },
            })
    
            funct(response.json())
            
        } catch (error) {
            if(!error) return 
            const message = error.message
            toast.error(message)
        }

    }




     