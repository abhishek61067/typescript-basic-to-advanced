import { PostProps } from "@/types/types";
import React from "react";

const PostCard = (props: PostProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <br />
    </div>
  );
};

export default PostCard;
