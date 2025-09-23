import {
  SkillsWrapper,
  ListSkills,
  SkillCard,
  MainContainer,
  SkillsTitle,
} from "./skillsStyle";

export default function SkillsSection() {
  const skillsItems = [
    { alt: "React", icon: "assets/skills/React_icon.png" },
    { alt: "Angular", icon: "assets/skills/Angular_icon.png" },
    { alt: "Next", icon: "assets/skills/Next_icon.png" },
    { alt: "Nginx", icon: "assets/skills/Nginx_icon.png" },
    { alt: "Node js", icon: "assets/skills/node_icon.webp" },
    { alt: "Swift", icon: "assets/skills/swift_icon.webp" },
    { alt: "SwiftUI", icon: "assets/skills/swiftUI_icon.png" },
    { alt: "Git", icon: "assets/skills/Git_icon.png" },
    { alt: "Typescript", icon: "assets/skills/Typescript_icon.webp" },
    { alt: "Javascript", icon: "assets/skills/javascript_icon.webp" },
    { alt: "flask", icon: "assets/skills/flask_icon.png" },
  ];

  // 🔹 Duplicate the list
  const doubledSkills = [...skillsItems, ...skillsItems];

  return (
    <MainContainer id="skills">
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsWrapper>
        <ListSkills>
          {doubledSkills.map((skill, index) => (
            <SkillCard key={index}>
              <img alt={skill.alt} src={skill.icon} />
            </SkillCard>
          ))}
        </ListSkills>
      </SkillsWrapper>
    </MainContainer>
  );
}
