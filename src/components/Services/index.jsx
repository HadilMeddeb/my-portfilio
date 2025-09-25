import {
  ServicesContainer,
  ServicesList,
  ServicesTitle,
  ServicesSubTitle,
  ServiceSubTitle2,
  ServiceItem,
  ServiceItemTechs,
  TechItem,
} from "./ServiceStyle.js";
import "./style.css";
export default function Services() {
  const services = [
    {
      title: "Frontend Developer",
      text: "I create clean and responsive user interfaces",
      img: "assets/Services/frontend.png",
      alt: "frontend interface",
      technologies: ["React", "Angular", "Next"],
    },
    {
      title: "Backend Developer",
      text: "I build secure and scalable server systems",
      img: "assets/Services/backend.png",
      alt: "backend icon",
      technologies: ["Express.js", "Node.js", "Flask", "python"],
    },
    {
      title: "IOS Mobile Developer",
      text: "I develop smooth and user-friendly iOS apps",
      img: "assets/Services/ios.png",
      alt: "ios mobile icon",
      technologies: ["Swift", "SwiftUI"],
    },
  ];
  return (
    <ServicesContainer id="services">
      <ServicesTitle>
        <span className="titleSpan">My </span>Services
      </ServicesTitle>
      <ServicesSubTitle>What I can build for you ?</ServicesSubTitle>
      <ServiceSubTitle2>
        I design and develop modern web and mobile solutions tailored to your
        needs
      </ServiceSubTitle2>
      <ServicesList>
        {services.map((service) => {
          return (
            <ServiceItem>
              <img
                className="service-img"
                src={service.img}
                alt={service.alt}
              />
              <div className="service-Item-Content">
                <span>{service.title}</span>
                <p className="service-txt">{service.text}</p>
              </div>
              <ServiceItemTechs>
                {service.technologies.map((tech) => {
                  return <TechItem>{tech}</TechItem>;
                })}
              </ServiceItemTechs>
            </ServiceItem>
          );
        })}
      </ServicesList>
    </ServicesContainer>
  );
}
