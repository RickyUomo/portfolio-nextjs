import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  {
    name: "leetcode",
    slug: "/leetcode",
  },
  {
    name: "web dev",
    slug: "/web-dev",
  },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full border-blue-400 py-8">
        <div className="md:flow-left inline-block">
          <Link href="/">
            <span className="font-bold cursor-pointer text-4xl text-white">
              Ricky Blog
            </span>
          </Link>
        </div>
        <div className="hidden float-right md:inline pt-2">
          {categories.map((category) => (
            <Link key={category.slug} href={`category${category.slug}`}>
              <span className="md:float-right text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
