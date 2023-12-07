// Profile.js

import React from 'react';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../components/Button';
const Profile = () => {
  const user = {
    username: 'example_user',
    email: 'user@example.com',
    totalPoints: 150,
    matchesPlayed: 20,
    matchesWon: 10,
    matchesLost: 10,
    photo: 'https://media.tenor.com/WfZD9HMO5sIAAAAC/hum-pe-toh-hai-hi-nau-arpit-bala.gif',
  };

  return (
    <div className="profile-container">
      {/* Small Header */}
      <h3 className="text-lg font-semibold mb-4 text-center" >My Profile</h3>

      <div className="flex flex-col items-center">
        <img
          src={user.photo}
          alt="Profile"
          className="rounded-full h-24 w-24 mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{user.username}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="mt-6">
        <p>Total Points: {user.totalPoints}</p>
        <p>Matches Played: {user.matchesPlayed}</p>
        <p>Matches Won: {user.matchesWon}</p>
        <p>Matches Lost: {user.matchesLost}</p>
      </div>
      {/* <Link to='/home'><Button text="Back" imgComponent={<IoArrowBackCircleSharp size={25}/>} /></Link> */}

    </div>
  );
};

export default Profile;
