import { useState } from "react";
import { motion } from "framer-motion";
import { GiConvergenceTarget } from "react-icons/gi";
import { fadeIn, textContainer } from "@libs/variants";
import { projects as allProjects } from "@libs/data";
import { Category } from "@libs/types";
import {
  AnimateWhenVisible,
  ProjectsNavbar,
  SectionContainer,
  SectionTitle,
} from "@components/layouts";
import { ProjectCard, ProjectCardBig } from "@components/cards";

const ProjectsSection = () => {
  const [projects, setProjects] = useState(allProjects);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    console.log("handlerFilterCategory", category);

    if (category === "all") {
      setProjects(allProjects);
      setActive(category);
      return;
    }

    const filteredProjects = allProjects.filter((project) => project.category.includes(category));
    setProjects(filteredProjects);
    setActive(category);
    console.log(`projects`, projects);
  };

  return (
    <SectionContainer id="projects">
      <SectionTitle title="Some of my works" />
      <motion.div className="flex flex-col space-y-4">
        <AnimateWhenVisible variants={textContainer}>
          <motion.div className="flex flex-col my-4 space-y-12 " variants={textContainer}>
            <ProjectCardBig project={allProjects[0]} />
            <ProjectCardBig project={allProjects[1]} reverse />
            <ProjectCardBig project={allProjects[2]} />
            {/* {projects.map((project, i) => (
            ))} */}
          </motion.div>
        </AnimateWhenVisible>

        <motion.div
          variants={fadeIn("up")}
          className="flex items-center space-x-2 text-lg tracking-wider font-hina"
        >
          <GiConvergenceTarget />
          <span>Here are some other projects</span>
        </motion.div>

        <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
        <AnimateWhenVisible variants={textContainer}>
          <motion.div variants={textContainer} className="grid grid-cols-6 gap-6 mt-10 md:gap-12">
            {[...projects].map((project, i) => (
              <ProjectCard {...project} key={i} />
            ))}
          </motion.div>
        </AnimateWhenVisible>
      </motion.div>
    </SectionContainer>
  );
};

export default ProjectsSection;