import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import blogData from "./blog.json";
import { BLOGLogo } from "@/assets/Bloglogo";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
    const [sortOrder, setSortOrder] = useState("newest");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const uniqueBlogs = blogData.filter(
        (blog, index, self) => index === self.findIndex((b) => b.id === blog.id)
    );

    const sortedBlogs = [...uniqueBlogs].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("fr", { month: "long" });
        return `${day} ${month}`;
    };

    const handleCardClick = (id: number) => {
        navigate(`/blog/${id}`);
    };

    const SkeletonLoader = () => (
        <div className="min-h-screen bg-white text-black">
            <nav className="h-[7vh] bg-white border-b border-gray-200 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
                <Link to="/" className="hover:text-lime-500 transition-colors duration-200">
                    &lt; Portfolio
                </Link>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 hidden md:block">
                    <BLOGLogo />
                </div>
                <div className="w-24 flex items-center justify-end">
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </nav>
            <div className="pt-[8vh] p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <Card key={i} className="bg-white border border-gray-200 lg:w-[22.5vw] w-[84vw] md:w-[22.5vw]">
                            <CardContent className="p-0">
                                <div className="bg-gray-200 w-full h-48 animate-pulse"></div>
                                <div className="p-4 flex justify-between items-center">
                                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-6 bg-gray-200 rounded w-10 animate-pulse"></div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );

    if (isLoading) return <SkeletonLoader />;

    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="h-[7vh] bg-white border-b border-gray-200 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
                <Link to="/" className="hover:text-lime-500 transition-colors duration-200">
                    &lt; Portfolio
                </Link>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 hidden md:block">
                    <BLOGLogo />
                </div>
                <div className="w-24 flex items-center justify-end">
                    <Select onValueChange={setSortOrder} defaultValue="newest">
                        <SelectTrigger className="w-32">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </nav>
            <div className="pt-[8vh] p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sortedBlogs.map((blog) => (
                        <Card key={blog.id} className="bg-white border border-gray-200 cursor-pointer" onClick={() => handleCardClick(blog.id)}>
                            <CardContent className="p-0">
                                <div className="bg-white w-full h-48 flex items-center justify-center">
                                    <img
                                        src={blog.thumbnail}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex justify-between items-center">
                                    <h2 className="text-xl font-semibold text-black truncate max-w-[70%]">
                                        {blog.title}
                                    </h2>
                                    <span className="text-sm text-gray-500">{formatDate(blog.date)}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;