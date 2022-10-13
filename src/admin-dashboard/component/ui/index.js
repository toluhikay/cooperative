export default function AdminCard({ cardData }) {
  if (!cardData) return;
  function renderKeys() {
    return Object.entries(cardData).map((data,id) => {
       return <div class="px-6 mt-6 sm:mt-0 cursor-pointer" key={id}>
            <div
              class="flex items-center h-36 px-5 py-6 bg-white rounded-md shadow-sm"
              >
              <div class="lg:w-56">
                <h4 class="text-lg font-semibold text-gray-700 my-2">{data[0]}</h4>
                <div class="text-gray-500 text-base">{data[1]}</div>
              </div>
            </div>
          </div>
      })
  }
  return (<>{renderKeys()}</>)
};