import React from "react";
import {
  FaBug,
  FaRobot,
  FaShieldAlt,
  FaTachometerAlt,
  FaMobileAlt,
  FaPuzzlePiece,
  FaBolt,
  FaChartLine,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import "./Softwaretesting.css";

const SoftwareTestingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-sectionwebsite" data-aos="fade-up">
        <div className="containerwebsite">
          <div className="hero-contentwebsite">
            <h1>Software Testing</h1>
          </div>
        </div>
      </header>

      {/* Software Testing Services Section */}
      <section id="services" className="servicestesting">
        <div className="section-headertesting">
          <h2 className="section-titletesting">
            Our Software Testing Services
          </h2>
          <p className="section-subtitletesting">
            Ensure high-quality, secure, and reliable applications with our
            expert testing solutions.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaBug />
            </div>
            <div className="service-content">
              <h3 className="service-title">Manual Testing</h3>
              <p className="service-desc">
                Identify bugs, usability issues, and inconsistencies through
                detailed manual test cases.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaRobot />
            </div>
            <div className="service-content">
              <h3 className="service-title">Automation Testing</h3>
              <p className="service-desc">
                Improve efficiency and reduce manual efforts using automation
                frameworks like Selenium and Cypress.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaShieldAlt />
            </div>
            <div className="service-content">
              <h3 className="service-title">Security Testing</h3>
              <p className="service-desc">
                Identify vulnerabilities and protect applications from cyber
                threats with penetration testing.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaTachometerAlt />
            </div>
            <div className="service-content">
              <h3 className="service-title">Performance Testing</h3>
              <p className="service-desc">
                Ensure your application runs smoothly under heavy loads with
                tools like JMeter and LoadRunner.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaMobileAlt />
            </div>
            <div className="service-content">
              <h3 className="service-title">Mobile App Testing</h3>
              <p className="service-desc">
                Test functionality, compatibility, and security across different
                devices and OS platforms.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaPuzzlePiece />
            </div>
            <div className="service-content">
              <h3 className="service-title">Integration Testing</h3>
              <p className="service-desc">
                Validate seamless interaction between components and third-party
                integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="testing-process">
        <div className="containertesting">
          <h2 className="section-titletesting">Our Software Testing Process</h2>
          <p className="section-subtitletesting">
            A streamlined approach to ensure software quality, security, and
            performance.
          </p>

          <div className="process-container">
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3 className="step-title">Test Planning</h3>
                <p className="step-desc">
                  Defining test strategy, scope, tools, and timelines.
                </p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h3 className="step-title">Test Case Design</h3>
                <p className="step-desc">
                  Creating detailed test cases for functional and non-functional
                  testing.
                </p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h3 className="step-title">Test Execution</h3>
                <p className="step-desc">
                  Running manual and automated tests to identify issues.
                </p>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <h3 className="step-title">Bug Reporting & Fixing</h3>
                <p className="step-desc">
                  Logging defects, collaborating with developers, and re-testing
                  fixes.
                </p>
              </div>

              <div className="step">
                <div className="step-number">5</div>
                <h3 className="step-title">Final Validation</h3>
                <p className="step-desc">
                  Ensuring performance, security, and compliance before release.
                </p>
              </div>

              <div className="step">
                <div className="step-number">6</div>
                <h3 className="step-title">Test Report & Delivery</h3>
                <p className="step-desc">
                  Providing detailed reports with insights and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="containerchoose">
          <h2>
            Why Choose &nbsp;
            <span className="highlight">Our Software Testing Services?</span>
          </h2>
          <div className="choose-us-grid">
            <div className="choose-item">
              <div className="service-icontesting">
                <FaBug />
              </div>
              <h3>Comprehensive Testing</h3>
              <p>
                We cover functional, performance, security, and automation
                testing for complete quality assurance.
              </p>
            </div>
            <div className="choose-item">
              <div className="service-icontesting">
                <FaBolt />
              </div>
              <h3>Fast & Efficient Testing</h3>
              <p>
                Our automated and manual testing ensures quick bug detection and
                resolution.
              </p>
            </div>
            <div className="choose-item">
              <div className="service-icontesting">
                <FaShieldAlt />
              </div>
              <h3>Security & Compliance</h3>
              <p>
                We follow industry security standards and compliance regulations
                to protect your applications.
              </p>
            </div>
            <div className="choose-item">
              <div className="service-icontesting">
                <FaChartLine />
              </div>
              <h3>Scalability & Performance</h3>
              <p>
                We ensure your application performs seamlessly under high
                traffic and load conditions.
              </p>
            </div>
            <div className="choose-item">
              <div className="service-icontesting">
                <FaCheckCircle />
              </div>
              <h3>Bug-Free Deliverables</h3>
              <p>
                Our rigorous testing minimizes risks, ensuring a smooth user
                experience and high-quality releases.
              </p>
            </div>
            <div className="choose-item">
              <div className="service-icontesting">
                <FaHeadset />
              </div>
              <h3>Ongoing Support</h3>
              <p>
                We provide post-launch support, regression testing, and
                continuous monitoring.
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

export default SoftwareTestingPage;
