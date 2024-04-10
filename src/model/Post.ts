export type Posts = {
  posts: Post[];
};

export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface Post {
  age: number;
}
