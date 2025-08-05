'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import cheerio from 'cheerio';

export default function AdminPanel() {
  const { data: session, status } = useSession();
  const [articles, setArticles] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  // Categories for dropdown
  const categories = ['Breaking News', 'News', 'Sports', 'Entertainment', 'Tech', 'Opinions'];

  // Load articles
  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  // Initialize Quill editor when editing
  useEffect(() => {
    if (editingPost && editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: { toolbar: [['bold', 'italic'], ['link'], [{ list: 'ordered' }, { list: 'bullet' }]] },
      });
      quillRef.current.root.innerHTML = editingPost.content.replace(/\n\n/g, '<p><br></p>');
      quillRef.current.on('text-change', () => {
        const html = quillRef.current.root.innerHTML;
        const $ = cheerio.load(html);
        const plainText = $.text().replace(/\n\s*\n/g, '\n\n').trim();
        setEditingPost({ ...editingPost, content: plainText });
      });
    }
  }, [editingPost]);

  // Handle authentication
  if (status === 'loading') return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (!session) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-slate-600 mt-4">Please sign in to access the admin panel.</p>
        <button
          onClick={() => signIn()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </div>
    );
  }

  // Handle Edit
  const handleEdit = (post) => {
    setEditingPost({ ...post, date: post.date.split('T')[0] });
  };

  // Handle Save
  const handleSave = async () => {
    if (!editingPost) return;
    const updatedArticles = articles.map(post =>
      post.id === editingPost.id ? editingPost : post
    );
    await fetch('/api/articles', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedArticles),
    });
    setArticles(updatedArticles);
    setEditingPost(null);
    quillRef.current = null;
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    const updatedArticles = articles.filter(post => post.id !== id);
    await fetch('/api/articles', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedArticles),
    });
    setArticles(updatedArticles);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Admin Panel</h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>

      {/* Post List */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        <ul className="space-y-4">
          {articles.map(post => (
            <li key={post.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <span className="text-slate-900">{post.title}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Edit Form */}
      {editingPost && (
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={editingPost.title}
              onChange={e => setEditingPost({ ...editingPost, title: e.target.value })}
              className="w-full p-2 border border-slate-200 rounded"
              placeholder="Title"
            />
            <textarea
              value={editingPost.description}
              onChange={e => setEditingPost({ ...editingPost, description: e.target.value })}
              className="w-full p-2 border border-slate-200 rounded"
              placeholder="Description"
            />
            <input
              type="text"
              value={editingPost.image}
              onChange={e => setEditingPost({ ...editingPost, image: e.target.value })}
              className="w-full p-2 border border-slate-200 rounded"
              placeholder="Image URL"
            />
            <select
              value={editingPost.category}
              onChange={e => setEditingPost({ ...editingPost, category: e.target.value })}
              className="w-full p-2 border border-slate-200 rounded"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="date"
              value={editingPost.date}
              onChange={e => setEditingPost({ ...editingPost, date: e.target.value })}
              className="w-full p-2 border border-slate-200 rounded"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={editingPost.isFeatured}
                onChange={e => setEditingPost({ ...editingPost, isFeatured: e.target.checked })}
              />
              Featured
            </label>
            <input
              type="number"
              value={editingPost.views}
              onChange={e => setEditingPost({ ...editingPost, views: parseInt(e.target.value) || 0 })}
              className="w-full p-2 border border-slate-200 rounded"
              placeholder="Views"
            />
            <div className="border border-slate-200 rounded">
              <div ref={editorRef} className="min-h-[200px]"></div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditingPost(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}