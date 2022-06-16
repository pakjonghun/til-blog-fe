import React, { useEffect } from "react";
import Layout from "../components/Layout";
import MarkdownIt from "markdown-it";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useNavigate, useParams } from "react-router-dom";
import { getPostFetch } from "../redux/features/post";
import { toast } from "react-toastify";

const Detail = () => {
  const { id } = useParams();
  const post = useAppSelector((state) => state.post.post);
  const dispatch = useAppDispatch();
  const md = new MarkdownIt();

  const nav = useNavigate();

  useEffect(() => {
    if (id) dispatch(getPostFetch({ id }));
    else {
      toast.error("검색이 실패했습니다.");
      nav("/");
    }
  }, [id, nav, dispatch]);

  const result = md.render(post?.body || "");
  return (
    <Layout canBack={true} title='Detail'>
      <article className='mx-auto min-h-[94vh] h-[55rem] px-[10%] overflow-y-auto max-w-[70rem] text-gray-50'>
        <div className='html' dangerouslySetInnerHTML={{ __html: result }} />
      </article>
    </Layout>
  );
};

export default Detail;
