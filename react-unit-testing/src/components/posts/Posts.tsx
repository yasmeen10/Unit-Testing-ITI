import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchPostsData() {
      try {
        const { data } = await axios.get("http://localhost:3000/posts");
        setPostsData(data);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        setError("something went wrong");
      }
    }
    fetchPostsData();
  }, []);

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <div role="alert">{error}</div>;

  if (!postsData?.length) return <div>No posts</div>;

  return (
    <>
      <div className="grid  grid-rows-1 mt-10 grid-flow-col justify-center items-center  gap-3">
        {postsData.map((post: any) => (
          <article>
            <PostCard postData={post} key={post._id} />
          </article>
        ))}
      </div>
    </>
  );
}
