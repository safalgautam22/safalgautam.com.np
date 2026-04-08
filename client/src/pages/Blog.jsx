import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const API = import.meta.env.VITE_API_URL;

export const Blog = () => {
  const params = useParams();
  const id = params.id;
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axios.get(`${API}blog/${id}`);
        console.log(id);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlog();
  }, [id]);
  return (
    <>
      <head>
        <title>{blog.title}</title>
      </head>
      <Nav showCV={false} />
      <div className="mt-20 md:w-4/5 m-auto">
        <h1 className="text-center md:text-3xl text-2xl font-bold text-(--primary) mb-10">
          {blog.title}
        </h1>
        <span className="text-gray-500 ">
          Updated at: {new Date(blog.createdAt).toLocaleDateString()}
        </span>
        <div
          className="mt-5 flex prose prose-lg flex-col gap-5 text-4 blogcontent"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        />
        {console.log(blog.body)}
      </div>
    </>
  );
};

export const DeleteBlog = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const deleteblog = async () => {
    try {
      await axios.delete(API+"deleteblog/" + id);
      toast.success(`Blog : ${id} deleted successfully`);
      setTimeout(() => {
        navigate("/blogs");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Toaster position="top-center" />
      <button
        className="w-1/3 h-1/3 bg-(--primary) text-2xl font-bold rounded m-auto"
        onClick={deleteblog}
      >
        Delete
      </button>
    </>
  );
};
