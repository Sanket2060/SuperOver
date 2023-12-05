// Leaderboard.js

import React from 'react';

const Leaderboard = () => {
  const data=[
    {
      username:"Manic",
      totalPoints:45
    },
    {
      username:"Suresh",
      totalPoints:105
    },{
      username:"Suresh",
      totalPoints:105
    }
  ]
  return (
    <div className="leaderboard-container">
      <h2 className="text-2xl font-bold mb-4 text-center">Leaderboard</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">S.N</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Sorry to not have your name here as it is Still under development</div>
    </div>
  );
};

export default Leaderboard;
