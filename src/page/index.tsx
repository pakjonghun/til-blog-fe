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
    <Layout title='TilBlog'>
      <header className='mt-5 mx-auto w-fit'>
        <Search />
        <Hashs />
      </header>
      <main className='space-y-10'>
        {isLoading ? (
          <div className='flex items-center justify-center h-[70vh]'>
            <Spinner />
          </div>
        ) : (
          <>
            <div className='max-w-screen-xl  mx-auto w-fit h-[65vh] pt-5'>
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
