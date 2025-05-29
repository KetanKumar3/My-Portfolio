import React from 'react';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import Link from 'next/link';
import Photo from '@/components/Photo';
import Header from '@/components/Header';


const Home = () => {
  return (
 
    <>
    <Header />
    <section className='h-full flex items-center py-16 xl:py-0'>

      <div className='container mx-auto h-full'>

        <div className='flex flex-col xl:flex-row items-center justify-center gap-y-12 xl:justify-between xl:pt-8 xl:pb-24'>

          <div className='text-center xl:text-left md:max-w-3xl order-2 xl:order-none'>

            <span className='text-xl md:text-2xl text-emerald-500 font-medium mb-2 block'>
              Software Developer
            </span>


            <h1 className='text-[35px] leading-[1.1] md:text-[60px] xl:text-[80px] font-semibold mb-6'>
              Hello I'm <br />
              <span className='text-emerald-500'>Ketan Kumar</span>
            </h1>



            <p className='md:max-w-[500px] text-lg md:text-xl text-gray-600 dark:text-gray-300  xl:mx-0 mb-8'>
              I'm a passionate Software Developer and Computer Science student with hands-on experience in building modern, responsive web and mobile applications using React, React-Native, FlutterFlow, and Tailwind CSS. I love solving real-world problems through clean code, intuitive UI, and smooth user experiences. Constantly learning and evolving, I've solved 200+ DSA problems to sharpen my skills.
            </p>




            <div className='flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-8 '>
            <Link href="/Ketan_Resume..pdf" download>
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
              </Link>


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
            <Photo />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
