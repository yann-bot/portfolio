

export default function About() {
  return (
    <div className="m-10 mt-70 flex flex-col gap-40">
       <div className="flex ">
          <div className="w-1/2 text-5xl font-serif">
             Who We Are? 
          </div>
          <div className="w-1/2 flex flex-col gap-4 text-3xl font-serif ">
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

        {/* image */}
       <div className="flex justify-end ">
         <div className="w-1/2 h-200">
            <img src="/img/img12.jpg" 
                  alt="about_us"  
                  className="w-full h-full obejct-cover"
            />
         </div>
       </div>
    
    </div>
  );
}
