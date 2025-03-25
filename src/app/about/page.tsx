

export default function About() {
  return (
    <div className="m-10  mt-30 md:mt-70 flex flex-col gap-40">
       <div className="flex flex-col gap-5 md:flex-row ">
          <div className="   text-5xl md:w-1/2 font-serif">
             Who I am? 
          </div>
          <div className=" flex flex-col font-serif gap-4 text-2xl md:w-1/2 md:text-3xl  ">
            <div className=" text-left tracking-wide leading-8 md:leading-10 ">
                Passionate about coding and design, I am a web developer and designer specializing in creating modern, seamless, and intuitive digital experiences. Combining creativity and technical expertise, I design aesthetic and functional interfaces that meet the needs of users and businesses.
            </div>
        
           <div className=" text-left tracking-wide leading-8 md:leading-10 ">
               With proficiency in technologies such as HTML, CSS, JavaScript, React, and Node.js, as well as design tools like Figma, I turn ideas into high-performing digital products. My user-centered approach allows me to deliver elegant and optimized solutions, balancing performance, accessibility, and clean design.
            </div>
            <div className=" text-left tracking-wide leading-8 md:leading-10 ">
                Always seeking innovation, I strive to incorporate the latest web and design trends into my projects. My goal: to create engaging and effective interactive experiences by merging technology and aesthetics to deliver real impact.

            </div>
        
          </div>
       </div>

        {/* image */}
       <div className="flex   md:justify-end ">
         <div className=" h-100 md:w-1/2 md:h-200 ">
            <img src="/img/img12.jpg" 
                  alt="about_us"  
                  className="w-full h-full obejct-cover"
            />
         </div>
       </div>
    
    </div>
  );
}
