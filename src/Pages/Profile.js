import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../API/APIUtils";
import Avatar from "../components/Avatar";
import Rating from "../components/Rating";
import "../Assets/Styles/Profile.css";

function Profile() {
  const id = useParams().memberId;

  const pathVLoans = "/member/v-loans/" + id;
  const pathVReservations = "/member/v-reservations/" + id;
  const pathVHistories = "/member/v-histories/" + id;
  const pathVReviews = "/member/v-reviews/" + id;
  const pathVProfile = "/member/v-profile/" + id;

  const pathULoans = "/member/u-loans/";
  // const pathUReviews = "/member/u-reviews/";
  // const pathUProfile = "/member/u-profile/";

  const [vloans, setVLoans] = useState([
    {
      loan_id: "",
      title: "",
      loandate: "",
      duedate: "",
    },
  ]);

  const [vreservations, setVReservations] = useState([
    {
      reservation_id: "",
      title: "",
      status: "",
      latestpickup: "",
    },
  ]);

  const [vhistories, setVHistories] = useState([
    {
      loan_id: "",
      title: "",
      loandate: "",
      duedate: "",
      returndate: "",
    },
  ]);

  const [vreviews, setVReviews] = useState([
    {
      review_id: "",
      title: "",
      rating: "",
      comments: "",
      reviewdate: "",
    },
  ]);

  const [vprofile, setVProfile] = useState([
    {
      _id: "",
      name: "",
      email: "",
      location: "",
      password: "",
      profilepic: "",
    },
  ]);

  const getVLoans = async () => {
    const response = await API.get(pathVLoans);
    let result = [];

    if (response.status === 200) {
      result = response.data.data;
    }

    setVLoans(result);
  };

  const getVReservations = async () => {
    const response = await API.get(pathVReservations);
    let result = [];

    if (response.status === 200) {
      result = response.data.data;
    }

    setVReservations(result);
  };

  const getVHistories = async () => {
    const response = await API.get(pathVHistories);
    let result = [];

    if (response.status === 200) {
      result = response.data.data;
    }

    setVHistories(result);
  };

  const getVReviews = async () => {
    const response = await API.get(pathVReviews);
    let result = [];

    if (response.status === 200) {
      result = response.data.data;
    }

    setVReviews(result);
  };

  const getVProfile = async () => {
    const response = await API.get(pathVProfile);
    let result = [];

    if (response.status === 200) {
      result = response.data.data[0];
    }

    setVProfile(result);
  };

  useEffect(() => {
    getVLoans();
    getVProfile();
    getVReservations();
    getVHistories();
    getVReviews();
  }, []);

  const { _id, name, email, location, password, profilepic } = vprofile;

  return (
    <div className="main">
      <h3>Profile</h3>
      <div className="container">
        <div className="item avatar">
          <Avatar mname={name} mimg={profilepic} scale={155} borderw={0} borderc={"#000000"} />
        </div>
        <div className="item">
          <div className="headername">{name}</div>
          <div className="headerlocation">📍 {location}</div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}
        <div className="item">
          <div className="sectionheader">On Loan</div>
          <div className="sectionhr"></div>
          <div className="sectiondiv">
            <ul className="ulists">
              {vloans.map((vl) => (
                <li key={vl.loans._id}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", fontStyle: "italic" }}>{vl.loans.title}</span>
                  <br />
                  Loan date:&nbsp;&nbsp;
                  {vl.loans.loandate}
                  <br />
                  Due date:&nbsp;&nbsp;
                  {vl.loans.duedate}
                  <br />
                  <button className="button">return</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="sectionheader">Reservations</div>
          <div className="sectionhr"></div>
          <div className="sectiondiv">
            <ul className="ulists">
              {vreservations.map((vrs) => (
                <li key={vrs.reservations._id}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", fontStyle: "italic" }}>{vrs.reservations.title}</span>
                  <br />
                  Status:&nbsp;&nbsp;
                  {vrs.reservations.status}
                  <br />
                  Latest Pickup:&nbsp;&nbsp;
                  {vrs.reservations.latestpickup}
                  <br />
                  <button className="button">add to cart</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="sectionheader">History</div>
          <div className="sectionhr"></div>
          <div className="sectiondiv">
            <ul className="ulists">
              {vhistories.map((vh) => (
                <li key={vh.loans._id}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", fontStyle: "italic" }}>{vh.loans.title}</span>
                  <br />
                  Loan date:&nbsp;&nbsp;
                  {vh.loans.loandate}
                  <br />
                  Due date:&nbsp;&nbsp;
                  {vh.loans.duedate}
                  <br />
                  Return date:&nbsp;&nbsp;
                  {vh.loans.returndate}
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="sectionheader">Reviews</div>
          <div className="sectionhr"></div>
          <div className="sectiondiv">
            <ul className="ulists">
              {vreviews.map((vrv) => (
                <li key={vrv.reviews._id}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", fontStyle: "italic" }}>{vrv.reviews.title}</span>
                  <br />
                  Rating:&nbsp;&nbsp;
                  {vrv.reviews.rating} ⭐
                  <br />
                  Review date:&nbsp;&nbsp;
                  {vrv.reviews.reviewdate}
                  <br />
                  Comments:
                  <br />
                  {vrv.reviews.comments}
                  <br />
                  <button className="button">edit</button>
                  {/* Rating: <Rating starsRating={vrv.reviews.rating} />
                  <br /> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}
        <div className="item">
          <div className="sectionheader">Profile</div>
          <div className="sectionhr"></div>
          <div className="sectiondiv">
            <ul className="ulists">
              <li key={_id}>
                <span style={{ fontSize: "18px", fontWeight: "bold", fontStyle: "italic" }}>{name}</span>
                <br />
                Email:&nbsp;&nbsp;
                {email}
                <br />
                Location:&nbsp;&nbsp;
                {location}
                <br />
                Password:&nbsp;&nbsp;
                {password}
              </li>
            </ul>
            <button className="button">edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
