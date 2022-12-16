import Card from "../../components/cardui"

export default function MemberDetails(){

  const accountDetails = [
    {id:1, name:'Shared Capital Account', acr:'SCA', amount:'25,000'},
    {id:2, name:'Thrift Saving Account', acr:'TSA', amount:'40,000'},
    {id:3, name:'Special Deposit Account', acr:'SDA', amount:'600,000'},
    {id:4, name:'Commodity Trading', acr:'CT', amount:'600,000'},
    {id:5, name:'Loan Account', acr:'LA', amount:'50,000'},
    {id:6, name:'Project Account', acr:'PA', amount:'30,000'},
    {id:7, name:'Total Contribution', acr:'TC', amount:'6,000'},
    {id:8, name:'Last Transaction', acr:'LT', amount:'890,000'},
  ]

    return(
    <div>    
        <div class="mt-4">
          <div class="lg:w-[90%] h-full grid gap-4 justify-items-center content-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            <Card cardData={accountDetails}/>
          </div>
        </div>  
      </div>
      )
}



