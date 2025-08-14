import React from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Nostra-Clothing",
    imageUrl: "p-img1.png",
    liveLink: "https://mufeedh-m.github.io/Nostra-project-clone/",
    repoLink: "https://github.com/Mufeedh-m/Nostra-project-clone.git",
  },
  {
    id: 2,
    title: "Greenden-Plants",
    imageUrl: "p-img2.png",
    liveLink: "https://mufeedh-m.github.io/Greeenden-tailwindcss/",
    repoLink: "https://github.com/Mufeedh-m/Greeenden-tailwindcss.git",
  },
  {
    id: 3,
    title: "Tripadvisor",
    imageUrl: "p-img3.png",
    liveLink: "https://mufeedh-m.github.io/Trip-advisor-/",
    repoLink: "https://github.com/Mufeedh-m/Trip-advisor-.git",
  },
  {
    id: 4,
    title: "Udemy",
    imageUrl: "p-img4.png",
    liveLink: "https://mufeedh-m.github.io/udemytask/",
    repoLink: "https://github.com/Mufeedh-m/udemytask.git",
  },
  {
    id: 5,
    title: "Weblitz",
    imageUrl: "p-img5.png",
    liveLink: "https://mufeedh-m.github.io/React-Weblitz-clone/",
    repoLink: "https://github.com/Mufeedh-m/React-Weblitz-clone.git",
  },
  
];

export default function Project() {
  return (
    <section id="project"
    className="project-timeline">
      <h2>My Projects</h2>
      <div className="timeline-container">
        {projects.map(({ id, title, imageUrl, liveLink, repoLink }) => (
          <div key={id} className="timeline-item" tabIndex={0}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{title}</h3>
              <div className="project-links">
                <a href={liveLink} target="_blank" rel="noreferrer" className="live-link">
                  Live Site
                </a>
                <a href={repoLink} target="_blank" rel="noreferrer" className="repo-link">
                  GitHub Repo
                </a>
              </div>
              <div className="image-wrapper">
                <img src={`/${imageUrl}`} alt={title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}