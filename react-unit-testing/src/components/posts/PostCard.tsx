import React from "react";

export default function PostCard(props: any) {
  const { postData } = props;
  return (
    <div className="relative">
      <div className="card w-96 h-4/5 bg-base-100 shadow-xl">
        <figure className="h-1/2">
          <img src={postData.image} alt="blogImg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{postData.title}</h2>
          <p className="text-clip overflow-hidden border-black h-24">
            {postData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
