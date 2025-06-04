import React from "react";
import "./Experience.css";
import { FaAngleRight, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <div className="container experience_section" id="Experience">
      <h2 className="exp_heading">
        <span>EXPERIENCE</span>
      </h2>
      
      <div className="experience-card">
        <div className="experience-header">
          <h3 className="position">Software Development Engineer - Backend</h3>
          <div className="company-info">
            <a href="https://getstan.app/" className="company-name">
              <FaBuilding className="me-2" />
              Stanverse Technologies
            </a>
            <div className="meta-info">
              <span className="duration">
                <FaCalendarAlt className="me-2" />
                January 2023 - Present
              </span>
              <span className="location">
                <FaMapMarkerAlt className="me-2" />
                Bangalore, India
              </span>
            </div>
          </div>
        </div>
        
        <div className="experience-content">
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Integrated <strong>PhonePe Payment Gateway</strong> across the app, saving INR 80 million in operational costs by avoiding Google Play charges.</p>
          </div>
          
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Designed and launched the <strong>Communities</strong> feature on STAN, facilitating the creation of over <strong>1000+ communities</strong> with <strong>30+ million users</strong>. This feature allows moderators to send messages, images, videos, and audio, with users engaging through reactions in a one-way communication format.</p>
          </div>
          
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Introduced and developed a <strong>user gifting</strong> feature in clubs to drive revenue through ad engagements and currency purchases. Enhanced user engagement by creating <strong>leaderboards</strong> for a competitive edge, rewarding top gifters and club hosts.</p>
          </div>
          
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Engineered <strong>Missions</strong> feature that incentivized and addressed user retention challenges, resulting in a remarkable <strong>29% increase in user retention</strong> rates.</p>
          </div>
          
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Organized <strong>Offerwall</strong> feature through third-party ad network integration, driving <strong>1.3 million in revenue</strong> through user rewards tied to installations and sign-ups.</p>
          </div>
          
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Developed a <strong>Store</strong> feature with vendors - Gyftr, Xoxo and Qwikcilver, driving <strong>40 cr</strong> in gift card sales, and built a system to distribute coupons as rewards across the app.</p>
          </div>
          
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Innovated <strong>STAN Contra</strong> game, a play-to-earn feature, driving engagement with <strong>300K+ active users</strong> and empowering content creators.</p>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <h3 className="position">Software Developer Intern</h3>
          <div className="company-info">
            <a href="https://liquiloans.com/" className="company-name">
              <FaBuilding className="me-2" />
              Liquiloans
            </a>
            <div className="meta-info">
              <span className="duration">
                <FaCalendarAlt className="me-2" />
                May 2022 - August 2022
              </span>
              <span className="location">
                <FaMapMarkerAlt className="me-2" />
                Mumbai, India
              </span>
            </div>
          </div>
        </div>
        
        <div className="experience-content">
          <div className="achievement">
            <span className="righticon"><FaAngleRight /></span>
            <p>Enhanced the internal dashboard by integrating APIs, streamlining vendor access to sales data and customer details, improving efficiency. This saved SDEs an average of <strong>30 minutes</strong> per task by reducing manual database queries.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
