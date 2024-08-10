"use client";
import React,{useTransition,useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Premiere</li>
        <li>Photography</li>
        <li>Videography</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MAN 4 Jakarta</li>
        <li>Bandung Institute of Technology</li>
      </ul>
    ),
  },
  {
    title: "Organization & Experience",
    id: "organization",
    content: (
      <ul className="list-disc pl-2">
        <li>ITB Jazz</li>
        <li>TEC ITB</li>
        <li>IT Staff Wisokto 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const[tab, setTab] = useState("skills");
  const[isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() =>{
      setTab(id);
  });
}

  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
            src="/Images/foto-about.png"
            width={400}
            height={400}
            className='rounded-lg mb-4'
            />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
          Hi! I’m Farrel, a second year student at , majoring in Informatics Engineering. I’m passionate about Software Engineering, and I’m excited about the journey I’m on as I work towards a future in big tech industries such as IBM, Google and Apple.
          When I’m not studying or participating in campus activities, I enjoy Gym, playing Tennis, and Videography, which helps me stay balanced and inspired. I find that these moments recharge me and keep my creativity flowing. 
          I’m always eager to learn, grow, and connect with others who share my interests. 
          Feel free to reach out if you’d like to collaborate on a project, discuss ideas, or just chat about anything. 
          Looking forward to what the future holds!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("organization")}
              active={tab === "organization"}
            >
              {" "}
              Organization & Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
      </div>
    </div>
    </section>
  );
}

export default AboutSection;
