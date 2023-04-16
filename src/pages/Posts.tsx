import React, { useState, useEffect } from "react";
import useFetchPosts from "../hooks/useFetchPosts";
import { Post } from "../components";

interface Post {
  id: number;
  title: string;
  body: string;
}


export default function Posts() {
  console.log(`Hello from Posts`)
  const { data: allPosts, isLoading, error } = useFetchPosts<Post[]>("posts");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // console.log(allPosts)

  useEffect(() => {
    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, allPosts]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Posts</h1>
        </div>
        <div className="search-posts">
          <input type="text" placeholder="Search Posts" onChange={handleSearch} />
        </div>
        {isLoading && <div className="loading">
          <h1>Loading ...</h1>
        </div>}
        <ul className="posts">
          {filteredPosts.map((p: Post, i: number) => (
            <Post
              key={i}
              id={p.id}
              title={p.title}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
