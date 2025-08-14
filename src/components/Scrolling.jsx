import "./Scrolling.css";

const projects = [
  { id: 1, img: "p-img1.png", link: "#" },
  { id: 2, img: "p-img2.png", link: "#" },
  { id: 3, img: "p-img3.png", link: "#" },
  { id: 4, img: "p-img4.png", link: "#" },
  { id: 5, img: "p-img5.png", link: "#" },
  { id: 6, img: "p-img6.png", link: "#" },
  { id: 7, img: "p-img7.png", link: "#" },
  { id: 8, img: "p-img8.png", link: "#" },
  { id: 9, img: "p-img9.png", link: "#" },
];

export default function Scrolling() {
  // We duplicate projects array so scroll loops seamlessly
  const doubleProjects = [...projects, ...projects];

  return (
    <section className="scrolling-section">
      <div className="scrolling-wrapper">
        {doubleProjects.map((proj, index) => (
          <a
            key={index} // Use index since projects duplicated
            href={proj.link}
            className="scrolling-item"
            target="_blank"
            rel="noreferrer"
          >
            <img src={proj.img} alt={`Project ${proj.id}`} />
          </a>
        ))}
      </div>
    </section>
  );
}