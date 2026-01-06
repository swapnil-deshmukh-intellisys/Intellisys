import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import P1 from "../assestes/P1.png";
import "./Mobile.css";
import "aos/dist/aos.css";
import AOS from "aos";
import mobileapp from "../assestes/mobileapp.gif";

const MobileAppDevelopment = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="hero-sectionmobile" data-aos="fade-up">
        <div className="containermobile">
          <div className="hero-contentmobile">
            <h1>Mobile Application Development</h1>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="servicesmobile" data-aos="fade-up">
        <div className="containermobile">
          <h2>
            Let's Put life in your{" "}
            <span className="highlightmobile">iDEA!</span>
          </h2>
          <div className="services-listmobile">
            {[
              "Android App Development",
              "iOS App Development",
              "Custom App Development",
              "App Store Optimization",
              "App Data Security",
              "App Outsourcing",
              "Distributed Agile Development",
              "Utility Apps",
            ].map((service, index) => (
              <div
                className="service-itemmobile"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                key={index}
              >
                <i className="bi bi-check-circle"></i> {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Process */}
      <section className="app-development-process">
        <div className="containermobileapp">
          <h2 className="section-titlemobileapp" data-aos="fade-up">
            Our Mobile App Development Process
          </h2>
          <p
            className="section-descriptionmobileapp"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We follow a predefined mobile app development process that includes
            the strategy, process, and accelerators specific to the industry,
            aimed at revolutionizing & building a future-proof organization.
          </p>
          <div
            className="process-imagemobileapp"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={P1}
              alt="Mobile App Development Process"
              className="process-imgmobileapp"
            />
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="containertechnology">
          <h2 className="section-titletechnology">Technologies We Use</h2>

          <div className="tech-listtechnology">
            {/* Frontend & Cross-Platform */}
            <div className="tech-columntechnology" data-aos="fade-up">
              <h3>📱 Frontend</h3>
              <ul>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Swift (iOS)</li>
                <li>Kotlin (Android)</li>
                <li>Java</li>
              </ul>
            </div>

            {/* Backend & APIs */}
            <div
              className="tech-columntechnology"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>⚙️ Backend & APIs</h3>
              <ul>
                <li>Node.js</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Firebase</li>
                <li>GraphQL</li>
              </ul>
            </div>

            {/* Security & Cloud */}
            <div
              className="tech-columntechnology"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>🔒 Security & Cloud</h3>
              <ul>
                <li>AWS</li>
                <li>Azure</li>
                <li>Google Cloud</li>
                <li>Blockchain</li>
                <li>OAuth & JWT</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-sectionmobbenifit">
        <div className="containermobbenifit">
          <h2 className="section-titlemobbenifit" data-aos="fade-up">
            What Are the Benefits of Having a Mobile App for Your Business?
          </h2>
          <p
            className="section-subtitlemobbenifit"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            There are numerous benefits of having an app. Let's take a look at
            some of them. With an app, you can:
          </p>

          <div className="benefits-contentmobbenifit">
            <div className="benefits-listmobbenifit" data-aos="fade-right">
              {[
                "Provide More Value to Your Customers",
                "Build brand awareness and recognition",
                "Connect With Your Customers Fast and Easy",
                "Have a Competitive Edge in Your Niche",
              ].map((benefit, index) => (
                <div key={index} className="benefit-itemmobbenifit">
                  <FaCheckCircle className="benefit-iconmobile" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="benefits-imagemobbenifit" data-aos="zoom-in">
              <img
                src={mobileapp}
                alt="Mobile App Benefits"
                className="benefits-imgmobbenifit"
              />
            </div>

            <div className="benefits-listmobbenifit" data-aos="fade-left">
              {[
                "Enhance Customer Engagement and Retention",
                "Streamline Business Operations Efficiently",
                "Gain Valuable Insights from User Data",
                "Improve Customer Experience and satisfaction",
              ].map((benefit, index) => (
                <div key={index} className="benefit-itemmobbenifit">
                  <FaCheckCircle className="benefit-iconmobile" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container1">
          <h2>On-Site Training & Workshops</h2>
          <div className="info-wrapper">
            <div className="info-box">
              <h3>University Collaborations</h3>
              <p>
                We collaborate with leading university to integrate real-world
                experience into the classroom, preparing students for future
                success in technology careers.
              </p>
            </div>
            <div className="info-box">
              <h3>Industry Expert Sessions</h3>
              <p>
                Our training includes sessions led by industry experts,
                providing insights into the latest trends, tools, and best
                practices in technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppDevelopment;
