import footer from "../../public/footer.png";
import {
  AiFillInstagram,
  AiFillDribbbleCircle,
  AiFillGithub,
  AiFillTwitterCircle,
  
} from "react-icons/ai";
import { BiX } from "react-icons/bi";
function Footer() {
  function year() {
    return new Date().getFullYear();
  }
  return (
    <footer id="footer" className=" lg:grid lg:grid-cols-4">
      <div className="hidden lg:block lg:relative lg:col-span-1 lg:h-ful">
        <img
          src={footer}
          alt=""
          className="inset-0 object-cover w-full h-full lg:absolute"
        />
      </div>
      <div className="px-2 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-700 uppercase dark:text-white">
                Contact Me
              </span>
              <a
                href="mailto:nuruddinemon17@gmail.com"
                className="block text-xl font-medium text-gray-900 hover:opacity-75 sm:text-2xl dark:text-white"
              >
                nuruddinemon17@gmail.com
              </a>
            </p>

            <ul className="flex gap-6 mt-8 ">
              <li>
                <a
                  href="https://instagram.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillInstagram className="text-5xl text-gray-700 transition cursor-pointer hover:opacity-75 dark:text-gray-300 sm:text-3xl hover:scale-125" />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/NurUddinEm0n"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillTwitterCircle className="text-5xl text-gray-700 transition cursor-pointer hover:opacity-75 dark:text-gray-300 sm:text-3xl hover:scale-125" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/N-U-Emon"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillGithub className="text-5xl text-gray-700 transition cursor-pointer hover:opacity-75 dark:text-gray-300 sm:text-3xl hover:scale-125" />
                </a>
              </li>

              <li>
                <a
                  href="https://dribbble.com/iamman30"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillDribbbleCircle className="text-5xl text-gray-700 transition cursor-pointer hover:opacity-75 dark:text-gray-300 sm:text-3xl hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:flex sm:justify-end">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Links</p>

              <ul className="mt-5 space-y-4 text-sm sm:mt-6 ">
                <li>
                  <a
                    href="#header"
                    className="text-gray-700 transition hover:opacity-75 dark:text-white"
                  >
                    About Me
                  </a>
                </li>

                <li>
                  <a
                    href="#skills"
                    className="text-gray-700 transition hover:opacity-75 dark:text-white"
                  >
                    My Skills
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className="text-gray-700 transition hover:opacity-75 dark:text-white"
                  >
                    My Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-400 dark:border-gray-100 sm:pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mt-8 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
              &copy; {year()} by Nur Uddin Emon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

