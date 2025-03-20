import Link from "next/link";



export default function Footer() {
        return (
            <div className="md:flex md:w-full md:m-10 font-serif md:object-cover ">
               <div className="w-1/4 md:flex md:flex-col md:gap-9 h-full ">
                    <div className="font-serif text-5xl md:text-3xl">
                       Yann D.O
                    </div>
                    <div className=" md:text-xl">
                        221B Baker Street<br/>
                        London, UK
                    </div>
                    <div className="md:text-xl " >
                    Made with  <Link href="#" className="underline">Squarespace</Link>
                    </div>
               </div>

             {/* saut */}
                <div className="  flex  md:flex-1 md:justify-end md:gap-20 ">
                    <div className="flex flex-col gap-10 ">
                        <div className="font-serif text-5xl">
                            About
                        </div>
                        <div className="flex flex-col gap-2 md:text-xl lg:text-2xl">
                            <Link href="/" className="underline ">Work</Link>
                            <Link href="/about" className="underline ">Who I am</Link>
                            <Link href="/contact" className="underline "> Contact Me</Link>
                        </div>
                
                    </div>
                    
                    <div className="flex flex-col gap-10 ">
                        <div className="font-serif text-5xl ">
                           Projects
                        </div>
                        <div className="flex flex-col mr-30 md:text-xl lg:text-2xl gap-2 object-cover">
                            <Link href="/web_projects" className="underline">Web Projects</Link>
                            <Link href="/mobile_projects" className="underline">Mobile Projects</Link>
                            <Link href="/design_projects" className="underline"> UX/UI Projects</Link>
                       </div>
                    </div>
                </div>
            </div>
        );
    }