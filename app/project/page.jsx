import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Header from '@/components/Header';

const projects = [
  {
    id: 1,
    title: 'Hydra VR',
    description:
      'Developed HYDRA VR Website, a cutting-edge web application showcasing expertise in modern front-end development. The project is built with React.js and utilizes Vite for its rapid development server and optimized build process. Styling is efficiently managed with Tailwind CSS, ensuring a clean and responsive user interface. This project serves as a robust foundation for interactive VR experiences.',
    image: '/vrweb.png',
    liveLink: 'https://hydra-vr-web.netlify.app/',
    github: 'https://github.com/KetanKumar3/HYDRA-VR-Website',
  },
  {
    id: 2,
    title: 'Tharun Speaks',
    description:
      'I recently undertook an exciting project to create a clone of the popular website Tharun Speaks. This endeavor allowed me to enhance my web development skills and gain hands-on experience with various technologies. Tackling this project provided valuable insights into responsive design principles and the complexities of front-end animation. The project was built using a combination of HTML, CSS, and JavaScript, with a particular focus on the GSAP (GreenSock Animation Platform) library to create engaging animations and transitions.',
    image: '/tharunspeaksweb.png',
    liveLink: 'https://tharun-speaks.netlify.app/',
    github: 'https://github.com/KetanKumar3/Tharun-Speaks',
  },
  {
    id: 3,
    title: 'Car Rental',
    description:
      'I developed a static website for a car rental service, with React and Tailwind CSS. This project allowed me to enhance my front-end development skills while creating a user-friendly interface for potential customers. Utilizing Tailwind CSS, I ensured that the website is fully responsive. This means that users can access the site on various devices, including desktops, tablets, and smartphones, without compromising the user experience.',
    image: '/carrentalweb.png',
    liveLink: 'https://rentalcarrr.netlify.app/',
    github: 'https://github.com/KetanKumar3/Car-Rental',
  },
  {
    id: 4,
    title: 'Fashion Shopping',
    description:
      'I developed a static website for a fashion shopping, with React and Tailwind CSS. This project allowed me to enhance my front-end development skills while creating a user-friendly interface for potential customers. Utilizing Tailwind CSS, I ensured that the website is fully responsive. This means that users can access the site on various devices, including desktops, tablets, and smartphones, without compromising the user experience.',
    image: '/shoppingweb.png',
    liveLink: 'https://fashionshopping.netlify.app/',
    github: 'https://github.com/KetanKumar3/Shopping-Website',
  },
  {
    id: 5,
    title: 'Beardly Barber App',
    description:
      'As a Frontend Developer intern at X-Strategy Services, I was responsible for building the user interface of the Beardly App using FlutterFlow. This involved translating design concepts into a functional and visually appealing mobile application, featuring screens for barber listings, service booking, and user profiles, aimed at streamlining the barbershop experience.',
    image: '/beardlyapp.jpg',
    liveLink: 'https://drive.google.com/drive/folders/1bPz1C1D4SeyRKv5c4NbezcpUY86kTLdG',
    github: 'https://drive.google.com/drive/folders/1bPz1C1D4SeyRKv5c4NbezcpUY86kTLdG',
  },
  {
    id: 6,
    title: 'Life Essential App',
    description:
      'I have created this using FlutterFlow and React-Native. I spearheaded the frontend development of this crucial mobile application during my internship, working closely with the client to bring their vision to life. Developed a user-friendly mobile application tailored for a medical shop, emphasizing intuitive navigation and a seamless user experience. I actively iterated on UI/UX designs, incorporating feedback to ensure optimal accessibility and ease of use for all customers, significantly improving the prescription ordering and refill process. ',
    image: '/lifeessential.jpg',
    liveLink: 'https://github.com/KetanKumar3/Life-Essential-App',
    github: 'https://github.com/KetanKumar3/Life-Essential-App',
  },
  
];

const Project = () => {
  return (
  <>
  <Header />
    <section className='h-full flex items-center py-16 xl:py-0'>
      <div className='container mx-auto h-full flex flex-col gap-24'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className='flex flex-col xl:flex-row items-center justify-center gap-y-12 xl:justify-between xl:pt-8 xl:pb-24'
          >
            <div className='text-center xl:text-left md:max-w-3xl order-2 xl:order-none'>
              <span className='text-2xl md:text-6xl text-emerald-500 font-black mb-2 block'>
                {String(index + 1).padStart(2, '0')}.
              </span>

              <h1 className='text-[35px] leading-[1.1] md:text-[30px] xl:text-[40px] font-semibold mb-6'>
                {project.title}
              </h1>

              <p className='md:max-w-[500px] text-lg md:text-xl text-gray-600 dark:text-gray-300 xl:mx-0 mb-8'>
                {project.description}
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-8'>
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300'
                  asChild
                >
                  <Link href={project.liveLink} target='_blank'>
                    <>
                      <span>Project Live Link</span>
                      <ExternalLink />
                    </>
                  </Link>
                </Button>

                <div className='mb-8 xl:mb-0 text-lg md:text-xl text-gray-700 dark:text-gray-200'>
                  <div className='flex gap-4 mt-2'>
                    <Link
                      href={project.github}
                      className='text-2xl border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 hover:bg-emerald-500 hover:text-white w-10 h-10 transition-all duration-300'
                      aria-label='Github Profile'
                      target='_blank'
                    >
                      <FaGithub size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {project.id==5 || project.id==6 ? <div className='order-1 xl:order-none mb-8 xl:mb-0'>
               <Image src={project.image} width={500} height={500} alt={project.title} />
            </div> : <div className='order-1 xl:order-none mb-8 xl:mb-0'>
               <Image src={project.image} width={400} height={400} alt={project.title} />
            </div>}
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Project;
