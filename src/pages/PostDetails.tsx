import React from "react";
import { useParams } from "react-router-dom";
import useFetchPosts from "../hooks/useFetchPosts";
import Comment from "../components/Comment";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User;
  comments: Comment[];
}

interface User {
  name: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function PostDetails() {
  const { id } = useParams();
  const { data, isLoading: postsLoading, error: postsError } = useFetchPosts<Post>(`posts/${id}?_expand=user&_embed=comments`);
  console.log(`Hello from Post/${id}`);  
  return (
    <div className='container'>
      {postsLoading && <div className="loading">
        <h1>Loading ...</h1>
      </div>}
      <div className='post-detail'>
        <h5>{data?.user?.name}</h5>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
      <div className="comments">
        <div className="comment-title">
          <h1>Comments</h1>
        </div>
        {data?.comments?.map((c, i) => (
          <Comment
            key={i}
            name={c.name}
            email={c.email}
            body={c.body}
          />
        ))}
      </div>
    </div>
  );
}
