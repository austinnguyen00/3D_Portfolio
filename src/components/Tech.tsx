import { BallCanvas } from ".";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Tech component represents a section displaying multiple BallCanvas components for different technologies
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Iterate over the technologies array and render a BallCanvas component for each technology */}
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* Render a BallCanvas component with the specified technology's icon */}
          <BallCanvas icon={technology.icon}></BallCanvas>
        </div>
      ))}
    </div>
  );
};

// TechSectionWrapper component wraps the Tech component with additional functionality
// It is a higher-order component (HOC) that adds a section wrapper to the Tech component
const TechSectionWrapper = SectionWrapper(Tech, "tech");
export default TechSectionWrapper;
