import React, { useCallback } from "react";
import { useAppDispatch } from "../hooks/useRedux";
import { searchPosts, setPage, setTerm } from "../redux/features/post";

const Hashs = () => {
  const dispatch = useAppDispatch();

  const onHashClick = useCallback(
    (hash: string) => {
      dispatch(setPage(1));
      dispatch(setTerm(hash));
      dispatch(searchPosts({ term: hash, page: 1 }));
    },
    [dispatch]
  );

  return (
    <ul className='flex items-center space-x-3 pl-3 py-3 text-sm'>
      <li className='text-gray-600'>해시태그 : </li>
      {["til", "webpack", "tailwind", "algo"].map((hash) => (
        <li className='text-gray-500 hover:text-gray-800' key={hash}>
          <button onClick={() => onHashClick(hash)}>{hash}</button>
        </li>
      ))}
    </ul>
  );
};

export default Hashs;
