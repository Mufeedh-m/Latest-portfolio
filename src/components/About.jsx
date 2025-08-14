import "./About.css";

export default function About() {
  return (
    <section id="aboutsec"
     className="about-section">
      <div className="about-wrapper">
        <i className="fas fa-laptop laptop-path"></i>
        <div className="about-container shadow-box">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Mufeedh</span>, a passionate{" "}
            <strong> MERN Full Stack Developer</strong> with a strong foundation
            in building dynamic and scalable web applications.
          </p>
          <p>
            I have completed a comprehensive MERN stack course and worked on{" "}
            <strong>10+ real-world projects</strong>.
          </p>
          <p>
            I also hold a <strong>Bachelor’s Degree</strong> and continuously
            learn to stay ahead in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
}