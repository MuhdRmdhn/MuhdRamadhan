import React from 'react';
import Card from './Card';

const About = () => {
  return (
    <div className="about-container">
      <Card 
        title="About Me"
        content={
          <>
            <p>
              I recently graduated from the <strong>(SCTP) Advance Professional Certificate in Software Engineering</strong> at <em>Nanyang Technology University (NTU)</em>, where I gained technical expertise in ReactJS, Spring Boot, GitHub, React Native, CI/CD, and DevOps.
            </p>
            <p>
              My passion for technology began during my time as a Robotics Technician at Lionsbot International Pte Ltd in 2020. Over the next few years, I worked with Autonomous Mobile Robots (AMRs) at Otsaw Digital and advanced to the role of Robotics Service Engineer. In 2023, I transitioned to a Senior Service Engineer at Otsaw Swisslog Healthcare, where I now manage AGV systems and collaborate closely with technicians and customers.
            </p>
            <p>
              While working full-time, I pursued my passion for software engineering by taking courses on Udemy and enrolling at NTU. The opportunity to solve problems through coding has been incredibly rewarding. NTU's course, though intense, equipped me with the skills to pursue my dream of becoming a Software Engineer.
            </p>
            <p>
              Below are some of my projects:
              <br />
              • Mobile App: <a href="https://github.com/MuhdRmdhn/BookingApp" target="_blank" rel="noopener noreferrer">BookingApp</a>
              <br />
              • Spring Boot: <a href="https://github.com/MuhdRmdhn/booking_api" target="_blank" rel="noopener noreferrer">Booking API</a>
              <br />
              • React.js: <a href="https://github.com/MuhdRmdhn/adventura" target="_blank" rel="noopener noreferrer">Adventura</a>
            </p>
            <p>
              I am excited to continue evolving in the Software Engineering field, where constant innovation keeps me motivated and eager to learn more. Transitioning my career to software engineering has been the most rewarding experience, and I look forward to contributing to the tech industry.
            </p>
          </>
        }
      />
    </div>
  );
};

export default About;