



export default function Home() {
  return (
    <div className="m-10 mt-70 flex flex-col gap-25">
       <div className=" flex flex-col gap-10 md:flex-row md:gap-100" >
          <div className="   font-serif flex flex-col gap-10 md:w-1/2">
            <div className="text-6xl">My Services</div> 
            <div className="font-serif text-2xl leading-10">
               It all starts with a vision. Maybe you want to build a sleek, modern website. Maybe you want to craft a seamless user experience that stands out. Or maybe you have a bold idea to transform digital interactions. Whatever it is, the way you design and develop your project can shape its success.    
            </div>
          </div>
          <div className="  flex flex-col md:w-1/2 gap-50 text-2xl font-sans">
            <div className="flex flex-col gap-12">
                <div className="text-3xl font-serif">Web development .</div>
                <div className="font-serif leading-10">
                   It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
               </div>
             </div>   

              <div className="flex flex-col gap-10">
                <div className="text-3xl font-serif">Mobile app development.</div>
                <div className=" font-serif leading-10">
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
               </div>
             </div>   
 
              <div className="flex flex-col gap-7">
                <div className="text-3xl font-serif">UI/UX design .</div>
                <div className=" font-serif leading-10">
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
               </div>
             </div>         
          </div>
       </div>

        {/* image */}
       <div className="flex ">
         <div className="h-200 w-full">
            <img src="/img/img07.jpg" 
                  alt="about_us"  
                  className="w-full h-full object-cover"
            />
         </div>
       </div>
    
    </div>
  );
}

  