import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../utils/userSlice';
const ProfileMenu = ({ profileImage }) => {
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user); 

  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    navigate('/nxtwave/');
    dispatch(clearUser());
  };
  if (!user.isLoggedIn) {
    return null;
  }

  return (
    <div className="relative inline-block">
      <img
        src={profileImage}
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg"
        onClick={handleProfileClick}
      />
      {isMenuVisible && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-xl">
          <button
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
