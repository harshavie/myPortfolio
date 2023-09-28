import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Arduino Coding Competition"
            subTitle="Intra-College Competiton"
            result="3rd Position"
            des="Coded a micro-controller circuit performing motoring action."
          />
          <ResumeCard
            title="CENTURITON"
            subTitle="Inter-College Hackathon"
            result="Participation"
            des="Participated in Inter-College Hackathon conducted by RIT,Bangalore and created an android app called Kaam Dekho used by people to search for jobs"
          />
          <ResumeCard
            title="Inter DPS National Football Competition"
            subTitle="Conducted at Faridabad, Haryana"
            result="Participation"
            des="Participated in the national competition where teams came from across the country."
          />
          <ResumeCard
            title="Inter DPS State Football Competition"
            subTitle="Conducted at Dibrugarh, Assam"
            result="2nd Runners Up"
            des="2nd Runners Up in the East Zone and qualified for National Level."
          />
          {/* <ResumeCard
            title="CBSE Clusters Football Competition"
            subTitle="Conducted at Giridih,Jharkhand"
            result="Participation"
            des="Participated in the competition where teams came from across the state."
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Achievement;
