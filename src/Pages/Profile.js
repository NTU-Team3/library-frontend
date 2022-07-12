import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../API/APIUtils";
import Avatar from "../components/Avatar";

import "../Assets/Styles/Profile.css";

function Profile() {
  const id = useParams().memberId;
  const pathVLoans = "/member/v-loans/" + id;
  const pathVReservations = "/member/v-reservations/" + id;
  const pathVHistories = "/member/v-histories/" + id;
  const pathVReviews = "/member/v-reviews/" + id;
  const pathVProfile = "/member/v-profile/" + id;

  const pathULoans = "/member/u-loans/";

  const [vloans, setVLoans] = useState([]);
  const [vreservations, setVReservations] = useState([]);
  const [vhistories, setVHistories] = useState([]);
  const [vreviews, setVReviews] = useState([]);
  const [vprofile, setVProfile] = useState([]);

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

  const refreshPage = () => {
    window.location.reload();
  };

  const updateLoans = async (id, lid, btitle) => {
    await API.put(pathULoans, { id, lid, btitle })
      .then((response) => {
        refreshPage();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <>
      <div className="main">
        <h3>Profile</h3>
        <div className="containerProfile">
          <div className="itemProfile">
            <Avatar
              mname={name}
              mimg={profilepic}
              scale={155}
              borderw={0}
              borderc={"#000"}
            />
          </div>
          <div className="itemProfile">
            <div className="headername">{name}</div>
            <div className="headerlocation">📍 {location}</div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}
        <div className="containerInfo">
          <div className="itemInfo">
            <div className="sectionheader">On Loan</div>
            <div className="sectionhr"></div>
            <div className="sectiondiv">
              {vloans.map((vl) => (
                <>
                  <div key={vl.loans._id} className="populatediv">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      {vl.loans.title}
                    </span>
                    <br />
                    Loan date:&nbsp;&nbsp;
                    {new Date(vl.loans.loandate).toLocaleDateString("en-GB", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                    <br />
                    Due date:&nbsp;&nbsp;
                    {new Date(vl.loans.duedate).toLocaleDateString("en-GB", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                    <br />
                    <button
                      type="button"
                      className="button"
                      onClick={() =>
                        updateLoans(_id, vl.loans._id, vl.loans.title)
                      }
                    >
                      return
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="itemInfo">
            <div className="sectionheader">Reservations</div>
            <div className="sectionhr"></div>
            <div className="sectiondiv">
              {vreservations.map((vrs) => (
                <div key={vrs.reservations._id} className="populatediv">
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {vrs.reservations.title}
                  </span>
                  <br />
                  Status:&nbsp;&nbsp;
                  {vrs.reservations.status}
                  <br />
                  Pickup By:&nbsp;&nbsp;
                  {vrs.reservations.latestpickup == undefined
                    ? "n/a"
                    : new Date(
                        vrs.reservations.latestpickup
                      ).toLocaleDateString("en-GB", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                  <br />
                  <button type="button" className="button" display="none">
                    add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="itemInfo">
            <div className="sectionheader">History</div>
            <div className="sectionhr"></div>
            <div className="sectiondiv">
              {vhistories.map((vh) => (
                <div key={vh.loans._id} className="populatediv">
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {vh.loans.title}
                  </span>
                  <br />
                  Return date:&nbsp;&nbsp;
                  {new Date(vh.loans.returndate).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="itemInfo">
            <div className="sectionheader">Reviews</div>
            <div className="sectionhr"></div>
            <div className="sectiondiv">
              {vreviews.map((vrv) => (
                <div key={vrv.reviews._id} className="populatediv">
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    {vrv.reviews.title}
                  </span>
                  <br />
                  Rating:&nbsp;&nbsp;
                  {vrv.reviews.rating} ⭐
                  <br />
                  Review date:&nbsp;&nbsp;
                  {new Date(vrv.reviews.reviewdate).toLocaleDateString(
                    "en-GB",
                    {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }
                  )}
                  <br />
                  Comments:
                  <br />
                  {vrv.reviews.comments}
                  <br />
                  <button type="button" className="button">
                    edit
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------------------- */}

          <div className="itemInfo">
            <div className="sectionheader">Profile</div>
            <div className="sectionhr"></div>
            <div className="sectiondiv">
              <div className="populatediv">
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  {name}
                </span>
                <br />
                Email:&nbsp;&nbsp;
                {email}
                <br />
                Location:&nbsp;&nbsp;
                {location}
                <br />
                Password:&nbsp;&nbsp;
                {password}
              </div>
              <button type="button" className="button">
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
