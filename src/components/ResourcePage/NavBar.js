import React from 'react';
import nxtwave_logo from "../../assets/NxtWave TM_Coloured logo 1.png"; 
import profile_pic from "../../assets/profile_pic.png";
import { useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
    const navigate = useNavigate();
    const handleAddClick = () => {
      navigate('/add');
    }
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={nxtwave_logo} alt="Logo" className="w-10 md:w-[25%]" />
        </div>

        {/* Right Section: Add Button and Profile Image */}
        <div className="flex items-center space-x-4">
          {
            // show add button only on resourcePage
            window.location.pathname === "/resource" && (
              <button onClick={handleAddClick} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                + Add
              </button>
            )
          }
          <ProfileMenu profileImage={profile_pic} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
