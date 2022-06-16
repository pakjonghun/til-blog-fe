import React, { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { getPostsFetch, searchPosts, setPage } from "../redux/features/post";

interface props {
  totalPage: number;
}

const PageBar: React.FC<props> = ({ totalPage }) => {
  const dispatch = useAppDispatch();
  const term = useAppSelector((state) => state.post.term);

  const perPage = 10;
  const endCursor = Math.ceil(totalPage / perPage);

  const [pageCursor, setPageCursor] = useState(1);
  const pageList = Array.from(Array(totalPage).keys())
    .map((page) => page + 1)
    .slice((pageCursor - 1) * perPage, pageCursor * perPage);

  const onPreviousClick = useCallback(() => {
    setPageCursor((pre) => (pre > 1 ? pre - 1 : pre));
  }, []);

  const onNextClick = useCallback(() => {
    setPageCursor((pre) => (pre < endCursor ? pre + 1 : pre));
  }, [endCursor]);

  const onPageClick = useCallback(
    (page: number) => {
      dispatch(setPage(page));
      if (term) {
        dispatch(searchPosts({ term, page }));
      } else {
        dispatch(getPostsFetch({ page }));
      }
    },
    [dispatch, term]
  );

  return (
    <ul className='grid grid-cols-[1fr_17rem_1fr] gap-5 place-items-center min-h-[17vh] w-fit mx-auto text-gray-50 text-sm font-medium'>
      <li
        onClick={onPreviousClick}
        className='hover:scale-110 active:scale-100 transition-all duration-75 cursor-pointer'
      >
        이전
      </li>
      <li className='flex items-center space-x-3 justify-center'>
        {pageList.map((page) => (
          <button
            onClick={() => onPageClick(page)}
            key={page}
            className='block w-4'
          >
            {page}
          </button>
        ))}
      </li>
      <li
        onClick={onNextClick}
        className='hover:scale-110 active:scale-100 transition-all duration-75 cursor-pointer'
      >
        다음
      </li>
    </ul>
  );
};

export default PageBar;
