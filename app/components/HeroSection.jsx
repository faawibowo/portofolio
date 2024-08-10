"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link';


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-white'>
              Hello, I'm {" "}
            </span>
            <TypeAnimation
              sequence={[
                "Farrel",
                1000,
                "an Ordinary Student",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            Institut Teknologi Bandung Informatics Engineering Undergraduate Student.
          </p>

          <div>
          <a href="https://www.linkedin.com/in/muhammadfarrel/" target="_blank" rel="noopener noreferrer">
          <button className='py-3 px-6 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300 text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-pulse'>
            LinkedIn
          </button>
          </a>

          <a href="mailto:faawibowo@gmail.com">
          <button className='py-3 px-6 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-pulse'>
            Contact Me
          </button>
          </a>
        </div>

        </div>
        <div className='col-span-5 place-self-center mt-9 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
              src="/Images/foto.png"
              alt="hero image"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
