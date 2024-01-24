import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../style';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion.js';
import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450 
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
            items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'  />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-[17px] max-w-3xl text-secondary leading-[30px]'
      >
        I am a skilled and a passionate computer science student with experience in C++, Javascript and
        expertise in Fullstack Development. My journey has been marked by a relentless pursuit 
        of knowledge and a fascination with emerging technologies. With a keen interest in cutting-edge 
        technologies, I am currently drawn to the dynamic realms of Software Development and DevOps,
        where my skills in problem-solving, creativity, and adaptability come to the forefront. 
        Let's connect and bring your ideas to life!.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");