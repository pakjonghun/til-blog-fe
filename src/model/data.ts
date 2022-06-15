export type Post = {
  id: string;
  head: {
    date: string;
    category: string;
  };
  body: string;
};

export type PostsResponse = {
  message?: string;
  posts?: Post[];
  totalPage?: number;
};
