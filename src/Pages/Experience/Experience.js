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
        <p className="fs-1">Software Developer Intern</p>
        <p className="fs-2">
          <a href="https://liquiloans.com/">Liquiloans</a>
        </p>
        <p className="fs-4">May 2022 - Present</p>
        <p className="fs-5">
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              Resolving queries and issues on the website.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              working with API's and databases. 
            </p>
          </div>
          <div>
            <p>
              {" "}
              <span className="righticon">
                {" "}
                <FaAngleRight />
              </span>{" "}
              Converting the website from monolithic to microservices architecture.
            </p>
          </div>     
        </p>
      </div>
    </div>
  );
}

export default Experience;
