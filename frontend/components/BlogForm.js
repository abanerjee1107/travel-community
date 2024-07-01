import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState('');
    const [error, setError] = useState('');

    const handleBlogCreate = async () => {
        if (!title || !content || !categories) {
            setError('All fields are required.');
            return;
        }

        try {
            const response = await axios.post('/api/blog/create', { title, content, categories: categories.split(',') });
            console.log(response.data);
            setTitle('');
            setContent('');
            setCategories('');
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error(error);
            setError('Failed to create blog. Please try again.'); // Provide specific error message for failed submission
        }
    };

    return (
        <div>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="text" placeholder="Categories (comma-separated)" value={categories} onChange={(e) => setCategories(e.target.value)} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={handleBlogCreate}>Create Blog</button>
        </div>
    );
};

export default BlogForm;
