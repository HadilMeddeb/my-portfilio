import "./skillsStyle.css"
import {
SkillCard
} from "./skillsStyle";
export default function Skills() {
  const skills = [
    { alt: "React", icon: "assets/skills/Angular_icon.svg" },
    { alt: "Angular", icon: "assets/skills/Git_icon.svg" },
    { alt: "Next", icon: "assets/skills/Next_icon.svg" },
    { alt: "Nginx", icon: "assets/skills/Nginx_icon.svg" },
    { alt: "Node js", icon: "assets/skills/node_icon.svg" },
    { alt: "Swift", icon: "assets/skills/swift_icon.webp" },
    { alt: "SwiftUI", icon: "assets/skills/swiftUI_icon.png" },
    { alt: "Git", icon: "assets/skills/Git_icon.svg" },
    { alt: "javascript", icon: "assets/skills/javascript_icon.webp" },
    { alt: "Typescript", icon: "assets/skills/Typescript_icon.webp" },
    { alt: "python", icon: "assets/skills/Python_icon.svg" },
    { alt: "flask", icon: "assets/skills/flask_icon.png" },
  ];
  return (
    <div>
      {skills.map((skill) => {
        return <SkillCard>
          <img className="cardImg" alt={skill.alt} src={skill.icon}/>
        </SkillCard>;
      })}
    </div>
  );
}
