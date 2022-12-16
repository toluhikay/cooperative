import MemberDetails from "../memberdetails"
import { Routes,Route } from "react-router-dom"
import Accountdetails from "../accountdetails"
import UserProfile from "../profile"
import Header from "../header"
import CForms from "../forms"
import Settings from "../setting"
import { useLocation } from "react-router-dom"




export default function MainSection(){  
    const location = useLocation()
    return (
                <>
                {/* <Header/> */}
                <Routes>
                <Route path={(location.pathname === 'dashboard/' || location.pathname === '/member-details') && '/member-details'} index element={<MemberDetails/>}></Route>
                <Route path='/member-details' element={<MemberDetails/>}></Route>
                <Route path='/account-details'  element={<Accountdetails/>}></Route>
                <Route path='/profile'  element={<UserProfile/>}></Route>
                <Route path='/forms'  element={<CForms/>}></Route>
                <Route path='/setttings'  element={<Settings/>}></Route>
                </Routes>
                </>
            )
                }