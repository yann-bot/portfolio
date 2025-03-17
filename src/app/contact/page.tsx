import Link from "next/link";
import { FaFacebookF,FaInstagram, FaTwitter } from "react-icons/fa";



export default function Contact() {
  return (
    <div className="mt-80 flex flex-col mb-90 p-9  bg-black text-white text-2xl p-0">
       <div className="flex  gap-50">
          <div className=" flex flex-col w-1/2  font-serif mt-4 gap-10 ">
            <div className="text-5xl">Contact Us</div>
            <div className="text-2xl font-serif">If you have any questions or comments, please contact us via email or phone, or send us a message using the contact form.</div>
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

          <div className="w-1/2 flex flex-col gap-4 text-2xl text-gray-500 font-serif  border-red-500 p-3  ">
             <form action="" className="flex flex-col   gap-5 p-2">
              <div className="flex flex-col gap-3">
                <div>Name (required)</div>
                <div className="flex gap-2 ">
                    <div className="flex flex-col gap-2 w-1/2 ">
                       <label htmlFor="FirstName">First Name (required)</label>
                       <input type="text" 
                             className=" bg-[#f1f1ef] p-3  rounded-md"
                             required />
                    </div>
                    <div className="flex flex-col w-1/2 gap-2 ">
                      <label htmlFor="LastName">Last Name (required)</label>
                      <input type="text" 
                             className="  bg-[#f1f1ef] p-3  rounded-md"
                             required />
                    </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email (required)</label>
                <input type="email"
                       className="bg-[#f1f1ef] p-3 rounded-md"
                       required />
              </div>
              <div className="flex flex-col gap-2">
                  <label htmlFor="phone">Phone (required)</label>
                  <input type="phone" 
                         className=" bg-[#f1f1ef] p-3  rounded-md"
                         required/>
              </div>
              <div className="flex flex-col gap-2">
                  <label htmlFor="subject">Subject (required)</label>
                  <input type="text" 
                         className="  bg-[#f1f1ef] p-3  rounded-md" 
                         required/>
              </div>
              <div className="flex flex-col gap-2">
                  <label htmlFor="message">Message (required)</label>
                  <textarea name="message" id=""  className=" bg-[#f1f1ef] h-40 rounded-md"></textarea>
              </div>
              <button className="bg-black text-white  w-fit text-2xl pt-6 pb-6 pl-12 pr-12 rounded-xl">
                    Submit
               </button>
              
             </form>
          </div>
       </div> 
    </div>
  );
}
