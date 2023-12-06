// Leaderboard.js

import React, { useEffect,useState } from 'react';
import images from '../components/images/images';
import auth from '../Appwrite/auth';

const Leaderboard = () => {
  const [userData, setUserData] = useState(null);
  useEffect(()=>{
    try {
      auth.getAllUsersDocument()
      .then((response)=>{
        setUserData(response);  //userData.map() is not a function
    userData?userData.sort(function(a, b){return a.totalPoints - b.totalPoints}):null
      })
    } catch (error) {                              
      console.log("Error at fetching data from getAllUsersDocument",error);
    }
      
  },[])  //[] narakhda kina infinitely run hunxa??
  useEffect(()=>{
    console.log(userData);

  },[userData])
  // const data=[
  //   {
  //     username:"Manic",
  //     totalPoints:45
  //   },
  //   {
  //     username:"Suresh",
  //     totalPoints:105
  //   },{
  //     username:"Suresh",
  //     totalPoints:105
  //   }
  // ]
  return (
    
    <div className="leaderboard-container">
      <img src={`${images.LeaderboardImage}`} alt="" srcSet="" className="w-full" />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">S.N</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {userData?userData.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.totalPoints}</td>
            </tr>
          )):null}
        </tbody>
      </table>
    </div>
  );
};

  
  

     

export default Leaderboard;
