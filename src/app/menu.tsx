import Link from 'next/link';


export default function Menu(){
    return(
       
             <div className="  flex-1 flex justify-end items-center font-medium  gap-5 ">
                   <Link href="/" className="hover:underline text-2xl">Work</Link>
                   <Link href="/about" className="hover:underline text-2xl">About</Link>
                   <Link href="/service" className="hover:underline text-2xl">Our Services</Link>
                   <Link href="/project" className="hover:underline text-2xl">Projects</Link>
                   <button className=' bg-black text-white text-2xl pt-9 pb-9 pl-14 pr-14 rounded-2xl '><Link href="/contact">Contact Me</Link></button>
             </div>
       
    )
}