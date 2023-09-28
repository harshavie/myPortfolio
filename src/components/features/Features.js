import React from "react";
// import { AiFillAppstore } from "react-icons/ai";
import { Icon } from "@iconify/react";
import {
  // FaMobile,
  // FaGlobe,
  FaHtml5,
  FaGitAlt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import {
  // SiProgress,
  // SiAntdesign,
  SiExpress,
  SiMongodb,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiRedux,
  SiChakraui,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";
//import c from "./c.ico";
import Title from "../layouts/Title";
import Card from "./Card";

const Skillset = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Technologies" des="My Skillset" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-6">
        <Card
          title="HTML5"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<FaHtml5 />}
        />
        <Card
          title="CSS3"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiCss3 />}
        />
        <Card
          title="Javascript"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiJavascript />}
        />
        <Card
          title="Bootstrap5"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<FaBootstrap />}
        />
        <Card
          title="React.js"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<FaReact />}
        />
        <Card
          title="Express.js"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiExpress />}
        />
        <Card
          title="MongoDB"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiMongodb />}
        />
        <Card
          title="Node.js"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<FaNodeJs />}
        />
        <Card
          title="C"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<Icon icon="devicon-plain:c" />}
        />
        <Card
          title="C++"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiCplusplus />}
        />
        <Card
          title="Git"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<FaGitAlt />}
        />
        <Card
          title="Redux"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiRedux />}
        />
        <Card
          title="Sass"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<FaSass />}
        />
        <Card
          title="Tailwind CSS"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiTailwindcss />}
        />
        <Card
          title="Chakra UI"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiChakraui />}
        />
        <Card
          title="Github"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiGithub />}
        />
      </div>
    </section>
  );
};

export default Skillset;
