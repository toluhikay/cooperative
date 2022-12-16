import { Link } from "react-router-dom"

export function displayPath(paths){
    return paths.map(({name, path,id})=> {
    return (
        <nav className="mt-10" key={id}>
        <Link
        className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
        to={path}
        >
        <svg
          className="w-5 h-5 text-indigo-700"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
            fill="currentColor"
            />
          <path
            d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
            fill="currentColor"
            />
        </svg>
    
        <span className="mx-4 text-white">{name}</span>
      </Link>
                
                </nav>
    )
    })
}