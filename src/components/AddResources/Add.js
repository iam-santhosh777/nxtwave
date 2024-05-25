import React from 'react';
import NavBar from '../ResourcePage/NavBar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import sample_pic from '../../assets/sample_pic.png'; // Import the sample picture
import ResourceForm from './ResourceForm';

const Add = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/resource');
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('https://media-content.ccbp.in/website/react-assignment/add_resource.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Resource added successfully!');
      }
      else {
        toast.error('Failed to add resource');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='bg-gray-50'>
      <NavBar />
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <button onClick={handleBack}>Back</button>
            <ResourceForm onSubmit={handleFormSubmit} />
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center items-center md:border md:border-gray-300 rounded-md overflow-hidden" style={{ minHeight: '300px' }}>
              <img src={sample_pic} alt="Sample" className="w-[25%] md:w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
