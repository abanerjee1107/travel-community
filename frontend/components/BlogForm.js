import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState('');

    const handleBlogCreate = async () => {
        try {
            const response = await axios.post('/api/blog/create', { title, content, categories: categories.split(',') });
            console.log(response.data);
            // Optionally, you can clear the form fields after successful submission
            setTitle('');
            setContent('');
            setCategories('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="text" placeholder="Categories (comma-separated)" value={categories} onChange={(e) => setCategories(e.target.value)} />
            <button onClick={handleBlogCreate}>Create Blog</button>
        </div>
    );
};

export default BlogForm;
