import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { IExperience } from "../types";
import { textVariant } from "../utils/motion";

// Component: ExperienceCard
// Displays a single experience card in the vertical timeline
const ExperienceCard: React.FC<{ experience: IExperience }> = ({
  experience,
}) => {
  return (
    <VerticalTimelineElement
      // Styling for the content area of the card
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      // Styling for the arrow indicating the timeline direction
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      // Date associated with the experience
      date={experience.date}
      // Styling for the icon container
      iconStyle={{ background: experience.iconBg }}
      // Icon element to be displayed
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%]"
          ></img>
        </div>
      }
    >
      <div>
        {/* Title of the experience */}
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {/* Name of the company */}
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      {/* List of points for the experience */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Component: Experience
// Renders the Experience section
const Experience = () => {
  return (
    <>
      {/* Section heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Growth Journey.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        {/* VerticalTimeline: Container for the vertical timeline */}
        <VerticalTimeline>
          {/* Render each experience card */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrap the Experience component with the SectionWrapper higher-order component
const ExperienceSectionWrapper = SectionWrapper(Experience, "experience");
export default ExperienceSectionWrapper;
