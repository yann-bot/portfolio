import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 mt-60" >
         <div className="flex flex-col justify-center items-center gap-10  ">
             <div className="text-2xl font-serif mb-10">My Mission</div>
                 <div className="text-black text-4xl md:text-6xl font-serif leading-tight text-center">
                       Creating <br/> simple,  effective<br/> solutions tailored to the essential.
               </div>   
         </div>
         {/* Fist section */}
         <div className="  flex flex-col w-screen ">
            <div className='  h-200 m-10'>
                   <img src="/img/img01.jpg"   alt=""  className='w-full h-full object-cover'  />    
            </div>
            <div className='flex items-center  m-10  justify-between p-4 pl-0'>
               <div className='flex flex-col gap-12 pt-10 pb-10 pr-10'>
                  <div className='font-serif text-5xl'>Web Projects</div>
                  <div className='font-serif text-2xl'>Apartments, homes and vacation properties.</div>
               </div>
               <button className=' bg-black text-white text-2xl pt-7 pb-7 pl-12 pr-12 rounded-xl '><Link href="/contact">See Project</Link></button>
            </div>
         </div>
         {/* Second section */}
         <div className="  flex flex-col w-screen ">
            <div className='  h-200 m-10'>
                   
                   <img src="/img/img07.jpg"   alt=""  className='w-full h-full object-cover'  />    
            </div>
            <div className='flex items-center  m-10  justify-between p-4 pl-0'>
               <div className='flex flex-col gap-12 pt-10 pb-10 pr-10'>
                  <div className='font-serif text-5xl'>Mobile Projects</div>
                  <div className='font-serif text-2xl'>Creative and inviting retail and hospitality environments.</div>
               </div>
               <button className=' bg-black text-white text-2xl pt-7 pb-7 pl-12 pr-12 rounded-xl '><Link href="/contact">See Project</Link></button>
            </div>
         </div>
         {/* Third section */}
         <div className="  flex flex-col w-screen ">
            <div className='  h-200 m-10'>
                   <img src="/img/img11.jpeg"   alt=""  className='w-full h-full object-cover'  />    
            </div>
            <div className='flex items-center  m-10  justify-between p-4 pl-0'>
               <div className='flex flex-col gap-12 pt-10 pb-10 pr-10'>
                  <div className='font-serif text-5xl'>UI/UX Projects</div>
                  <div className='font-serif text-2xl'>Temporary and permanent branded spaces.</div>
               </div>
               <button className=' bg-black text-white text-2xl pt-7 pb-7 pl-12 pr-12 rounded-xl '><Link href="/contact">See Project</Link></button>
            </div>
         </div>

    </div>
  );
}
