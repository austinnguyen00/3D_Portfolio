import React from "react";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { avatar } from "../assets";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { IService } from "../types";
import { fadeIn, textVariant } from "../utils/motion";

// Represents a card displaying a service.
const ServiceCard: React.FC<{
  index: number;
  service: IService;
}> = ({ index, service }) => {
  return (
    // Tilt component allows tilting when mouseover
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* Service Card Content */}
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {/* Service Icon */}
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />

          {/* Service Title */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Represents the About section of webpage.
const About = () => {
  return (
    <>
      {/* Introduction Section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-col-reverse gap-5 items-center lg:flex-row lg:gap-20">
        <div>
          {/* Description */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 text-secondary text-[20px] max-w-3xl leading-[30px]"
          >
            Hi, my name is Duy Khiem Nguyen, but called me Austin. I am a web
            developer, often doing both front-end and back-end, but more
            specialize in front-end.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 text-secondary text-[20px] max-w-3xl leading-[30px]"
          >
            I am also passionate about AI, Chess, League of Legends and Music. I
            am always eager to learn new and trending technologies.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 text-secondary text-[20px] max-w-3xl leading-[30px]"
          >
            I am from Vietnam and currently reside in Perth, Western Australia.
          </motion.p>
        </div>
        <img
          src={avatar}
          alt="avatar"
          className="lg:w-1/4 lg:h-1/4 w-2/5 h-2/5 mt-8 rounded-full border-gray-800 border-4"
        />
      </div>
      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service: IService, index: number) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

// Wrap the `About` component with the `SectionWrapper` HOC, passing the component and the ID name
const AboutSectionWrapper = SectionWrapper(About, "about");

// Export the wrapped component as the default export
export default AboutSectionWrapper;
