import React, { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";

const Jobs = () => {
  const [firstValue, setFirstValue] = useState(4);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://next-level-two-ashen.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <h1 className="text-5xl text-center font-bold border-b-indigo-800 border">
        JOBS
      </h1>
      <div className="mt-10 grid grid-cols-2 gap-10">
        {
        jobs.length ?jobs.slice(0, firstValue).map((job) => (
          <Job key={job._id} job={job}></Job>
        )):<h1>loading...</h1>
        }
      </div>
      <div className="flex justify-center">
        {/* <button onClick={()=>setFirstValue(jobs.length)} className="btn btn-primary mt-10 px-10 text-lg">See All</button> */}
        {
            firstValue === 4?<button onClick={()=>setFirstValue(jobs.length)} className="btn btn-primary mt-10 px-10 text-lg">See All</button>:<button onClick={()=>setFirstValue(4)} className="btn btn-primary mt-10 px-10 text-lg">show only four</button>
        }
      </div>
    </div>
  );
};

export default Jobs;
