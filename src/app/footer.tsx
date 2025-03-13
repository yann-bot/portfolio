



export default function Footer() {
        return (
            <div className="flex w-full m-10 ">
               <div className="w-1/2 flex flex-col gap-10 ">
                    <div className="font-serif text-5xl">
                       Bergen
                    </div>
                    <div>
                        123 Demo Street<br/>
                        Brooklyn, NY 12345
                    </div>
                    <div>
                    Made with Squarespace
                    </div>
               </div>

             {/* saut */}
                <div className=" flex w-1/2 justify-end ">
                    <div>
                        <div className="font-serif text-5xl">
                            Bergen
                        </div>
                        <div>
                            Work
                            Who We Are
                            Contact Us
                        </div>
                
                    </div>
                    
                    <div className="">
                        <div className="font-serif text-5xl">
                            Bergen
                        </div>
                        <div>
                            Work
                            Who We Are
                            Contact Us
                       </div>

                    </div>
                </div>
            </div>
        );
    }