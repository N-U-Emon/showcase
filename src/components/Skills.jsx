import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoJquery,
} from "react-icons/bi";
import { FaCss3Alt, FaBootstrap, FaWordpress } from "react-icons/fa";
//import anime from "animejs/lib/anime.es.js";
function Skills() {
   function animeBg() {
     anime({
       targets: ".square, .circle, .triangle",
       translateX: function () {
         return anime.random(-500, 500);
       },
       translateY: function () {
         return anime.random(-500, 500);
       },
       rotate: function () {
         return anime.random(0, 360);
       },
       scale: function () {
         return anime.random(0.1, 1);
       },
       duration: 2000,
       easing: "easeInOutQuad",
       complete: animeBg,
     });
   }
  return (
    <section id="skills">
      <div className="py-10 text-center">
        <h3 class="mb-4 text-3xl  font-extrabold  md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            My Skills
          </span>
        </h3>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          What I learned! Below the skills listed
        </p>
      </div>
      <div className="grid grid-cols-2 my-12 text-5xl text-white gap-7 sm:gap-10 sm:grid-cols-4 md:text-6xl lg:text-7xl justify-items-center xl:text-9xl">
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad] ">
          <AiFillHtml5
            className=" transition duration-300 ease-linear  
            fill-gray-600 hover:fill-[#E44D26] 
            dark:fill-white dark:hover:fill-[#F16529] hover:scale-125"
          />
        </div>
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad]">
          <FaCss3Alt
            className="transition duration-300 ease-linear 
                     fill-gray-600 hover:fill-[#1172B8] 
                     dark:fill-white dark:hover:fill-[#33AADD] hover:scale-125"
          />
        </div>
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad]">
          <FaBootstrap
            className="transition duration-300 ease-linear 
                     fill-gray-600 hover:fill-[#8612FB] 
                     dark:fill-white dark:hover:fill-[#8612FB] hover:scale-125"
          />
        </div>
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad]">
          <BiLogoTailwindCss
            className="transition duration-300 ease-linear 
                     fill-gray-600 hover:fill-[#44a8b3] 
                     dark:fill-white dark:hover:fill-[#44a8b3] hover:scale-125"
          />
        </div>
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad]">
          <BiLogoJavascript
            className="transition duration-300 ease-linear 
                     fill-gray-600 hover:fill-[#F7DF1E]
                     dark:fill-white dark:hover:fill-[#F7DF1E] hover:scale-125"
          />
        </div>
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad]">
          <BiLogoReact
            className="transition duration-300 ease-linear 
                     fill-gray-600 hover:fill-[#149eca]
                     dark:fill-white dark:hover:fill-[#149eca] hover:scale-125"
          />
        </div>
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad]">
          <BiLogoJquery
            className="transition duration-300 ease-linear 
                     fill-gray-600 hover:fill-[#0769AD]
                     dark:fill-white dark:hover:fill-[#78CFF5] hover:scale-125"
          />
        </div>
        <div className="p-10 text-center shadow-md rounded-xl dark:bg-gradient-to-r from-cyan-900 to-teal-900 shadow-[#4b5563] dark:shadow-[#464bad]">
          <FaWordpress
            className="transition duration-300 ease-linear 
                     fill-gray-600 hover:fill-[#23282D]
                     dark:fill-white dark:hover:fill-[#028CB0] hover:scale-125"
          />
        </div>
      </div>
      {/* <div class="anime_bg">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>

        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>

        <div class="triangle"></div>
        <div class="triangle"></div>
        <div class="triangle"></div>
        <div class="triangle"></div>
        <div class="triangle"></div>
      </div>
      {animeBg()} */}
    </section>
  );
}

export default Skills;
