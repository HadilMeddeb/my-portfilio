import {
  ExperienceContainer,
  ExperienceItem,
  Technologies,
  TechItem,
  ExperienceTitle,
  ExperienceSubTitle,
  ExperienceSubTitle2,
  TechsContainer,
} from "./ExperienceStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "./style.css";
import {  Pagination } from "swiper/modules";

export default function Experience() {
  const experiences = [
    {
      position: "Fullstack JS Developer / IOS Mobile Developer",
      type: "Full time job",
      technologies: [
        { name: "React", logo: "assets/skills/React_icon.png" },
        { name: "Redux", logo: "assets/skills/redux.svg" },
        { name: "Angular", logo: "assets/skills/Angular_icon.png" },
        { name: "Node.js", logo: "assets/skills/node_icon.webp" },
        { name: "Next", logo: "assets/skills/Next_icon.png" },
        { name: "express.js", logo: "assets/skills/express.svg" },
        { name: "Next.ts", logo: "assets/skills/Next_icon.png" },
        { name: "Typescript", logo: "assets/skills/Typescript_icon.webp" },
        { name: "Nginx", logo: "assets/skills/Nginx_icon.png" },
        { name: "Swift", logo: "assets/skills/swift_icon.webp" },
        { name: "SwiftUI", logo: "assets/skills/swiftui_icon.png" },
        { name: "Scrum", logo: "assets/skills/scrum.webp" },
        { name: "ci/cd pipeline", logo: "assets/skills/ci_cd.png" },
        { name: "Jenkins", logo: "assets/skills/jenkins.png" },
        { name: "docker", logo: "assets/skills/docker.png" },
        { name: "Git", logo: "assets/skills/Git_icon.png" },
      ],
      details:
        "Contributing to the development , maintenance and deployment of full-stack js applications and browser extensions as well as Buiding a full-featured iOS video hub app with Swift/SwiftUI, implementing recording, editing, feed algorithms, authentication, and content moderation. Managed end-to-end deployment and App Store release",
      company: "Olindias",
      companyLogo: "assets/experience/olindias_logo.jpg",
      place: "Tunisia, Monastir",
      OnSite: true,
      startDate: "August 2023",
      endDate: "March 2024",
    },
    {
      position: "Frontend Developer",
      type: "Full time job",
      technologies: [
        { name: "React", logo: "assets/skills/React_icon.png" },
        { name: "Redux", logo: "assets/skills/redux.svg" },
        { name: "python", logo: "assets/skills/Python_icon.png" },
        { name: "electron.js", logo: "assets/skills/electron.png" },
        { name: "Flask", logo: "assets/skills/flask_icon.png" },
        { name: "Scrum", logo: "assets/skills/scrum.webp" },
        { name: "Git", logo: "assets/skills/Git_icon.png" },
      ],
      details:
        "Collaborating with a German startup team to develop and maintain responsive front-end interfaces for projects related to edTech that concists in transforming selected text sections from an uploaded pdfs into animated videos",
      company: "Startmicro",
      companyLogo: "assets/experience/anonyme-company.png",
      place: "Germany",
      OnSite: false,
      startDate: "August 2023",
      endDate: "March 2024",
    },
    {
      position: "FullStack JS Developer",
      type: "Internship",
      technologies: [
        { name: "Angular", logo: "assets/skills/Angular_icon.png" },
        { name: "Node.js", logo: "assets/skills/node_icon.webp" },
        { name: "socket.io", logo: "assets/skills/socketIO.png" },
        { name: "JWT", logo: "assets/skills/jwt.svg" },
        { name: "express.js", logo: "assets/skills/express.svg" },
        { name: "restful API", logo: "assets/skills/rest_api.webp" },
        { name: "Git", logo: "assets/skills/Git_icon.png" },
      ],
      details:
        "Development of a web-based task tracking application for an IT services company, including : task management, project versions management, Workspaces management, meetings management through voting, minutes generation using either a text editor or voice input, integration with Trello, real-time notifications...",
      company: "GPRO Consulting",
      companyLogo: "assets/experience/gpro-consulting.png",
      place: "Tunisia, Sousse , Sahloul",
      OnSite: true,
      startDate: "March 2023",
      endDate: "September 2023",
    },
    {
      position: "Frontend Developer",
      type: "Internship",
      technologies: [
        { name: "Angular", logo: "assets/skills/Angular_icon.png" },
        { name: "Nx", logo: "assets/skills/nx.png" },
        { name: "Nexus", logo: "assets/skills/nexus.png" },
        { name: "npm", logo: "assets/skills/npm.png" },
        { name: "Git", logo: "assets/skills/Git_icon.png" },
      ],
      details: "Built and published a reusable Angular 14 library",
      company: "Barthauer Software Tunisia",
      companyLogo: "assets/experience/barthawer.jpg",
      place: "Tunisia, Sousse , Sahloul",
      OnSite: true,
      startDate: "july 2022",
      endDate: "August 2022",
    },
    {
      position: "FullStack JS Developer",
      type: "Internship",
      technologies: [
        { name: "React", logo: "assets/skills/React_icon.png" },
        { name: "Node.js", logo: "assets/skills/node_icon.webp" },
        { name: "JWT", logo: "assets/skills/jwt.svg" },
        { name: "express.js", logo: "assets/skills/express.svg" },
        { name: "restful API", logo: "assets/skills/rest_api.webp" },
        { name: "Git", logo: "assets/skills/Git_icon.png" },
      ],
      details: "Development of a web application for managing employee time tracking, aimed at monitoring employees’ working hours using their time punches",
      company: "ACOBA",
      companyLogo: "assets/experience/acoba.png",
      place: "Moknine, Monastir, Tunisia",
      OnSite: false,
      startDate: "july 2021",
      endDate: "September 2021",
    },
    {
      position: "FullStack JS Developer",
      type: "Internship",
      technologies: [
        { name: "Angular", logo: "assets/skills/Angular_icon.png" },
        { name: "Node.js", logo: "assets/skills/node_icon.webp" },
        { name: "JWT", logo: "assets/skills/jwt.svg" },
        { name: "express.js", logo: "assets/skills/express.svg" },
        { name: "restful API", logo: "assets/skills/rest_api.webp" },
        { name: "Git", logo: "assets/skills/Git_icon.png" },
      ],
      details: "Developed a stock management CRUD app",
      company: "it Gate group",
      companyLogo: "assets/experience/it-gate.png",
      place: "Hammam sousse, Tunisia",
      OnSite: false,
      startDate: "1 August 2021",
      endDate: "31 August 2021",
    },
  ];
  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>
        <span className="titleSpan">My </span>Experience
      </ExperienceTitle>
      <ExperienceSubTitle>What I can build for you ?</ExperienceSubTitle>
      <ExperienceSubTitle2>
        I design and develop modern web and mobile solutions tailored to your
        needs
      </ExperienceSubTitle2>

      <Swiper
      pagination={true} modules={[Pagination]}
      className ="mySwiper" // dots always enabled
    >
        {experiences.map((experience) => {
          return (
            <SwiperSlide>
              <ExperienceItem>
                <div className="row">
                  <div className="img-container">
                    {" "}
                    <img
                      className="company-logo"
                      src={experience.companyLogo}
                      alt={experience.company}
                    />
                  </div>
                  <div>
                    <h3 className="position">{experience.position}</h3>
                    <p className="date">
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </div>
                </div>
                <p className="company">
                  {experience.company} - {experience.place}
                </p>
                <p className="job-type">{experience.type}</p>

                <p className="description">{experience.details}</p>
                <Technologies>
                  {experience.technologies.map((tech) => {
                    return <TechItem>{tech.name}</TechItem>;
                  })}
                </Technologies>
              </ExperienceItem>

              <TechsContainer>
                {experience.technologies.map((tech) => {
                  return (
                    <div className="img-container">
                      <img
                        className="company-logo"
                        src={tech.logo}
                        alt={tech.name}
                      />
                    </div>
                  );
                })}
              </TechsContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ExperienceContainer>
  );
}
