import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = ({ blog }) => (
  <div>
    <h2>{blog.title}</h2>
    <p>{blog.content}</p>
    <small>By {blog.authorName}</small>
  </div>
);

const BlogContainer = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get('/api/blog/posts');
                setBlogPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchBlogPosts();
    }, []);

    return (
        <div>
            <h2>Travel Advice and Tips</h2>
            {blogPosts.map((post) => (
                <Blog key={post._id} blog={post} />
            ))}
        </div>
    );
};

export default BlogContainer;
