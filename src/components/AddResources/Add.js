import React from 'react';
import NavBar from '../ResourcePage/NavBar';
import { toast } from 'react-toastify';
import sample_pic from '../../assets/sample_pic.png';
import ResourceForm from './ResourceForm';
import axios from 'axios';
import BackButton from './BackButton';

const Add = () => {
  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post('https://media-content.ccbp.in/website/react-assignment/add_resource.json', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        toast.success('Resource added successfully!');
      } else {
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
      <div className="container w-[90%] md:w-full mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <BackButton />
            <ResourceForm onSubmit={handleFormSubmit} />
          </div>
          <div className=" md:visible  md:w-1/2">
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
