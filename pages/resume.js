import PageLayout from "../layouts/PageLayout";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";
import SkillsList from "../components/SkillsList";
import ExperienceTimeline from "../components/ExperienceTimeline";
import EducationTimeline from "../components/EducationTimeline";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { education } from "../data/education";

const Resume = () => {
  return (
    <PageLayout>
      {/* Me */}
      <div className="mt-4 lg:mt-10">
        <SectionTitle>Nelson Murungi Mwirumubi</SectionTitle>
        <div className="my-4">
          <p className="text-base text-gray-800 dark:text-gray-100 lg:leading-7">
            Over the past <b>four years</b>, I have gained valuable experience
            in software development, with a focus on writing and shipping
            high-quality code using <b>Python</b> and <b>JavaScript</b>. My
            expertise includes deploying code to cloud platforms such as{" "}
            <b>Google Cloud Platform</b>, using tools like <b>Docker</b> and{" "}
            <b>Kubernetes</b> to manage and scale applications.
            <br />
            <br />
            In my previous roles, I have worked on a variety of projects,
            ranging from building RESTful APIs to developing microservices and
            serverless applications. I have a deep understanding of cloud
            technologies and architectures, which has enabled me to optimize
            applications for scalability, reliability, and performance.
            <br />
            <br />
            My experience in Python and JavaScript development has allowed me to
            work on various projects, from data processing and analytics to
            building web applications and cross platform mobile apps. I am
            always eager to learn new technologies and have experience working
            with frameworks such as Flask, Django, ExpressJS, React, and React
            Native.
            <br />
            <br />
            I'm passionate about open-source projects and currently contributing
            as a front-end developer for a distributed learner-focused solution
            supported by Kyoto University. In this role, I have had the
            opportunity to design a data visualization tool for learners and
            schools using Next.js, React Query, and D3.js.
          </p>
          <p className="flex mt-3 space-x-4">
            <ExternalLink href="https://github.com/mwinel">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/nelson-mwirumubi/">
              LinkdeIn
            </ExternalLink>
            <ExternalLink href="https://twitter.com/mwinel">
              Twitter
            </ExternalLink>
          </p>
        </div>
      </div>

      {/* Tech stack */}
      <div className="mt-8 lg:mt-10">
        <SectionTitle>Skills/Tech-stack</SectionTitle>
        <SkillsList skills={skills} start={0} end={20} />
      </div>

      {/* Experience */}
      <div className="mt-8 lg:mt-10">
        <SectionTitle>Experience</SectionTitle>
        <ExperienceTimeline experience={experience} />
      </div>

      {/* Education */}
      <div className="mt-8 lg:mt-10">
        <SectionTitle>Education</SectionTitle>
        <EducationTimeline education={education} />
      </div>

      {/* Licences & Certifications */}

      {/* Projects */}
      <div className="mt-4 lg:mt-10">
        <SectionTitle>Projects</SectionTitle>
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id} className="flex py-4">
              <div className="">
                <p className="text-base font-medium text-gray-800 dark:text-gray-100 lg:leading-7">
                  {project.name}
                </p>
                <p className="text-base text-gray-800 dark:text-gray-100 lg:leading-7">
                  {project.description}
                </p>
                <p className="flex mt-3 space-x-4">
                  <ExternalLink href={project.projectURL}>
                    See Project
                  </ExternalLink>
                  <ExternalLink href={project.repositoryURL}>
                    GitHub
                  </ExternalLink>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="mt-8 lg:mt-10">
        <SectionTitle>Achievements</SectionTitle>
        <p className="text-base text-gray-800 dark:text-gray-100 lg:leading-7">
          <span className="font-medium">
            Winner Uganda Technology Engineers Challenge, 2021
          </span>{" "}
          organized by JICA Uganda (Japanese International Cooperation Agency),
          The Hive Colab and The Ministry ICT & National Guidance, Uganda.
        </p>
      </div>

      {/* Location */}
      <div className="mt-8 lg:mt-10">
        <SectionTitle>Location</SectionTitle>
        <p className="text-base text-gray-800 dark:text-gray-100 lg:leading-7">
          Kampala, Uganda. Always working remotely.
        </p>
      </div>
    </PageLayout>
  );
};

export default Resume;
