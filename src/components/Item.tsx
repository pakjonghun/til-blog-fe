import React from "react";
import { Link } from "react-router-dom";

interface props {
  id: string;
  title: string;
  date: string;
}

const Item: React.FC<props> = ({ id, title, date }) => {
  return (
    <Link to={`/${id}`}>
      <div className='w-[13rem] sm:w-[17rem] md:w-[21rem] lg:w-[25rem] xl:w-[30rem] text-center bg-gray-200 inline-block py-5 rounded-md shadow-md transition-all duration-75 hover:scale-[101%] active:scale-100'>
        <h1 className='uppercase font-medium text-gray-800'>
          {title.split(".md")[0].slice(0, 14)}
        </h1>
        <small className='text-gray-500 text-sm'>{date.slice(0, 10)}</small>
      </div>
    </Link>
  );
};

export default Item;
