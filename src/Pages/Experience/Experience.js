import React from "react";
import "./Experience.css";
import { FaAngleRight } from "react-icons/fa";
function Experience() {
  return (
    <div className="container experience_section" id="Experience">
      <h2 class="exp_heading">
        <span>EXPERIENCE</span>
      </h2>
      <div className="">
        <p className="fs-1">Software Development Engineer - Backend</p>
        <p className="fs-2">
          <a href="https://getstan.app/">Stanverse Technologies</a>
        </p>
        <p className="fs-4">January 2023 - Present</p>
        <p className="fs-5">
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              Implemented PhonePe Payment Gateway across the app, saving INR 18 million in operational costs by avoiding
Google Play charges.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              Developed Missions feature that incentivized and addressed user retention challenges, resulting in a remarkable 29%
increase in user retention rates.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              Implemented Offerwall feature through third-party ad network integration, driving 500K in revenue through user
rewards tied to installations and sign-ups.
            </p>
          </div>   
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              Innovated STAN Contra game, a play-to-earn feature, driving engagement with 200K+ active users and
empowering content creators
            </p>
          </div>     
        </p>
      </div>
      <div className="">
        <p className="fs-1">Software Developer Intern</p>
        <p className="fs-2">
          <a href="https://liquiloans.com/">Liquiloans</a>
        </p>
        <p className="fs-4">May 2022 - August 2022</p>
        <p className="fs-5">
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              Enhanced the internal dashboard by integrating APIs, streamlining vendor access to sales data and customer details,
which improved transparency and efficiency. This innovation saved SDEs an average of 30 minutes per task by reducing
manual database queries.
            </p>
          </div>  
        </p>
      </div>
    </div>
  );
}

export default Experience;
