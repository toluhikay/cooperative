import { useRef, useState } from "react";

  

export function FilteredTable(props) {
	const { data, table_head, render_body, page, prev, next } = props;
	console.log(props);

	const [value, setValue] = useState("");

	function SearchDetails() {
		if (!data) return;
		if (!data.results) {
			return data?.filter((data) =>
				Object.values(data)
					.toString()
					.toLowerCase()
					.includes(value.toLowerCase()),
			);
		}
		return data?.results?.filter((data) =>
			Object.values(data)
				.toString()
				.toLowerCase()
				.includes(value.toLowerCase()),
		);
	}

	return (
		<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
			<div className="p-4 bg-white">
				<label for="table-search" class="sr-only">
					Search
				</label>
				<div className="relative mt-1">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							className="w-5 h-5 text-gray-500"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"></path>
						</svg>
					</div>
					<input
						type="text"
						onChange={(e) => setValue(e.target.value)}
						id="table-search"
						class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
						placeholder="Search for items"
					/>
				</div>
			</div>
			<table className="w-full">
				<thead className="">
					<tr>{table_head}</tr>
				</thead>
				<tbody className="bg-white">{render_body(SearchDetails())}</tbody>
				{/* <td className="h-16 bg-green-900"></td> */}
			</table>
			<nav
				className="flex justify-end items-center bg-white p-4"
				aria-label="Table navigation">
				<ul className="inline-flex items-center -space-x-px">
					<li>
						<button
							type="button"
							disabled={page === 1 ? true : false}
							onClick={prev}
							className="flex py-2 px-3 ml-0 leading-tight text-gray-700 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clip-rule="evenodd"></path>
							</svg>
							Previous
						</button>
					</li>

					<li>
						<button
							onClick={next}
							className="flex py-2 px-3 leading-tight text-gray-700 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
							<span className="">Next</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"></path>
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export function Table({ render_body, render_head }) {

  function SearchDetails() {
    return render_body.filter((data)=>console.log(data) )
  }
  
  // const [data, setData] = useState();

  return (
   
      <table className="w-full">
        <thead className="">
          
          <tr>{render_head}</tr>
        </thead>
        <tbody className="bg-white">{render_body}</tbody>
        {/* <td className="h-16 bg-green-900"></td> */}
      </table>
      
)

}
