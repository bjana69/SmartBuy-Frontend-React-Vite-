import React, { useState }  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/ContactPage.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data to your backend
    console.log("Contact form submitted:", form);
    alert("Message sent! (demo only)");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Header />
      <main className="contact-wrapper">
        <div className="container">
          <div className="contact-info">
            <div className="box">
              <h3>Call To Us <FaPhoneAlt className="icon" /></h3>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +91-823-1804-000</p>
            </div><br />

            <hr />

            <div className="box">
              <h3>Write To Us <FaEnvelope className="icon" /></h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Email: customer@smartbuy.com</p>
              <p>Email: support@smartbuy.com</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="input-msg">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
