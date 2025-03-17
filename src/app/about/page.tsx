

export default function About() {
  return (
    <div className="m-10 mt-70 flex flex-col gap-40">
       <div className="flex ">
          <div className="w-1/2 text-5xl font-serif">
             Who I am? 
          </div>
          <div className="w-1/2 flex flex-col gap-4 text-3xl font-serif ">
            <div className="leading-10">
                Passionate about coding and design, I am a web developer and designer specializing in creating modern, seamless, and intuitive digital experiences. Combining creativity and technical expertise, I design aesthetic and functional interfaces that meet the needs of users and businesses.
            </div>
        
           <div className="leading-10">
               With proficiency in technologies such as HTML, CSS, JavaScript, React, and Node.js, as well as design tools like Figma, I turn ideas into high-performing digital products. My user-centered approach allows me to deliver elegant and optimized solutions, balancing performance, accessibility, and clean design.
            </div>
            <div className="leading-10">
                Always seeking innovation, I strive to incorporate the latest web and design trends into my projects. My goal: to create engaging and effective interactive experiences by merging technology and aesthetics to deliver real impact.

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
