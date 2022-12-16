
export default function userProfile(){
    return <section>
        <article className="container bg-blue-900 mx-auto">
            <div>
                <div className="bg-green-500  h-screen w-full">
                    {/* image icon for user */}
                    {/* edit profile button below the image icon */}
                    {/* user information underneat the all */}
                    <div className="w-1/2 h-56 mt-10 bg-green-900 mx-auto">
                        {/* image icon */}
                    </div>
                    <div className="w-1/2 py-6 mx-auto grid grid-cols-3 gap-y-6 ">
                        <div>
                        <span className="font-bold text-xl">Full name</span>
                        <h1> Thomas Ejembi</h1>
                        </div>
                        <div>
                        <span className="font-bold text-xl">Email address</span>
                        <h1> ejembithomas61@gmail.com</h1>
                        </div>



                        <div>
                        <span className="font-bold text-xl">Phone number</span>
                        <h1 className="text-lg">08171315756</h1>

                        </div>
                        <div>
                        <span className="font-bold text-xl">Location</span>
                        <h1> Abuja,Nigeria</h1>
                        </div>

                        <div>
                            <span className="font-bold text-xl">Next of Kin</span>
                        <h1>Kay Kay</h1>
                        </div>
                        {/* next of kin */}
                    </div>
                    <div>
                        <button>Update details</button>
                    </div>
                </div>
                {/* <div></div> */}
            </div>
        </article>
        </section>
}