import { useState, useEffect } from "react";
import BlogList from "./Blog-list";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id, blogs) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                // console.log('hello');

            });
    }, []);
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete} />}

            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'himu')} title="Himu's Blog" /> */}
        </div>
    );
}

export default Home;