import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
  
import resume from "../../public/Nur-Uddin-Emon-Front-end-Developer-Resume.pdf";
import Image from "../../public/nnemon.png";
import { TypeAnimation } from "react-type-animation";

function Header({ darkMode, setDarkMode }) {
  function handleToggleBtn() {
    setDarkMode(!darkMode);
  }
  
  return (
    <header id="header" className="min-h-screen">
      <nav className="flex justify-between py-10 mb-12">
        <h2 className="text-xl font-burtons dark:text-white">Nur Uddin Emon</h2>
        <ul className="flex items-center">
          <li>
            {darkMode ? (
              <BsFillSunFill
                className="text-2xl cursor-pointer"
                onClick={handleToggleBtn}
              />
            ) : (
              <BsFillMoonStarsFill
                className="text-2xl cursor-pointer dark:text-white"
                onClick={handleToggleBtn}
              />
            )}
          </li>
          <li>
            <a
              className="px-4 py-2 ml-8 text-white rounded cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-cyan-500"
              href={resume}
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-10 text-center ">
        <h1 className="py-2 text-5xl font-medium text-teal-600 md:text-6xl dark:text-teal-300">
          Frontend Developer
        </h1>
        <h3 className="py-2 text-2xl md:text-3xl dark:text-white">
          <TypeAnimation
            sequence={[
              "React",
              500,
              "Developer",
              1000,
              "React Developer",
              2000,
              "Frontend Developer",
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h3>
        <p className="max-w-lg py-5 mx-auto leading-7 text-gray-800 text-md md:text-xl dark:text-gray-200">
          Hi, I am Nur Uddin Emon. I am a frontend developer. I love to think with
          coding and always excited to learn something new.
        </p>
      </div>
      <div className="flex justify-center gap-10 py-3 text-5xl text-gray-600 md:gap-16 dark:text-gray-200">
        <a href="https://www.linkedin.com/in/nur-uddin-emon-8218a519a/">
          <AiFillLinkedin className="hover:fill-[#0077B5] transition duration-[0.225s] ease cursor-pointer hover:translate-y-[-8px]" />
        </a>
        <a href="https://github.com/N-U-Emon">
          <AiFillGithub className="transition duration-[0.225s] ease cursor-pointer hover:fill-black dark:hover:fill-teal-600 hover:translate-y-[-8px]" />
        </a>
        <a href="https://www.youtube.com/@mrcodeman9509">
          <AiFillYoutube className="hover:fill-[#FF0000]  transition duration-[0.225s] ease cursor-pointer hover:translate-y-[-8px]" />
        </a>
        <a href="https://twitter.com/NurUddinEm0n">
          <AiFillTwitterCircle className="hover:fill-[#1DA1F2] transition duration-[0.225s] ease cursor-pointer hover:translate-y-[-8px]" />
        </a>
      </div>
      <div className="relative mx-auto mt-20 mb-10 overflow-hidden rounded-[80px] bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96">
        <img
          src={Image}
          alt="my image"
          className="object-cover w-80 h-80 md:h-96 md:w-96 "
        />
      </div>
    </header>
  );
}

export default Header;
