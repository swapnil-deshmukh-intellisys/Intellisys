
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Fullstackdevelopment.css'; 

const FullStackPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header className="hero-sectionfull" data-aos="fade-up">
        <div className="containerwfull">
          <div className="hero-contentfull">
            <h1>Full Stack Development</h1>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="fullstack-services">
        <div className="fullstack-section-header">
          <h2 className="fullstack-section-title">Our Full Stack Services</h2>
          <p className="fullstack-section-subtitle">
            Scalable, secure, and high-performance full-stack solutions.
          </p>
        </div>

        <div className="fullstack-services-grid">
          {[
            {
              icon: 'fas fa-code',
              title: 'Frontend Development',
              desc:
                'Build stunning and responsive web applications using modern frameworks like React, Angular, and Vue.js.',
            },
            {
              icon: 'fas fa-server',
              title: 'Backend Development',
              desc:
                'Develop secure and scalable backend solutions with Node.js, Python, and MongoDB.',
            },
            {
              icon: 'bi bi-link',
              title: 'API Integration',
              desc:
                'Seamlessly connect applications with RESTful and GraphQL APIs for smooth data exchange.',
            },
            {
              icon: 'bi bi-database-gear',
              title: 'Database Configuration',
              desc:
                'Optimize database performance with expert SQL and NoSQL solutions.',
            },
            {
              icon: 'bi bi-tools',
              title: 'DevOps Services',
              desc:
                'Enhance software delivery with CI/CD pipelines, automation, and cloud solutions.',
            },
            {
              icon: 'bi bi-brush',
              title: 'UI/UX Design',
              desc:
                'Create intuitive and engaging user experiences with modern design techniques.',
            },
          ].map((item, index) => (
            <div className="fullstack-service-card" key={index}>
              <div className="fullstack-service-icon">
                <i className={item.icon}></i>
              </div>
              <div className="fullstack-service-content">
                <h3 className="fullstack-service-title">{item.title}</h3>
                <p className="fullstack-service-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="fullstack-work-process">
        <div className="fullstack-section-header">
          <h2 className="fullstack-section-title">How We Work in Full Stack Development</h2>
          <p className="fullstack-section-subtitle">
            A structured approach to building scalable, secure, and
            high-performance applications.
          </p>
        </div>

        <div className="fullstack-work-container">
          <div className="fullstack-work-steps">
            {[
              'Discovery',
              'Planning',
              'Design',
              'Development',
              'Testing',
              'Deployment',
              'Optimization',
              'Support & Growth',
            ].map((step, i) => (
              <div className="fullstack-step" key={i}>
                <div className="step-number">{i + 1}</div>
                <h3 className="fullstack-step-title">{step}</h3>
                <p className="fullstack-step-desc">
                  {{
                    Discovery: 'Understanding business needs and project scope.',
                    Planning: 'Defining architecture, tech stack, and roadmap.',
                    Design: 'Creating UI/UX wireframes and prototypes.',
                    Development: 'Building frontend, backend, and databases.',
                    Testing: 'Ensuring functionality, performance, and security.',
                    Deployment: 'Deploying to cloud with CI/CD pipelines.',
                    Optimization: 'Improving security, performance, and scalability.',
                    'Support & Growth': 'Monitoring, bug fixes, and scaling.',
                  }[step]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="fullstack-why-choose-us">
        <div className="fullstack-container">
          <h2>
            Why Choose <span className=" fullstack-highlight">Our Full Stack Development?</span>
          </h2>
          <div className="fullstack-choose-us-grid">
            {[
              {
                icon: 'bi bi-code-slash',
                title: 'End-to-End Development',
                desc:
                  'We handle frontend, backend, databases, and cloud infrastructure for complete solutions.',
              },
              {
                icon: 'bi bi-lightning-charge',
                title: 'High-Performance Applications',
                desc:
                  'Our optimized code ensures fast loading, scalability, and seamless user experience.',
              },
              {
                icon: 'bi bi-shield-lock',
                title: 'Secure & Scalable Solutions',
                desc:
                  'We integrate best security practices and scalable architectures to future-proof your app.',
              },
              {
                icon: 'bi bi-gear-wide-connected',
                title: 'Cutting-Edge Technologies',
                desc:
                  'We use modern frameworks like React, Node.js, MongoDB, and cloud platforms for innovation.',
              },
              {
                icon: 'bi bi-clock-history',
                title: 'On-Time Delivery',
                desc:
                  'We follow agile methodologies and strict timelines to ensure timely project completion.',
              },
              {
                icon: 'bi bi-person-check',
                title: '24/7 Support & Maintenance',
                desc: 'We provide ongoing support, updates, and troubleshooting.',
              },
            ].map((item, i) => (
              <div className="fullstack-choose-item" key={i}>
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
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

export default FullStackPage;
