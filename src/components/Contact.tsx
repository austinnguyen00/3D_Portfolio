import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from ".";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Contact component
const Contact = () => {
  // Ref for the form element
  const formRef = useRef<HTMLFormElement>(null);

  // State for form values and loading state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Function to handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Use emailjs library to send the form data
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Austin",
          from_email: form.email,
          to_email: "ndkhiem3010@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          // Reset form and loading state after successful submission
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          // Handle error during submission
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        },
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Left Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Input for name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-4"
            />

            {/* Input for email */}
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-4"
            />

            {/* Textarea for message */}
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-4"
            />
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-sm"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* EarthCanvas component */}
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// Wrapping Contact component with SectionWrapper hoc and exporting it
const ContactSectionWrapper = SectionWrapper(Contact, "contact");
export default ContactSectionWrapper;
