import React from "react";
import CV from "../../assets/images/Avaneesh_Ray_Resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  //FaGithub,
  // FaLinkedinIn,
  FaReact,
  //  FaInstagram,
  FaNodeJs,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SiExpress, SiMongodb } from "react-icons/si";
//import { BiLogoMongodb } from "react-icons/bi";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">Hi I'm</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize"> Avaneesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p
          className="text-base font-bodyFont leading-6 tracking-wide"
          style={{ "text-align": "justify" }}
        >
          I'm a currently a <b>Software Engineer @ Myntra</b>. I love Software
          Development and creating projects based on Frameworks and libraries
          like that of Java, Javascript which thereby helps to extend my
          knowledge in the web domain. In my leisure time I love to play
          Football, Cook Food and play PC games like valorant.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skill On:
          </h2>
          <div className="flex gap-5">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Download Resume
          </h2>
          <div className="flex gap-5">
            <span className="w-full bannerIcon">
              <a
                href={CV}
                download="Avaneesh_Ray_Resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex">
                  <FiDownload />
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
