import MemberDetails from "../memberdetails"
import { Routes,Route } from "react-router-dom"
import Accountdetails from "../accountdetails"
import UserProfile from "../profile"
import Header from "../header"
import CForms from "../forms"
import Settings from "../setting"




export default function MainSection({paths}){  
            return (
                <>
                {/* <Header heading={paths.header}/> */}
                <Routes>
                <Route path='/member-details' index element={<MemberDetails/>}></Route>
                <Route path='/account-details'  element={<Accountdetails/>}></Route>
                <Route path='/profile'  element={<UserProfile/>}></Route>
                <Route path='/forms'  element={<CForms/>}></Route>
                <Route path='/setttings'  element={<Settings/>}></Route>
                </Routes>
                </>
            )
                }