import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface props {
  title: string;
  canBack?: boolean;
}

const Navigation: React.FC<props> = ({ title, canBack = false }) => {
  const nav = useNavigate();
  return (
    <nav className='relative'>
      <ul className='flex items-center px-8 h-12 bg-slate-700 text-gray-50'>
        {canBack ? (
          <li className='z-10 cursor-pointer' onClick={() => nav(-1)}>
            Back
          </li>
        ) : (
          <li className='z-10'>
            <Link to='/'>Home</Link>
          </li>
        )}
        <li className='absolute inset-0 flex items-center justify-center text-xl font-medium'>
          {title}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
