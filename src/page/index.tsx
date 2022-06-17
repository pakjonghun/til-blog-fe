import { useEffect } from "react";
import { toast } from "react-toastify";
import Hashs from "../components/Hash";
import Item from "../components/Item";
import Layout from "../components/Layout";
import PageBar from "../components/PageBar";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { getPostsFetch } from "../redux/features/post";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, posts, term, page } = useAppSelector((state) => ({
    ...state.post,
  }));

  useEffect(() => {
    if (!term && page === 1) {
      dispatch(getPostsFetch({ page: 1 }));
    }
  }, [dispatch, term, page]);

  if (error) toast.error("오류 발생");
  return (
    <Layout title='Today I Learn'>
      <header className='w-fit min-h-[10vh] pt-5 mx-auto'>
        <Search />
        <Hashs />
      </header>
      <main className='min-h-[84vh]'>
        {isLoading ? (
          <div className='flex items-center justify-center min-h-[84vh]'>
            <Spinner />
          </div>
        ) : (
          <>
            <div className='max-w-screen-xl min-h-[67vh] mx-auto w-fit pt-12'>
              <div className='gap-3 place-items-center grid grid-cols-2 px-5 overflow-y-auto'>
                {posts &&
                  posts.posts?.map(({ id, head: { date } }) => {
                    return <Item id={id} date={date} key={id} title={id} />;
                  })}
              </div>
            </div>
            {posts && posts.totalPage && (
              <PageBar totalPage={posts.totalPage} />
            )}
          </>
        )}
      </main>
    </Layout>
  );
};

export default Home;
