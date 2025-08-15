import React from 'react';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import Link from 'next/link';
import Photos from '@/components/Photos';
import Header from '@/components/Header';
import Photo from '@/components/Photo';


const About = () => {
  return (
 
    <>
    <Header />
    <section className='h-full flex items-center py-16 xl:py-0'>

      <div className='container md:mx-auto h-full'>

        <div className='flex flex-col xl:flex-row items-center justify-center gap-y-12 xl:justify-between xl:pt-8 xl:pb-24'>

          <div className='text-center xl:text-left md:max-w-3xl order-2 xl:order-none'>


            

            <p className='w-full md:max-w-[500px] text-md md:text-sm font-semibold text-gray-600 dark:text-gray-300 md:mx-auto xl:mx-0 mb-8'>

              I’m Ketan Kumar, a passionate Computer Science & Engineering student at Galgotias University with a strong foundation in Web development and a growing interest in creating impactful web. I’ve gained hands-on experience through internships at X-Strategy Services LLP and IBM SkillsBuild, where I contributed to real-world projects using technologies like React.js, FlutterFlow and Tailwind CSS.

              With a solid grasp of C++, JavaScript, and modern frontend frameworks, I enjoy building intuitive, responsive user interfaces and continuously enhancing user experiences. I’ve built several personal and client-facing projects, including a car rental platform and a barber shop app. I’m also actively sharpening my problem-solving skills, having solved over 200 DSA problems and earned a 3-star rating in C++ on HackerRank.

              I’m always eager to collaborate, learn new technologies, and take on challenges that push my technical and creative boundaries.
            </p>


            <div className='flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-8'>

              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:cursor-pointer"
              >
                <span>Download CV</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </Button>


              <div className='mb-8 xl:mb-0 text-lg md:text-xl text-gray-700 dark:text-gray-200'>

                <div className="flex gap-4 mt-2">

                  <Link href="https://github.com/KetanKumar3"
                    className="text-2xl border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 hover:bg-emerald-500 hover:text-white w-10 h-10 transition-all duration-300"
                    aria-label="Github Profile"><FaGithub size={20} /></Link>



                  <Link href="https://www.linkedin.com/in/ketan-kumar-677508253/"
                    className="text-2xl border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 hover:bg-emerald-500 hover:text-white w-10 h-10 transition-all duration-300"
                    aria-label="LinkedIn Profile"><FaLinkedin size={20} /></Link>

                  <Link href="https://leetcode.com/u/Ketan_Kumar/"
                    className="text-2xl border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 hover:bg-emerald-500 hover:text-white w-10 h-10 transition-all duration-300"
                    aria-label="Leetcode Profile"><SiLeetcode size={20} /></Link>

                  <Link href="https://www.instagram.com/ketan___purbey/?igsh=YjIxdXBuN2N3aDMy"
                    className="text-2xl border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 hover:bg-emerald-500 hover:text-white w-10 h-10 transition-all duration-300"
                    aria-label="instagram Profile"><FaInstagram size={20} /></Link>
                </div>
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            {/* <Photos /> */}
            <Photo />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
