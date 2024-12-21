import React from "react";
import { removeDataFromLocalStorage } from "../../LocalStorage/LocalStorage";

const ShowJobs = ({ local,handleDelete }) => {
    const {_id} = local

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={local.image}
            className="max-w-56 h-56 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{local.job_title}</h1>
            <p className="py-6">
              {(local.description)}
            </p>
            <p>{local.location}</p>
            <div className="flex justify-end">
            <button className="btn btn-error px-10" onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowJobs;
