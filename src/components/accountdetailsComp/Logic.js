
  

export function Table({render_body,render_head}){
return(
                <table  class="min-w-full">
                  <thead className=""><tr>{render_head}</tr></thead> 
                  <tbody class="bg-white">{render_body}</tbody>
                   {/* <td className="h-16 bg-green-900"></td> */}
                  </table>)

}
