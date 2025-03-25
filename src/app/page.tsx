import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col gap-12 mt-60" >
         <div className="flex flex-col justify-center items-center gap-10  ">
             <div className="text-2xl font-serif mb-10">My Mission</div>
                 <div className="text-black text-4xl md:text-6xl font-serif leading-tight text-center">
                       Creating <br/> simple,  effective<br/> solutions tailored to the essential.
               </div>   
         </div>

         {/* First section */}
         <div className="  flex flex-col w-screen ">
            <div className=" h-200 m-10 mb-2">
                   <img src="/img/img01.jpg"   alt=""  className="w-full h-full object-cover"  />    
            </div>
            <div className="flex flex-col  items-end md:items-center md:flex-row    m-10 mt-2 justify-between p-4 pt-0 pl-0">
               <div className="flex flex-col w-full  gap-5 md:gap-12 pt-10 pb-10 pr-10">
                  <div className="font-serif text-2xl  md:text-5xl">Web Projects</div>
                  <div className="font-serif text-xl md:text-2xl">Apartments, homes and vacation properties.</div>
               </div>
               <button className="bg-black text-white px-9 py-6 rounded-md hover:bg-gray-900 transition whitespace-nowrap"> <Link href="/design_projects">See Project</Link></button>
            </div>
         </div>

         {/* Second section */}
         <div className="flex flex-col w-screen ">
            <div className="h-200 m-10 mb-2">
                   <img src="/img/img07.jpg"   alt=""  className="w-full h-full object-cover"  />    
            </div>
            <div className="flex flex-col  items-end md:items-center md:flex-row    m-10 mt-2 justify-between p-4 pt-0 pl-0">
               <div className="flex flex-col w-full  gap-5 md:gap-12 pt-10 pb-10 pr-10">
                  <div className="font-serif text-2xl  md:text-5xl">Mobile Projects</div>
                  <div className="font-serif text-xl md:text-2xl">Apartments, homes and vacation properties.</div>
               </div>
               <button className="bg-black text-white px-9 py-6 rounded-md hover:bg-gray-900 transition whitespace-nowrap"> <Link href="/design_projects">See Project</Link></button>
            </div>
         </div>

         {/* Third section */}
         <div className="  flex flex-col w-screen ">
            <div className=" h-200 m-10 mb-2">
                   <img src="/img/img11.jpg"   alt=""  className="w-full h-full object-cover"  />    
            </div>
            <div className="flex flex-col  items-end md:items-center md:flex-row    m-10 mt-2 justify-between p-4 pt-0 pl-0">
               <div className="flex flex-col w-full  gap-5 md:gap-12 pt-10 pb-10 pr-10">
                  <div className="font-serif text-2xl  md:text-5xl">UI/UX Projects</div>
                  <div className="font-serif text-xl md:text-2xl">Apartments, homes and vacation properties.</div>
               </div>
               <button className="bg-black text-white px-9 py-6 rounded-md hover:bg-gray-900 transition whitespace-nowrap"> <Link href="/design_projects">See Project</Link></button>
            </div>
         </div>

    </div>
  );
}
