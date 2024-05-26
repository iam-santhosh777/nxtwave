import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResourceForm = ({ onSubmit }) => {
  const [itemTitle, setItemTitle] = useState('');
  const [link, setLink] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [tagName, setTagName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      itemTitle,
      link,
      iconUrl,
      tagName,
      category,
      description,
    };
    onSubmit(formData);
  };

  return (
    <div className='w-[90%] md:w-[50%] m-auto flex flex-col justify-between'>
      <h2 className="text-2xl font-semibold mb-2 text-center">Add a Resource</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemTitle" className="block mb-1">Item Title</label>
        <input type="text" id="itemTitle" value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} className="w-full border rounded-md px-1 py-2 mb-4" required />
        <label htmlFor="link" className="block mb-1">Link</label>
        <input type="text" id="link" value={link} onChange={(e) => setLink(e.target.value)} className="w-full border rounded-md px-1 py-2 mb-4" required />
        <label htmlFor="iconUrl" className="block mb-1">Icon URL</label>
        <input type="text" id="iconUrl" value={iconUrl} onChange={(e) => setIconUrl(e.target.value)} className="w-full border rounded-md px-1 py-2 mb-4" required />
        <label htmlFor="tagName" className="block mb-1">Tag Name</label>
        <select id="tagName" value={tagName} onChange={(e) => setTagName(e.target.value)} className="w-full border rounded-md px-1 py-2 mb-4" required>
          <option value="">Select Tag</option>
          <option value="user">User</option>
          <option value="resource">Resource</option>
          <option value="request">Request</option>
        </select>
        <label htmlFor="category" className="block mb-1">Category</label>
        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded-md px-1 py-2 mb-4" required />
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded-md px-4 py-2 mb-4" required />
        <div className='flex justify-center '>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Create</button>
        </div>
      </form>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default ResourceForm;
