import { Children } from "react";

export function logout(){
    localStorage.clear()
 }
export default function AppIdle(){

function logout_Idle(){
        let time;
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onKeypess = resetTimer;

    function resetTimer(){
        clearTimeout(time)
        time = setTimeout(logout,5000)
    }
    }


    return <></>



}