import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";

import { getSimilarPosts, getRecentPosts } from "../../services/index";

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  console.log(relatedPosts);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Relate Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              width="60px"
              height="60px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
