import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import React, { ReactElement } from "react";

/**
 * Higher-Order Component (HOC) that wraps a component with motion and applies styling.
 * Wrapping the component directly inside the SectionWrapper function would technically work
 * but using a separate element (HOC) allows for better code readability and maintainability
 *
 * @param Component - The component to be wrapped.
 * @param idName - The ID attribute value for the section wrapper.
 * @returns The wrapped component with motion and styling.
 */
const SectionWrapper = (Component: React.FC, idName: string): React.FC => {
  /**
   * Inner component for the HOC.
   * Responsible for rendering the wrapped component with motion and styling.
   */
  const HOC = (): ReactElement => {
    return (
      // Motion Section
      <motion.section
        variants={staggerContainer()} // Apply the stagger container animation variants
        initial="hidden" // Set the initial animation state to "hidden"
        whileInView="show" // Apply the "show" animation state when in view
        viewport={{ once: true, amount: 0.25 }} // Configure the viewport settings
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Apply the desired styles using the `styles` module
      >
        {/* Hash Span */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Render the wrapped component */}
        <Component />
      </motion.section>
    );
  };

  return HOC; // Return the inner component
};

export default SectionWrapper;
