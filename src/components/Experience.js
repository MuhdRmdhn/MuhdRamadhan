import React from 'react';
import Card from './Card'; 
import './Experience.css';


import OtsawSwisslogLogo from '../image/otsawswisslog.jpeg'; 
import OtsawLogo from '../image/otsaw.png';       
import LionsBotLogo from '../image/lionsbot.png'; 

const Experience = () => {
  return (
    <div className="experience-container">
      <Card 
        logo={OtsawSwisslogLogo}
        title="Senior Field Service Engineer at Swisslog Healthcare"
        content={
          <>
            <p><strong>Full-time · 2 yrs</strong> · Singapore · On-site</p>
            <p><strong>Jun 2024 - Present · 5 mos</strong></p>
            <ul>
              <li>Oversee and coordinate engineers on site, ensuring efficient and effective performance of their duties.</li>
              <li>Work on Automated Guided Vehicles (AGVs), focusing on their operation, maintenance, and troubleshooting.</li>
              <li>Manage the service area, particularly monitoring assets such as spare parts, tools, and other equipment.</li>
              <li>Handle coordination with stakeholders, ensuring effective communication and providing regular progress reports.</li>
              <li>Perform corrective maintenance on OTSAW products.</li>
              <li>Provide secondary response to any technical issues encountered by OTSAW products.</li>
              <li>Lead in addressing Tier 3 system-related issues via remote or on-site support.</li>
              <li>Escalate higher-level issues to superiors for immediate advice and action whenever needed.</li>
              <li>Mentor Service Engineers to equip them with corrective maintenance and Tier 2 technical support skills.</li>
              <li>Prepare and submit Service Reports, Maintenance Reports, and other operations-related documents as needed.</li>
              <li>Execute ad hoc tasks on behalf of the Robotics Operations Team as required.</li>
            </ul>
          </>
        }
      />

      <Card 
        logo={OtsawLogo}
        title="Field Service Engineer at OTSAW"
        content={
          <>
            <p><strong>Full-time · 1 yr 7 mos</strong> · Singapore · On-site</p>
            <p><strong>Nov 2022 - May 2024</strong></p>
            <ul>
              <li>Supervise a team of technicians, coordinating schedules and distributing daily tasks and activities.</li>
              <li>Work on Automated Guided Vehicles (AGVs), focusing on their operation, maintenance, and troubleshooting.</li>
              <li>Manage the service area, particularly monitoring assets such as spare parts, tools, and other equipment.</li>
              <li>Handle coordination with stakeholders, ensuring effective communication and providing regular progress reports.</li>
              <li>Perform corrective maintenance on OTSAW products.</li>
              <li>Lead and collaborate with the team to ensure efficient operation and maintenance activities.</li>
              <li>Mentor Service Engineers to equip them with corrective maintenance and Tier 2 technical support skills.</li>
              <li>Prepare and submit Service Reports, Maintenance Reports, and other operations-related documents as needed.</li>
            </ul>
          </>
        }
      />

      <Card 
        logo={LionsBotLogo}
        title="Robotics Technologist at LionsBot International Pte Ltd"
        content={
          <>
            <p><strong>Full-time · 9 mos</strong> · Singapore · On-site</p>
            <p><strong>Oct 2020 - Jun 2021</strong></p>
            <ul>
              <li>Diagnose and repair technical issues in robots to ensure optimal performance and minimal downtime.</li>
              <li>Conduct regular inspections of robotic units to identify and address potential problems before they escalate.</li>
              <li>Provide on-site support to clients, addressing their concerns and ensuring their satisfaction with the robotics products.</li>
              <li>Perform functionality tests on robots to ensure they meet operational standards and specifications.</li>
              <li>Maintain detailed records of service activities, repairs, and maintenance for each robotic unit.</li>
              <li>Educate clients and end-users on the proper use and maintenance of robotics products to ensure longevity and effectiveness.</li>
              <li>Install and configure software updates and enhancements on robotics products as needed.</li>
              <li>Work closely with the engineering and product development teams to provide feedback and suggest improvements based on field observations.</li>
              <li>Participate in the development and testing of new robotics products and features, contributing to continuous improvement initiatives.</li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default Experience;