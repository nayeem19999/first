import React, { useEffect, useState } from "react";
import Category from "./Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://next-level-two-ashen.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl text-center font-bold mt-20 border-b-indigo-800 border">
        Category
      </h1>
      <p className="text-center mt-5 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
        Possimus iure at amet reprehenderit nostrum totam ipsa veniam{" "}
      </p>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-3 gap-20">
        {categories.length ? (
          categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))
        ) : (
          <div className="grid grid-cols-3 gap-[500px]">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
