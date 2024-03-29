import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import useAsyncEffect from "@/hooks/useAsyncEffect";

import { getRecentPosts, getSimilarPosts } from "@/services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  // client side fetching, use async in custom hooks
  useAsyncEffect(async () => {
    if (slug) {
      const result = await getSimilarPosts(categories, slug);
      setRelatedPosts(result);
    } else {
      const result = await getRecentPosts();
      setRelatedPosts(result);
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts?.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-md"
              key={post.title}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
