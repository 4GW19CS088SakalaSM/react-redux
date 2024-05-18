// UpdateProfile.js 

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    console.log('UpdateProfile');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    console.log(userData);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        console.log(evt.target);
        console.log(formData);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        console.log(formData);
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            console.log(user);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <div className="">
            
            <div className="card d-flex flex-col shadow-lg" >
            <div class="card-body">
            <h1 className="card-title">UPDATE PROFILE</h1>
            <form className="form form-group mx-2 py-2 my-2 py-2" onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input className="form-control" type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange} autoFocus required />
                <br />
                <label>Last Name:</label>
                <input className="form-control" type="text" name="lastName" value={formData.lastName}
                    onChange={handleChange} required />
                <br />
                <label>Phone:</label>
                <input className="form-control" type="number" name="phone" value={formData.phone}
                    onChange={handleChange} required />
                <br />
                <label>Email:</label>
                <input className="form-control" type="email" name="email" value={formData.email}
                    onChange={handleChange} required />
                <br />
                <label>Avatar:</label>
                <input className="form-control" type="text" name="avatar" value={formData.avatar}
                    onChange={handleChange} />
                <br />
                <button className="form-control btn btn-outline-light"  type="submit">Update Your Profile</button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
