import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getDataFromLocalStorage, setDataInLocalStorage } from "../../LocalStorage/LocalStorage";

const JobDetails = () => {
  const data = useLoaderData();
  const {_id,companyName,deadline,description,duty_hours,experience,job_title,jobSummary,location,postDate,salary,skills} = data;
  const navigate = useNavigate()
  const handleClick=()=>{
    
    const data = getDataFromLocalStorage()
    const exist = data.find(ids=>ids === _id)
    if(!exist){
      setDataInLocalStorage(_id)
      toast('applied successfully')
      navigate('/applied')
    }
    else{
      toast('already exists')
    }
  }
  return (
    <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl rounded-xl text-white my-20 bg-gradient-to-r from-indigo-600 h-16 flex justify-center items-center">Job Details</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 border-2 p-5 roudned-xl">
            <p className="font-bold text-2xl">{job_title}</p>
            <p className="text-xl font-bold mt-5 text-indigo-500">Job Summary</p>
            <hr className="mt-5 border border-black"/>
            <p className="mt-5 ml-5">{jobSummary}</p>
            <hr className="mt-5 border border-black"/>
            <p className="text-indigo-500 font-bold text-xl mt-5">Job Description</p>
            <hr className="mt-5 border border-black"/>
            <p className="ml-5 mt-5">{description}</p>
        </div>
        <div className="col-span-1 border-2 rounded-xl p-10">
            <p>Salary: {salary}</p>
            <p>Skills: {skills}</p>
          <button className="btn bg-indigo-500 text-white mt-10" onClick={handleClick}>apply jobs</button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default JobDetails;
