import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsResponse } from "../../model/data";

const baseUrl = process.env.REACT_APP_URL;

export const getPostsFetch = createAsyncThunk(
  "/posts",
  async ({ page }: { page: number }) =>
    fetch(`${baseUrl}?page=${page}`).then((res) => res.json())
);

export const getPostFetch = createAsyncThunk(
  "post/:id",
  async ({ id }: { id: string }) =>
    fetch(`${baseUrl}/${id}`).then((res) => res.json())
);

export const searchPosts = createAsyncThunk(
  "posts/search",
  async ({ term, page }: { term: string; page: number }) =>
    fetch(`${baseUrl}/search?term=${term}&page=${page}`).then((res) =>
      res.json()
    )
);

type InitialState = {
  page: number;
  term: string;
  hash: string;
  isLoading: boolean;
  error: unknown | null;
  posts: PostsResponse | null;
  post: Post | null;
};

const initialState: InitialState = {
  page: 1,
  term: "",
  hash: "",
  posts: null,
  isLoading: false,
  error: null,
  post: null,
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setTerm: (state, { payload }: PayloadAction<string>) => {
      state.term = payload;
    },
    setHash: (state, { payload }: PayloadAction<string>) => {
      state.hash = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPostsFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostsFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPostsFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getPostFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });
    builder.addCase(getPostFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(searchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(searchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setPage, setTerm, setHash } = postSlice.actions;
export default postSlice.reducer;
