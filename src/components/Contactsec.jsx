import "./Contactsec.css";

export default function Contactsec() {
  return (
    <section id="contact"
    className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          Contact Number
          <input type="tel" placeholder="Your Contact Number" required />
        </label>
        <label>
          LinkedIn ID
          <input type="url" placeholder="Your LinkedIn Profile URL" />
        </label>
        <button type="submit">Contact Me</button>
      </form>
    </section>
  );
}