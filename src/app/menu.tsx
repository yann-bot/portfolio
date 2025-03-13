import Link from 'next/link';


export default function Menu(){
    return(
        <div className='flex flex-col'>
             <img src="https://vercel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvercel.svg&w=256&q=75" alt="" />

             <div className="pt-12 flex font-medium flex-col gap-1">
                   <Link href="/" className="hover:underline">Work</Link>
                   <Link href="/about" className="hover:underline">About</Link>
                   <Link href="/service" className="hover:underline">Our Services</Link>
                   <Link href="/project" className="hover:underline">Projects</Link>
                   <button><Link href="/contact">Contact Me</Link></button>
             </div>
        </div>
    )
}