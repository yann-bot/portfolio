import Link from "next/link";



export default function Footer() {
        return (
            <div className="flex w-full m-10 font-serif object-cover ">
               <div className="w-1/2 flex flex-col gap-10 ">
                    <div className="font-serif text-5xl">
                       Yann D.O
                    </div>
                    <div className="text-2xl">
                        221B Baker Street<br/>
                        London, UK
                    </div>
                    <div className="text-2xl" >
                    Made with  <Link href="#" className="underline">Squarespace</Link>
                    </div>
               </div>

             {/* saut */}
                <div className=" flex w-1/2 justify-end gap-20">
                    <div className="flex flex-col gap-10">
                        <div className="font-serif text-5xl">
                            About
                        </div>
                        <div className="flex flex-col gap-2 text-2xl">
                            <Link href="/" className="underline">Work</Link>
                            <Link href="/about" className="underline">Who I am</Link>
                            <Link href="/contact" className="underline"> Contact Me</Link>
                        </div>
                
                    </div>
                    
                    <div className="flex flex-col gap-10">
                        <div className="font-serif text-5xl ">
                           Projects
                        </div>
                        <div className="flex flex-col mr-30 text-2xl gap-2 object-cover">
                            <Link href="#" className="underline">Web Projects</Link>
                            <Link href="#" className="underline">Mobile Projects</Link>
                            <Link href="#" className="underline"> UX/UI Projects</Link>
                           
                       </div>

                    </div>
                </div>
            </div>
        );
    }