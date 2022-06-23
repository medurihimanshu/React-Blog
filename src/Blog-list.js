const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="Blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <button onClick={() => handleDelete(blog.id, blogs)}>Delete</button>
                </div>
            ))}
        </div>

    );
}

export default BlogList;