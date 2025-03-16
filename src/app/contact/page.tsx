import Link from "next/link";
import { FaFacebookF,FaInstagram, FaTwitter } from "react-icons/fa";



export default function About() {
  return (
    <div className="m-10 mt-70 flex flex-col gap-40">
       <div className="flex  ">
          <div className=" flex flex-col w-1/2  font-serif  gap-10">
            <div className="text-5xl">Contact Us</div>
            <div className="text-2xl font-serif leading-10">If you have any questions or comments, please contact us via email<br/>or phone, or send us a message using the contact form.</div>
             <div className="flex flex-col gap-2" >
               <p className="text-2xl font-serif font-bold">  Email</p>
               <p className="text-xl">yannouafete@gmail.com</p>
             </div>
             <div className="flex flex-col gap-2" >
               <p className="text-2xl font-serif font-bold">Phone</p>
               <p className="text-xl">(236)74024015</p>
             </div>
             <div className="flex  gap-3 mt-10" >
               <Link href="#" className="text-3xl"><FaFacebookF /></Link>
               <Link href="#" className="text-3xl"><FaInstagram /></Link>
               <Link href="#" className="text-3xl"><FaTwitter /></Link>
                 
             </div>
             
           </div>

          <div className="w-1/2 flex flex-col gap-4 text-3xl font-serif border ">
            <div className="leading-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        
           <div className="leading-10">
          
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
               laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
               beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
               consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
               adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.
            </div>
          </div>
       </div> 
    </div>
  );
}
