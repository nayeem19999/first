import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage, removeDataFromLocalStorage } from "../../LocalStorage/LocalStorage";
import { useLoaderData } from "react-router-dom";
import ShowJobs from "./ShowJobs";

const AppliedJobs = () => {
  const values = useLoaderData();
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    const data = getDataFromLocalStorage();
    const jobsApplied = [];
    for (const dat of data) {
      const final = values.find((value) => dat === value._id);
      if (final) {

        jobsApplied.push(final);
      }
    }
    setLocalData(jobsApplied);
  }, []);

  const handleDelete = id => {
    const filterData = localData.filter(idx => idx._id !== id)
    setLocalData(filterData)
    removeDataFromLocalStorage(id)
    console.log(id)
  }
  // const handleSort=(e)=>{
  //   console.log(e.target.value)
    
  //   if(e.target.value === 'Dhaka'){
  //     const datas = values.filter(data=>data.location === e.target.value)
  //     setLocalData(datas)
  //   }
  // }

  return (
    <div>
      <h1 className='text-center font-bold text-5xl my-10 max-w-7xl mx-auto bg-gradient-to-r from-indigo-600 h-16 flex justify-center items-center'>Applied jobs</h1>
      <div className="max-w-7xl mb-20 mx-auto">
        <select  className="select select-primary w-full max-w-xs">
          <option value="select option"></option>
          <option >Dhaka</option>
          <option>Chittagong</option>
          <option>Gazipur</option>
          <option>Rajsahi</option>
        </select>
      </div>
      <div>
        {localData.map((local) => (
          <ShowJobs key={local._id} local={local} handleDelete={handleDelete}></ShowJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
