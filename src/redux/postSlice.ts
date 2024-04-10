import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Post, Posts} from '../model/Post';
import {fetchPosts} from './postService';
import {APIStatus} from '../utils/Enums';

type PostData = {
  posts: Posts;
  status: APIStatus;
  error: null;
};

const initialState: PostData = {
  posts: {posts: []},
  status: APIStatus.LOADING,
  error: null,
};

// interface PostPayload {
//   posts: Post[];
// }

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.posts.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = APIStatus.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = APIStatus.SUCCESS;
        state.posts.posts = state.posts.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action: PayloadAction<any>) => {
        state.status = APIStatus.REJECTED;
        state.error = action.payload.error.message;
      });
  },
});

export const {addPost} = postSlice.actions;
export default postSlice.reducer;
