import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import blogData from "./blog.json";
import { BLOGLogo } from "@/assets/Bloglogo";
import Llt from "@/components/ui/&lt";
import { Link, useParams } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === Number(id));

    const [content, setContent] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (blog && blog.content) {
                const converter = new QuillDeltaToHtmlConverter(blog.content.ops, {});
                const htmlContent = converter.convert();
                setContent(htmlContent);
            }
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [blog]);

    const formatDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("fr", { month: "long" });
        return `${day} ${month}`;
    };

    const SkeletonLoader = () => (
        <div className="min-h-screen bg-white text-black">
            <nav className="h-[7vh] bg-white border-b border-gray-200 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
                <Link to="/blog" className="hover:text-lime-500 transition-colors duration-200">
                    <Llt /> Blog
                </Link>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 hidden md:block">
                    <BLOGLogo />
                </div>
                <div className="w-24"></div>
            </nav>
            <div className="pt-[8vh] px-[2.5vw]">
                <div className="flex justify-between items-center mb-6">
                    <div className="h-12 bg-gray-200 rounded w-[60vw] animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded w-[15vw] ml-[20vw] lg:w-[5vw] lg:ml-[30vw] animate-pulse"></div>
                </div>
                <div className="h-[80vh] bg-gray-200 rounded w-[95vw] animate-pulse"></div>
            </div>
        </div>
    );

    if (isLoading) return <SkeletonLoader />;
    if (!blog) return (
        <div className="min-h-screen flex justify-center items-center">
            <nav className="h-[7vh] bg-white border-b border-gray-200 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
                <Link to="/blog" className="hover:text-lime-500 transition-colors duration-200">
                    <Llt /> Blog
                </Link>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 hidden md:block">
                    <BLOGLogo />
                </div>
                <div className="w-24"></div>
            </nav>
            <div className="text-center pl-[48vw]">Post not found</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="h-[7vh] bg-white border-b border-gray-200 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
                <Link to="/blog" className="hover:text-lime-500 transition-colors duration-200">
                    <Llt /> Blog
                </Link>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 hidden md:block">
                    <BLOGLogo />
                </div>
                <div className="w-24"></div>
            </nav>
            <div className="pt-[8vh] px-[2.5vw]">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-black">{blog.title}</h1>
                    <span className="text-sm text-gray-500">{formatDate(blog.date)}</span>
                </div>
                <ReactQuill
                    value={content}
                    readOnly={true}
                    modules={{ toolbar: false }}
                    style={{ border: "none" }}
                    className="border-none bg-white"
                />
            </div>
        </div>
    );
};

export default BlogPost;