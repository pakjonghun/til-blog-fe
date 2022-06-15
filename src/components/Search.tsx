import { useCallback } from "react";
import { useAppDispatch } from "../hooks/useRedux";
import { searchPosts, setTerm } from "../redux/features/post";

const Search = () => {
  const dispatch = useAppDispatch();

  const onChangeTerm = useCallback(
    (term: string) => {
      dispatch(setTerm(term));
      dispatch(searchPosts({ term, page: 1 }));
    },
    [dispatch]
  );

  return (
    <form
      className='relative'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className='absolute flex items-center left-4 inset-y-0'>
        <svg
          className='h-5 w-5 fill-gray-400'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' />
        </svg>
      </div>

      <input
        onChange={(event) => onChangeTerm(event.target.value)}
        type='text'
        className='pl-10 pr-5 py-2 w-96 xl:w-[30rem] text-gray-500 rounded-sm shadow-md bg-gray-200 focus:outline-none ring-gray-200 focus:ring-1'
        placeholder='검색어를 입력하세요'
      />
    </form>
  );
};

export default Search;
