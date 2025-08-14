import "./Herosec.css";

export default function Herosec() {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Hi, I'm <span>Mufeedh</span></h1>
                <h2 className="typing-text">Aspiring Front End Developer</h2>
                <p>I create modern, animated, and interactive websites.</p>
                <div className="hero-buttons">
                    <a href="/Mufee-frontend.pdf.pdf" download className="btn-primary">
                        📄 Download Resume
                    </a>


                   
                </div>
            </div>

            <div className="hero-right">
                <img src="/mufeeimg1.jpg" alt="Mufee" className="profile-pic" />
            </div>
        </section>
    );
}