import React from "react";
import "./Experience.css";
import { FaAngleRight, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <div className="container experience-section" id="Experience">
      <h2 className="experience-heading">
        <span>EXPERIENCE</span>
      </h2>
      
      <div className="container">
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Stanverse Technologies Pvt Ltd (STAN)</h3>
                <p className="position">Software Development Engineer - Backend | Golang, NodeJs</p>
                <p className="duration">
                  <FaCalendarAlt className="icon" /> January 2023 - Present
                </p>
                <p className="location">
                  <FaMapMarkerAlt className="icon" /> Bangalore, India
                </p>
              </div>
            </div>
            <div className="experience-content">
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Integrated <strong>PhonePe Payment Gateway</strong> across the app, saving INR 80 million in operational costs by avoiding Google Play charges.</span>
              </div>
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Designed and launched the <strong>Communities</strong> feature on STAN, facilitating the creation of over <strong>1000+ communities</strong> with <strong>30+ million users</strong>. This feature allows moderators to send messages, images, videos, and audio, with users engaging through reactions in a one-way communication format.</span>
              </div>
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Introduced and developed a <strong>user gifting</strong> feature in clubs to drive revenue through ad engagements and currency purchases. Enhanced user engagement by creating <strong>leaderboards</strong> for a competitive edge, rewarding top gifters and club hosts.</span>
              </div>
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Engineered <strong>Missions</strong> feature that incentivized and addressed user retention challenges, resulting in a remarkable <strong>29% increase in user retention</strong> rates.</span>
              </div>
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Organized <strong>Offerwall</strong> feature through third-party ad network integration, driving <strong>1.3 million in revenue</strong> through user rewards tied to installations and sign-ups.</span>
              </div>
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Developed a <strong>Store</strong> feature with vendors - Gyftr, Xoxo and Qwikcilver, driving <strong>40 cr</strong> in gift card sales, and built a system to distribute coupons as rewards across the app.</span>
              </div>
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Innovated <strong>STAN Contra</strong> game, a play-to-earn feature, driving engagement with <strong>300K+ active users</strong> and empowering content creators.</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Liquiloans</h3>
                <p className="position">Software Developer Intern | PHP, Laravel</p>
                <p className="duration">
                  <FaCalendarAlt className="icon" /> May 2022 - August 2022
                </p>
                <p className="location">
                  <FaMapMarkerAlt className="icon" /> Mumbai, India
                </p>
              </div>
            </div>
            <div className="experience-content">
              <div className="achievement">
                <FaAngleRight className="righticon" />
                <span>Enhanced the internal dashboard by integrating APIs, streamlining vendor access to sales data and customer details, improving efficiency. This saved SDEs an average of <strong>30 minutes</strong> per task by reducing manual database queries.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
