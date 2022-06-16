import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useRedux";
import { getPostsFetch } from "../redux/features/post";

interface props {
  title: string;
  canBack?: boolean;
}

const Navigation: React.FC<props> = ({ title, canBack = false }) => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const onHomeClick = useCallback(() => {
    dispatch(getPostsFetch({ page: 1 }));
  }, [dispatch]);
  return (
    <nav className='relative'>
      <ul className='flex items-center h-14 min-h-[6vh] px-8 bg-slate-900 text-gray-50'>
        {canBack ? (
          <li className='z-10 cursor-pointer' onClick={() => nav(-1)}>
            Back
          </li>
        ) : (
          <li className='z-10'>
            <button onClick={onHomeClick}>Home</button>
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
