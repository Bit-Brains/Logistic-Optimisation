import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At AutoLogistics, our mission is to revolutionize the logistics
            landscape within the automobile sector. We aim to provide innovative
            solutions that enhance efficiency, reduce costs, and ensure timely
            delivery of automotive components and vehicles.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Services</h2>
          <ul>
            <li>Automotive Supply Chain Management</li>
            <li>Route Optimization for Vehicle Deliveries</li>
            <li>Inventory Management Solutions</li>
            <li>Real-time Tracking and Monitoring</li>
            <li>Data Analytics and Predictive Maintenance</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team is composed of industry experts with extensive experience in
            logistics, supply chain management, and the automotive sector. We are
            dedicated to providing top-notch service and continuously improving
            our solutions to meet the evolving needs of our clients.
          </p>
        </section>
        <section className="about-section about-contact">
          <h2>Contact Us</h2>
          <p>
            For more information about our services or to discuss your logistics
            needs, please contact us at:
          </p>
          <p>Email: <a href="mailto:info@autologistics.com">abhinav@autologistics.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+91 9662145762</a></p>
        </section>
      </div>
    </div>
  );
};

export default About;
