import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MemberRegistration from "../memberregistration";
import News from '../news';
import AccountSummary from '../accountsummary';
import Overview from "../overview";
import Logout from '../../logout';
import MemberAccount from "../memberaccount";



export default function MainDashboard(){
    const location = useLocation();
    return (
                <>
                <header/>
                <Routes>
                <Route path={(location.pathname === 'admin-dashboard/') && '/account-overview'} index element={<Overview/>}/>
                <Route path='/account-overview' element={<Overview/>}></Route>

                <Route path='/member-registration' element={<MemberRegistration/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/registered-members' element={<AccountSummary/>}/>
                <Route path='/account-overview/:id' element={<MemberAccount/>}/>
                <Route path='/log-out' element={<Logout/>}/>
                </Routes>
                </>
            )
    
}