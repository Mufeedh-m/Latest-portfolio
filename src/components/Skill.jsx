import "./Skill.css";

export default function Skill() {
  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    // { name: "API", icon: "https://cdn-icons-png.flaticon.com/512/219/219983.png" },  // generic API icon
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ];

  return (
    <section id="skills"
     className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map(({ name, icon }) => (
          <div key={name} className="skill-card" title={name}>
            <img src={icon} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}