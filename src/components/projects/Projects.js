import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Live and Ongoing Projects" des="Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Aap"
          des="Made using React.js, Express.js, Node.js, MongoDB. A social media site where users can follow each other and post stuff."
          src={projectFive}
          git="https://github.com/harshavie/socialaap"
          dep=""
        />
        <ProjectsCard
          title="Blog App(Ongoing)"
          des="Made using React.js, Express.js, Node.js, MongoDB. A blog website used to post blogs and see blogs of others."
          src={projectSix}
          git="https://github.com/harshavie/blogWeb"
          dep=""
        />
        <ProjectsCard
          title="CryptoX"
          des="Made using React.js, ChakraUI, and Charts.js. A webapp used to track prices of different crypto currency over a particular period of time."
          src={projectOne}
          git="https://github.com/harshavie/crypto_app"
          dep="https://crypto-app-phi-seven.vercel.app/"
        />
        <ProjectsCard
          title="TinDog"
          des="A Front End Web Dev. project which resembles Tinder where your pet dog can meet other dogs. Made using HTML, CSS , and Bootstrap 5"
          src={projectTwo}
          git="https://github.com/harshavie/tindog"
          dep="https://harshavie.github.io/tindog/"
        />
        <ProjectsCard
          title="ECom"
          des="A landing page of an E-Commerce site made using HTML and CSS with different sections and navigating links."
          src={projectThree}
          git="https://github.com/harshavie/ECom"
          dep="https://ecom-mu-pink.vercel.app/"
        />
        <ProjectsCard
          title="Chakra UI"
          des="A basic Front End of a video uploading website made using React.js and Chakra UI with swift animations"
          src={projectFour}
          git="https://github.com/harshavie/chakra_ui"
          dep="https://chakra-ui-gilt.vercel.app/"
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          git=""
          dep=""
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          git=""
          dep=""
        /> */}
      </div>
    </section>
  );
};

export default Projects;
