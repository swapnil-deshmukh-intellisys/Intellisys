import React from "react";
import { MdCloudDone, MdPersonPin, MdWarning } from "react-icons/md";
import { RiFileLockLine, RiShieldCheckFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { HiOutlineServer } from "react-icons/hi";
import { FaShieldAlt, FaLock, FaTachometerAlt } from "react-icons/fa";
import BurpSuite from "../assestes/BurpSuite.png";
import Metasploit from "../assestes/Metasploit.png";
import Wireshark from "../assestes/Wireshark.png";
import kali from "../assestes/kali.jpg";
import toe from "../assestes/toe.png";
import cybersecurity from "../assestes/cybersecurity.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Cyber.css";

const Cybersecurity = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <header className="hero-sectioncyber" data-aos="fade-up">
        <div className="containercyber">
          <div className="hero-contentcyber">
            <h1>
              Cyber<span className="security-orange">Security</span>
            </h1>
          </div>
        </div>
      </header>

      <section className="about-sectioncyber">
        <div className="containercyber">
          <div className="about-imagecyber" data-aos="fade-up">
            <img
              src={cybersecurity}
              alt="Cybersecurity Solutions"
              className="cyber-img"
            />
          </div>

          <h2 data-aos="fade-up">
            Securing Your <span className="highlightcyber">Digital World</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            At Intellisys, we provide cutting-edge cybersecurity solutions to
            safeguard your digital assets from evolving threats. Our
            cybersecurity services focus on risk assessment, threat detection,
            and proactive defense strategies to ensure your business remains
            secure and resilient against cyber attacks.
          </p>
        </div>
      </section>

      <section className="servicescyber">
        <div className="containercyber">
          <h2 className="fade-in">
            Our <span className="highlightcyber">Cybersecurity Services</span>
          </h2>
          <div className="services-listcyber">
            <div className="service-item fade-in">
              <div style={{ position: "relative" }}>
                <FaShieldAlt size={48} />
              </div>
              <h3>Network Security</h3>
              <p>
                Protect your network infrastructure from unauthorized access,
                misuse, or theft.
              </p>
            </div>
            <div className="service-item fade-in" data-delay="100">
              <MdCloudDone size={48} />
              <h3>Cloud Security</h3>
              <p>
                Secure your cloud environments to ensure data integrity and
                privacy.
              </p>
            </div>
            <div className="service-item fade-in" data-delay="200">
              <MdPersonPin size={48} />
              <h3>Identity & Access Management</h3>
              <p>
                Manage user identities and control access to critical
                information.
              </p>
            </div>
            <div className="service-item fade-in" data-delay="300">
              <RiFileLockLine size={48} />
              <h3>Data Encryption</h3>
              <p>
                Ensure that your sensitive data is encrypted and protected from
                breaches.
              </p>
            </div>
            <div className="service-item fade-in" data-delay="400">
              <MdWarning size={48} />
              <h3>Threat Intelligence</h3>
              <p>Detect, analyze, and respond to cyber threats proactively.</p>
            </div>
            <div className="service-item fade-in" data-delay="500">
              <FiSettings size={48} />
              <h3>Compliance & Risk Management</h3>
              <p>
                Ensure regulatory compliance and mitigate cybersecurity risks
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="container">
          <h2>
            Our{" "}
            <span className="highlight">Cybersecurity Technology Stack</span>
          </h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src={BurpSuite} alt="Burp Suite" />
              <h3>Burp Suite</h3>
            </div>
            <div className="tech-item">
              <img src={Metasploit} alt="Metasploit" />
              <h3>Metasploit</h3>
            </div>
            <div className="tech-item">
              <img src={Wireshark} alt="Wireshark" />
              <h3>Wireshark</h3>
            </div>
            <div className="tech-item">
              <img src={kali} alt="Kali Linux" />
              <h3>Kali Linux</h3>
            </div>
            <div className="tech-item">
              <img src={toe} alt="Nmap" />
              <h3>Nmap</h3>
            </div>
            <div className="tech-item">
              <img src="https://owasp.org/assets/images/logo.png" alt="OWASP" />
              <h3>OWASP</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-uscb">
        <div className="containercb">
          <h2>
            Why Choose{" "}
            <span className="highlightcb">Our Cybersecurity Services?</span>
          </h2>
          <div className="choose-us-gridcb">
            <div className="choose-itemcb" data-aos="fade-up">
              <div style={{ position: "relative" }}>
                <FaShieldAlt size={48} />
                <FaLock
                  size={18}
                  style={{ position: "absolute", bottom: -5, right: -5 }}
                />
              </div>
              <h3>Advanced Threat Protection</h3>
              <p>
                We implement cutting-edge security measures to protect against
                cyber threats.
              </p>
            </div>
            <div
              className="choose-itemcb"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaTachometerAlt size={48} />
              <h3>Real-Time Monitoring</h3>
              <p>
                Our continuous monitoring system detects and mitigates risks
                instantly.
              </p>
            </div>
            <div
              className="choose-itemcb"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <RiShieldCheckFill size={48} />
              <h3>Compliance & Risk Management</h3>
              <p>
                We ensure adherence to security regulations and best practices.
              </p>
            </div>
            <div
              className="choose-itemcb"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <HiOutlineServer size={48} />
              <h3>Data Security & Encryption</h3>
              <p>
                We secure sensitive data with robust encryption and access
                control.
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default Cybersecurity;
