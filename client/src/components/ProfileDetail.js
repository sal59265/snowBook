import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const ProfileDetail = (props) => {
  const [profileDetails, setProfileDetails] = useState([]);
  const [updateProfile, setUpdateProfile] = useState({
    typeOfRide: [],
    firstName: [],
    image: [],
    lastName: [],
    gender: [],
    zipCode: [],
    interest: [],
    level: [],
    isBackcountry: [],
    personalStory: [],
    contactInfo: [],
    isInstructor: [],
    isOver21: [],
  });

  const displayUser = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/users/${props.match.params.id}`
    );
    setProfileDetails(response.data.userProfile);
  };

  const deleteProfile = async () => {
    const response = await axios.delete(
      `http://localhost:3001/api/users/${props.match.params.id}`
    );
    props.history.push("/");
  };

  const handleChange = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  };

  const handleBooleans = (e) => {
    let bool_value = e.target.value === "true" ? true : false;
    setUpdateProfile({ ...updateProfile, [e.target.name]: bool_value });
  };

  const updateUserProfile = async (e) => {
    //e.preventDefault();

    const response = await axios.put(
      `http://localhost:3001/api/users/${props.match.params.id}`,
      updateProfile
    );

    //console.log(updateProfile);
  };

  useEffect(() => {
    displayUser();
  }, []);

  return (
    <div>
      <div className="user-profiles">
        <h1>
          {profileDetails.firstName} {profileDetails.lastName}
        </h1>
        <img src={profileDetails.image}></img>
        <h2>Gender: {profileDetails.gender}</h2>
        <h2>Zip code: {profileDetails.zipCode}</h2>
        <h2>Interest: {profileDetails.interest}</h2>
        <h2>Level: {profileDetails.level}</h2>
        <h2>Type of ride: {profileDetails.typeOfRide}</h2>
        <h2>Backcountry: YES OR NO HERE</h2>
        <h2>Personal Story: </h2>
        <p> {profileDetails.personalStory}</p>
        <h3>Contact: {profileDetails.personalStory}</h3>
        <h3>Instructor: YES OR NO HERE</h3>
        <h3>Over 21: YES OR NO HERE</h3>

        <div>
          <Form
            handleChange={handleChange}
            handleBooleans={handleBooleans}
            updateProfile={updateProfile}
            updateUserProfile={updateUserProfile}
          />
        </div>

        {/* <div for="first-name" className="grid-container-profile">
          Update your profile
          <form className="form" onSubmit={updateUserProfile}>
            <div>
              <label>Enter first name: </label>
              <input
                id="first-name"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={updateProfile.firstName}
              ></input>

              <label for="last-name">Enter last name: </label>
              <input
                id="last-name"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={updateProfile.lastName}
              ></input>

              <label for="image">Enter image URL</label>
              <input
                id="image"
                type="text"
                name="image"
                onChange={handleChange}
                value={updateProfile.image}
              ></input>

              <label for="gender">Enter gender: </label>
              <input
                id="gender"
                type="text"
                name="gender"
                onChange={handleChange}
                value={updateProfile.gender}
              ></input>

              <label for="zip">Enter zip code: </label>
              <input
                id="zip"
                type="text"
                name="zipCode"
                onChange={handleChange}
                value={updateProfile.zipCode}
              ></input>

              <label for="interest">Enter interest: </label>
              <input
                id="interest"
                type="text"
                name="interest"
                onChange={handleChange}
                value={updateProfile.interest}
              ></input>

              <label for="level">Enter level: </label>
              <input
                id="level"
                type="text"
                name="level"
                onChange={handleChange}
                value={updateProfile.level}
              ></input>

              <label for="ride">Enter ride: </label>
              <input
                id="ride"
                type="text"
                name="typeOfRide"
                onChange={handleChange}
                value={updateProfile.typeOfRide}
              ></input>

              <label for="country">Back country? </label>
              <select
                id="country"
                onChange={handleBooleans}
                name="isBackcountry"
                id="isBackcountry"
                value={updateProfile.isBackcountry}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>

              <label for="story">Have a personal story to tell?</label>
              <input
                id="story"
                type="text"
                name="personalStory"
                onChange={handleChange}
                value={updateProfile.personalStory}
              ></input>

              <label for="contact">Method of contact</label>
              <input
                id="contact"
                type="text"
                name="contactInfo"
                onChange={handleChange}
                value={updateProfile.contactInfo}
              ></input>

              <label for="instructor">Instructor?</label>
              <select
                id="instructor"
                name="isInstructor"
                id="isInstructor"
                onChange={handleBooleans}
                value={updateProfile.isInstructor}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>

              <label for="over">Over 21?</label>
              <select
                id="over"
                name="isOver21"
                id="isOver21"
                onChange={handleBooleans}
                value={updateProfile.isOver21}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
              <input
                type="submit"
                className="profile-btn"
                value="Update Profile"
              ></input>
            </div>
          </form>
        </div> */}
        <button className="profile-btn" onClick={deleteProfile}>
          Delete profile
        </button>
      </div>
    </div>
  );
};

export default ProfileDetail;
