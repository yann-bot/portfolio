import Link from "next/link";



export default function Footer() {
        return (
            <div className="flex w-full m-10 ">
               <div className="w-1/2 flex flex-col gap-10 ">
                    <div className="font-serif text-5xl">
                       Bergen
                    </div>
                    <div className="text-2xl">
                        123 Demo Street<br/>
                        Brooklyn, NY 12345
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
                            <Link href="/about" className="underline">Who We Are</Link>
                            <Link href="/contact" className="underline"> Contact Us</Link>
                        </div>
                
                    </div>
                    
                    <div className="flex flex-col gap-10">
                        <div className="font-serif text-5xl ">
                           Projects
                        </div>
                        <div className="flex flex-col mr-30 text-2xl gap-2 object-cover">
                            <Link href="#" className="underline">Residentiel Design</Link>
                            <Link href="#" className="underline">Commercial Design</Link>
                            <Link href="#" className="underline"> Experiential Design</Link>
                           
                       </div>

                    </div>
                </div>
            </div>
        );
    }