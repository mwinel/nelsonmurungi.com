import Head from "next/head";
import PageLayout from "../layouts/PageLayout";
import ProjectsList from "../components/ProjectsList";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <PageLayout>
      {/* Projects */}
      <ProjectsList projects={projects} start={0} end={10} />
    </PageLayout>
  );
};

export default Projects;
