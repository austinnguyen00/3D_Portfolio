import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { ITag } from "../types";
import { fadeIn, textVariant } from "../utils/motion";

// Define the props for the ProjectCard component
interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: ITag[];
  image: string;
  source_code_link: string;
}

// ProjectCard component displays a project card
const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      {/* Tilt component adds a parallax effect to the card */}
      <Tilt
        className="bg-tertiary p-5 rounded-2xl  w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className="relative w-full h-[230px]">
          {/* Display the project image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* Show a clickable GitHub icon for the source code link */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          {/* Display the project name */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {/* Display the project description */}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {/* Display project tags */}
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works component displays the projects section
const Works = () => {
  return (
    <>
      {/* Display the section subtext */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        {/* Display the section heading */}
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-8">
        {/* Render project cards */}
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          ></ProjectCard>
        ))}
      </div>
    </>
  );
};

// Wrap the Works component with a section wrapper
const WorksSectionWrapper = SectionWrapper(Works, "work");
export default WorksSectionWrapper;
