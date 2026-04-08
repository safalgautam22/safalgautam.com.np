import axios from "axios";
import { Nav } from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={"/blog/" + blog._id}
      className="p-10 rounded-2xl mt-10 bg-[#110b0370] shadow-lg hover:scale-105 md:w-[60%]"
    >
      <h1 className="md:text-3xl text-xl font-bold text-(--primary) mb-5 hover:underline transition-all ease-in-out duration-300 ">
        {blog.title}
      </h1>
      <span className="text-gray-500">
        Updated at: {new Date(blog.createdAt).toLocaleDateString()}
      </span>
      <div
        className="mt-5 prose line-clamp-3"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </Link>
  );
};

export const Blogs = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${API}blogs`);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogs();
  }, []);

  return (
    <>
      <head>
        <title>Blogs - Safal Gautam</title>
      </head>
      <Nav showCV={false} />
      <h1 className="font-bold text-center mt-15 text-(--primary) text-3xl">
        My Blogs
      </h1>
      <div className="flex flex-col items-center">
        {blog.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </>
  );
};

