import React, { useState } from 'react';
import NavBar from '../ResourcePage/NavBar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sample_pic from '../../assets/sample_pic.png'; // Import the sample picture

const Add = () => {
  const [itemTitle, setItemTitle] = useState('');
  const [link, setLink] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [tagName, setTagName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/resource');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        itemTitle,
        link,
        iconUrl,
        tagName,
        category,
        description,
      };

      const response = await fetch('https://media-content.ccbp.in/website/react-assignment/add_resource.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the request was successful, reset form fields and show success message
        setItemTitle('');
        setLink('');
        setIconUrl('');
        setTagName('');
        setCategory('');
        setDescription('');
        toast.success('Resource added successfully!');
      } else {
        // If the request failed, show error message
        toast.error('Failed to add resource');
      }
    } catch (error) {
      // Handle any other errors that may occur during the request
      console.error('An error occurred:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='bg-gray-50'>
      <NavBar />
      <div className="container mx-auto mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-4">
              <button onClick={handleBack}>Back</button>
              <div className='w-[50%] m-auto flex flex-col justify-center'>
                <h2 className="text-2xl font-semibold mb-2 text-center">Add a Resource</h2>
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
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Submit</button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-center items-center md:border md:border-gray-300 rounded-md overflow-hidden" style={{ minHeight: '300px' }}>
                <img src={sample_pic} alt="Sample" className="w-[25%] md:w-full" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default Add;
