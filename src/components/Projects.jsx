import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useRef } from "react";

function Projects() {
  const hoverLink1 = useRef(null);
  const hoverLink2 = useRef(null);
  const hoverLink3 = useRef(null);
  const hoverLink4 = useRef(null);
  const hoverLink5 = useRef(null); 
  const hoverLink6 = useRef(null); 



  function hoverArea1() {
    const linkElement = hoverLink1.current;
    linkElement.classList.replace("hidden", "flex");
  }

  function hoverArea2() {
    const linkElement = hoverLink2.current;
    linkElement.classList.replace("hidden", "flex");
  }

  function hoverArea3() {
    const linkElement = hoverLink3.current;
    linkElement.classList.replace("hidden", "flex");
  }
  function hoverArea4() {
    const linkElement = hoverLink4.current;
    linkElement.classList.replace("hidden", "flex");
  }
  function hoverArea5() {
    const linkElement = hoverLink5.current;
    linkElement.classList.replace("hidden", "flex");
  }
  function hoverArea6() {
    const linkElement = hoverLink6.current;
    linkElement.classList.replace("hidden", "flex");
  }

  return (
    <section id="projects">
      <div className="py-10 text-center">
        <h3 class="mb-4 text-3xl  font-extrabold  md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Portfolio
          </span>
        </h3>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here the a few project that I had made.
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
        <div className="relative flex-1 basis-1/3">
          <img
            src={web1}
            alt="web1"
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            onMouseOver={hoverArea1}
          />
          <div
            className="absolute top-0 left-0 right-0 flex-col items-center justify-center hidden w-full h-full gap-4 p-4 rounded-lg bg-gradient-to-b from-emerald-600 to-transparent"
            ref={hoverLink1}
          >
            <h2 class="text-2xl sm:text-3xl font-bold text-white">
              React Admin Dashboard
            </h2>
            <a
              href="https://n-u-emon.github.io/mywebsite/"
              target="_blank"
              class="text-base font-medium text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-linear inline-block"
            >
              Watch Live
            </a>
          </div>
        </div>
        <div className="relative flex-1 basis-1/3">
          <img
            src={web2}
            alt="web1"
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            onMouseOver={hoverArea2}
          />
          <div
            className="absolute top-0 left-0 right-0 flex-col items-center justify-center hidden w-full h-full gap-4 p-4 rounded-lg bg-gradient-to-b from-emerald-600 to-transparent"
            ref={hoverLink2}
          >
            <h2 class="text-2xl sm:text-3xl font-bold text-white">
              React Mortage Calculator
            </h2>
            <a
              href="https://n-u-emon.github.io/mywebsite/"
              target="_blank"
              class="text-base font-medium text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-linear inline-block"
            >
              Watch Live
            </a>
          </div>
        </div>
        <div className="relative flex-1 basis-1/3">
          <img
            src={web3}
            alt="web1"
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            onMouseOver={hoverArea3}
          />
          <div
            className="absolute top-0 left-0 right-0 flex-col items-center justify-center hidden w-full h-full gap-4 p-4 rounded-lg bg-gradient-to-b from-emerald-600 to-transparent"
            ref={hoverLink3}
          >
            <h2 class="text-2xl sm:text-3xl font-bold text-white">
              Tailwindcss Food Website
            </h2>
            <a
              href="https://n-u-emon.github.io/mywebsite/"
              target="_blank"
              class="text-base font-medium text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-linear inline-block"
            >
              Watch Live
            </a>
          </div>
        </div>
        <div className="relative flex-1 basis-1/3">
          <img
            src={web4}
            alt="web1"
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            onMouseOver={hoverArea4}
          />
          <div
            className="absolute top-0 left-0 right-0 flex-col items-center justify-center hidden w-full h-full gap-4 p-4 rounded-lg bg-gradient-to-b from-emerald-600 to-transparent"
            ref={hoverLink4}
          >
            <h2 class="text-2xl sm:text-3xl font-bold text-white">
              Tailwindcss Lading Page
            </h2>
            <a
              href="https://n-u-emon.github.io/mywebsite/"
              target="_blank"
              class="text-base font-medium text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-linear inline-block"
            >
              Watch Live
            </a>
          </div>
        </div>
        <div className="relative flex-1 basis-1/3">
          <img
            src={web5}
            alt="web1"
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            onMouseOver={hoverArea5}
          />
          <div
            className="absolute top-0 left-0 right-0 flex-col items-center justify-center hidden w-full h-full gap-4 p-4 rounded-lg bg-gradient-to-b from-emerald-600 to-transparent"
            ref={hoverLink5}
          >
            <h2 class="text-2xl sm:text-3xl font-bold text-white">
              BootStrap Shop Website
            </h2>
            <a
              href="https://n-u-emon.github.io/mywebsite/"
              target="_blank"
              class="text-base font-medium text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-linear inline-block"
            >
              Watch Live
            </a>
          </div>
        </div>
        <div className="relative flex-1 basis-1/3">
          <img
            src={web6}
            alt="web1"
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            onMouseOver={hoverArea6}
          />
          <div
            className="absolute top-0 left-0 right-0 flex-col items-center justify-center hidden w-full h-full gap-4 p-4 rounded-lg bg-gradient-to-b from-emerald-600 to-transparent"
            ref={hoverLink6}
          >
            <h2 class="text-2xl sm:text-3xl font-bold text-white">
              BootStrap Portfolio Website
            </h2>
            <a
              href="https://n-u-emon.github.io/mywebsite/"
              target="_blank"
              class="text-base font-medium text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-linear inline-block"
            >
              Watch Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
