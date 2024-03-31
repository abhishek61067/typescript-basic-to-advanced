"use client";
import PostCard from "@/components/PostCard";
import { PostProps } from "@/types/types";
import React, { useEffect, useState } from "react";

const PostPage = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/post")
      .then((res) => res.json())
      .then((data) => {
        setPostList(data);
      });
  }, []);
  console.log("postlist: ", postList);
  return (
    <div>
      <h1>List of posts:</h1>
      {(postList.length > 0 ? (
        postList?.map((el: PostProps) => {
          return (
            <PostCard key={el.id} id={el.id} title={el.title} body={el.body} />
          );
        })
      ) : (
        <p>Data empty</p>
      )) ?? <p>Data is null</p>}
    </div>
  );
};

export default PostPage;
