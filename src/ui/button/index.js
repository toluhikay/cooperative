export function Button({name, type}){
return <button
type={type}
class='w-full px-4 py-3 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500'>{name}</button>
}


export function LoaderButton({type,name, loading}){
    return <button
    type={type}
    class='w-full px-4 py-3 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500'>{!loading ? name: <div
        class='spinner-border animate-spin inline-block w-6 h-6 border-2 rounded-full border-t-indigo-600'
        role='status'>
        <span class='visually-hidden '></span>
      </div>}</button>
}


