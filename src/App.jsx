import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "white" : "dark"}>
      <AnimatedCursor
        innerScale={1}
        innerSize={8}
        innerStyle={{
          backgroundColor: "#d8097b",
        }}
        outerAlpha={0}
        outerScale={2}
        outerSize={35}
        outerStyle={{
          border: "2px solid #137974",
        }}
        showSystemCursor={false}
        trailingSpeed={8}
      />
      <main className="px-10 white:bg-[#fff] xl:px-40 dark:bg-gray-900 ">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skills />
        <Projects />
        <Foomnter />
      </main>
    </div>
  );
}

export default App;
