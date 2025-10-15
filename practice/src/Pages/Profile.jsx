import React, { useContext } from "react";
import Usercontext from "../Context/Usercontext";
function Profile() {
  const { userdata } = useContext(Usercontext);
  if (!userdata) return <h3>Loading profile...</h3>;
  return (
    <>
      <div>
        <h1>this is profle section fetches data of user from github api</h1>
        <div>
          <img
            src={userdata.avatar_url}
            alt="User Avatar"
            width="150"
            height="150"
            style={{ borderRadius: "50%" }}
          />
          <h2>Username: {userdata.name}</h2>
          <h2>User id: {userdata.id}</h2>    
          <h2>Followers: {userdata.followers}</h2>
          <h2>Public repo: {userdata.public_repos}</h2>      
          <h2>Last login: {userdata.login}</h2>

        </div>
      </div>
    </>
  );
}
export default Profile;
