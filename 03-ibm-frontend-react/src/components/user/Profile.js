import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <div className="container mt-3 d-flex flex-row justify-content-evenly" >
            <div className="">
            <h1>PROFILE</h1>
            
            {userData && (
                // <div>
                //     <p>Username: {userData.username}</p>
                //     <p>Fist name: {userData.firstName}</p>
                //     <p>Last Name: {userData.lastName}</p>
                //     <p>Phone: {userData.phone}</p>
                //     <p>Email: {userData.email}</p>
                //     {userData.avatar && <img width={'300px'} src={userData.avatar} alt="Avatar" />}
                // </div>

                <div className="card d-flex flex-col shadow-lg" >
                    {userData.avatar && <img src={userData.avatar} className="w-100"  width={200} alt="Profile Avatar"/>}
                    <div className="card-body">
                        <h5 className="card-title">{userData.username}</h5>
                        <p>Fist name: {userData.firstName}</p>
                        <p>Last Name: {userData.lastName}</p>
                        <p>Phone: {userData.phone}</p>
                        <p>Email: {userData.email}</p>
                        
                    </div>
                </div>
                
            )}
            </div>
            <div>
            <UpdateProfile />
                
            </div>

            
        </div>
    );
};

export default Profile;
