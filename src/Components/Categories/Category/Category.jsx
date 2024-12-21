import React from "react";
import { GrTechnology } from "react-icons/gr";

const Category = ({ category }) => {
  const { category_name, img } = category;
  return (
    <div className="border-2 px-16 py-10 rounded-xl bg-indigo-100">
      <div className="">
        <img src={img} alt="" />
        <div className="flex items-center gap-2 justify-center">
        <GrTechnology />
          <h3 className="font-bold text-xl">{category_name}</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Category;
