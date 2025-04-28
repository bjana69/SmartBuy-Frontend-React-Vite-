import { React, useState, useEffect } from "react";
import "../styles/AboutPage.css";
import Header from "../components/Header.jsx";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";
import { FaLink } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";

// Statistics data
const stats = [
  {
    id: 1,
    image: "/about2.png",
    number: "10.5k",
    label: "Sellers active on our site",
  },
  {
    id: 2,
    image: "/about3.png",
    number: "33k",
    label: "Monthly Product Sale",
  },
  {
    id: 3,
    image: "/about4.png",
    number: "45.5k",
    label: "Customers active on our site",
  },
  {
    id: 4,
    image: "/about5.png",
    number: "25k",
    label: "Annual gross sale on our site",
  },
];

// Team slides data
const teamMembers = [
  {
    id: 1,
    image: "/about6.png",
    name: "Tom Cruise",
    role: "Founder & Chairman",
  },
  {
    id: 2,
    image: "/about7.png",
    name: "Emma Watson",
    role: "Managing Director",
  },
  {
    id: 3,
    image: "/about8.png",
    name: "Will Smith",
    role: "Product Designer",
  },
  {
    id: 4,
    image: "/about6.png",
    name: "Biswanath Jana",
    role: "CTO",
  },
  {
    id: 5,
    image: "/about7.png",
    name: "Chris Evans",
    role: "Lead Developer",
  },
  {
    id: 6,
    image: "/about8.png",
    name: "Natalie Portman",
    role: "UX Designer",
  },
  // …add as many as you like
];

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Determine how many to show based on width
  const updateVisibleCount = () => {
    const w = window.innerWidth;
    if (w < 600) return setVisibleCount(1);
    if (w < 900) return setVisibleCount(2);
    return setVisibleCount(3);
  };

  // on-mount: set initial, and listen for resize
  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // auto-advance every 5s
  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  // grab the slice of members to display
  const visibleMembers = Array.from({ length: visibleCount }, (_, i) => {
    return teamMembers[(currentIndex + i) % teamMembers.length];
  });

  return (
    <>
      <Header />
      <main>
        {/* Our Story Section */}
        <section className="our-story">
          <div className="text-content">
            <h1>Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 million products to offer, growing very
              fast. Exclusive offers a diverse assortment in categories ranging
              from consumer products.
            </p>
          </div>
          <div className="image-content">
            <img src="/about1.png" alt="Two women shopping" />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics-container">
          <div className="statistics">
            {stats.map((stat) => (
              <div className="stat" key={stat.id}>
                <img src={stat.image} alt={stat.label} />
                <p className="stat-number">{stat.number}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
        <br />
        <br />

        {/* Team Carousel Section */}
        <section className="main-content">
          <div className="team-heading">
            <h2>
              <b>Our Team</b>
            </h2>
          </div>
          <div className="carousel">
            <div className="team">
              {visibleMembers.map((m) => (
                <div className="team-member" key={m.id}>
                  <img src={m.image} alt={m.name} />
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                  <div className="social-icons">
                    <a href="#">
                      <FaTwitter className="icon" />
                    </a>
                    <a href="#">
                      <FaCameraRetro className="icon" />
                    </a>
                    <a href="#">
                      <FaLink className="icon" />
                    </a>
                  </div>
                </div>
              ))}
            </div><br />

            <div className="dots">
              {teamMembers.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <br />
      <Services />
      <Footer />
    </>
  );
};

export default AboutPage;
