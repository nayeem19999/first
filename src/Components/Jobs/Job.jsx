import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
//   console.log(job);
  const {
    _id,
    category_name,
    salary,
    companyName,
    duty_hours,
    experience,
    image,
    location,
    job_title,
  } = job;
  return (
    <div>
      <div className="border py-5 px-5 rounded-xl">
        <img className=" h-[200px]" src={job.image} alt="" />
        <div className="ml-5">
          <p className="text-xl font-bold">{job_title}</p>
          <p className="font-bold">{companyName}</p>
          <p className="text-lg">{duty_hours}</p>
          <div className="flex gap-5 mb-3">
            <p className="flex items-center gap-1 text-lg">
              <CiLocationOn></CiLocationOn>
              {location}
            </p>
            <p className="flex items-center gap-1">
              <CiDollar /> {salary}
            </p>
          </div>
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
      
    </div>

  );
};

export default Job;
