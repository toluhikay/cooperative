import {useState} from 'react'
import TotalContributionStatment from '../../components/accountdetailsComp/totalcontribution';
import CommodityTradingStatement from '../../components/accountdetailsComp/commoditytrading';
import FineAccount from '../../components/accountdetailsComp/fineaccount';
import Button from "../../components/button"
import LoanAccount from '../../components/accountdetailsComp/loanaccount';
import ProjectFinancing from '../../components/accountdetailsComp/projectfinancing';


export default function Accountdetails(){
 const [section,setSection] = useState(1);

 function TCASPage(){
     setSection(1)
 }

 function CTPage(){
     setSection(2)
 }
 function FAPage(){
     setSection(3)
 }
 function LAPage(){
     setSection(4)
 }
 function PFPage(){
     setSection(5)
 }
 
 
 

    const styles = 'cursor-pinter py-3 rounded-md px-8 text-white bg-indigo-800';

    return <section className="h-screen w-full bg-red-900">
        <article className="container h-full">

            <div className=" h-36 w-full flex justify-evenly items-center">
                <Button type='button' styles={styles} getPage={TCASPage} id='TCAS' title='Total contribution account statement'  btn="Total CA statement"/>
                <Button type='button' getPage={CTPage} styles={styles} title='CT' id='ct'  btn="Commodity trading"/>
                <Button type='button' getPage={FAPage} styles={styles} title='FA' id='fa' btn="Fine account"/>
                <Button type='button' getPage={LAPage} styles={styles} title='LA' id='la' btn="Loan account"/>
                <Button type='button' getPage={PFPage} styles={styles} title='PF' id='pf' btn="Project financing"/>
            </div>
            <div>
                <div className=''>
                {section === 1 &&<TotalContributionStatment />}
                {section === 2 && <CommodityTradingStatement/>}
                {section === 3 && <FineAccount/>}
                {section === 4 && <LoanAccount/>}
                {section === 5 && <ProjectFinancing/>}
                </div>

                
                {/* <AccountdetailsComp /> */}
            </div>
        </article>
    </section>
}