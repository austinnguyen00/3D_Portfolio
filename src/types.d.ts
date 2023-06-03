export interface IService {
  title: string;
  icon: string; // Assuming icon is a string representing an icon source
}

export interface IExperience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ITag {
  name: string;
  color: string;
}

export interface IProject {
  name: string;
  description: string;
  tags: ITag[];
  image: string;
  source_code_link: string;
}

export interface ITestimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}
