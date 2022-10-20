import { Link } from "react-router-dom";

export default function AdminCard({ cardData }) {

  const card_heading = ['Thrift Savings', 'Share Capital', 'Fine Statement', 'Loan Statement', 'Project Financing', 'Special Deposit', 'Commodity Trading'];



  if (!cardData) return;
  function renderKeys() {
    return Object.entries(cardData).map((data,id) => {
      return <Link to={`${data[0]}`} class="block px-6 mt-6 sm:mt-0 cursor-pointer" key={id}>
            <div
              class="flex items-center h-36 px-5 py-6 bg-white rounded-md shadow-sm"
              >
              <div class="lg:w-56">
                <h4 class="text-lg font-semibold text-gray-700 my-2">{card_heading[id]}</h4>
                <div class="text-gray-500 text-base">{data[1]}</div>
              </div>
            </div>
          </Link>
      })
  }
  return (<>{renderKeys()}</>)
};


export function FullPageLoader() {
  return (
    <div className="h-screen w-screeen flex items-center justify-center">
       <div
        class='spinner-border animate-spin  inline-block w-16 h-16 border-2 rounded-full border-t-indigo-600 border-b-indigo-600'
        role='status'>
        <span class='visually-hidden '></span>
      </div>
    </div>
  )
}