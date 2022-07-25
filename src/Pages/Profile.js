import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
  const pathUReviews = "/member/u-reviews/";
  const pathUProfile = "/member/u-profile/";

  const [vloans, setVLoans] = useState([]);
  const [vreservations, setVReservations] = useState([]);
  const [vhistories, setVHistories] = useState([]);
  const [vreviews, setVReviews] = useState([]);
  const [vprofile, setVProfile] = useState([]);
  const [action, setAction] = useState(null);

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

  const callAction = (clickaction) => {
    setAction(clickaction);
  };

  const updateLoans = async (id, lid) => {
    await API.put(pathULoans, { id, lid })
      .then((response) => {
        refreshPage();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateProfile = async (id, pname, pemail, plocation, ppassword) => {
    setAction(null);

    await API.put(pathUProfile, { id, pname, pemail, plocation, ppassword })
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

  return (
    <>
      <div className="main">
        <h3>Profile</h3>
        <div className="containerProfile">
          <div className="itemProfile">
            <Avatar mname={vprofile.name} mimg={vprofile.profilepic} scale={155} borderw={0} borderc={"#000"} />
          </div>
          <div className="itemProfile">
            <div className="headername">{vprofile.name}</div>
            <div className="headerlocation">📍 {vprofile.location}</div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}

        <div className="itemInfo">
          <div className="sectionheader">On Loan</div>
          <div className="sectionhr"></div>
          {!vloans.length ? (
            ""
          ) : (
            <table className="tablegeneric">
              <thead>
                <tr></tr>
                <tr>
                  <th className="tabletitle">Title:</th>
                  <th>Loan date:</th>
                  <th>Due date:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {vloans.map((vl) => (
                  <tr>
                    <td>{vl.loans.title}</td>
                    <td>
                      {new Date(vl.loans.loandate).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </td>
                    <td>
                      {new Date(vl.loans.duedate).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </td>
                    <td>
                      <button type="button" className="button" onClick={() => updateLoans(vprofile._id, vl.loans._id)}>
                        return
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/*      <div className="itemInfo">
          <div className="sectionheader">Reservations</div>
          <div className="sectionhr"></div>
          {!vreservations.length ? (
            ""
          ) : (
            <table className="tablegeneric">
              <thead>
                <tr></tr>
                <tr>
                  <th className="tabletitle">Title:</th>
                  <th>Status:</th>
                  <th>Pickup by:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {vreservations.map((vrs) => (
                  <>
                    <tr>
                      <td>{vrs.reservations.title}</td>
                      <td>{vrs.reservations.status}</td>
                      <td>
                        {!vrs.reservations.latestpickup
                          ? "-"
                          : new Date(vrs.reservations.latestpickup).toLocaleDateString("en-GB", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            })}
                      </td>
                      <td>
                        {!vrs.reservations.latestpickup ? (
                          "-"
                        ) : (
                          <button type="button" className="button" onClick={() => callAction("ecart")}>
                            add to cart
                          </button>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="itemInfo">
          <div className="sectionheader">History</div>
          <div className="sectionhr"></div>
          {!vhistories.length ? (
            ""
          ) : (
            <table className="tablegeneric">
              <thead>
                <tr></tr>
                <tr>
                  <th className="tabletitle">Title:</th>
                  <th>Return date:</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {vhistories.map((vh) => (
                  <tr>
                    <td>{vh.loans.title}</td>
                    <td>
                      {new Date(vh.loans.returndate).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="itemInfo">
          <div className="sectionheader">Reviews</div>
          <div className="sectionhr"></div>
          {!vreviews.length ? (
            ""
          ) : (
            <table className="tablegeneric">
              <thead>
                <tr></tr>
                <tr>
                  <th className="tabletitle" style={{ width: "60%" }}>
                    <th>Title:</th>
                  </th>
                  <th>Review date:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {vreviews.map((vrv) => (
                  <tr>
                    <td>
                      <td style={{ width: "15%" }}>{vrv.reviews.title}</td>
                      <td style={{ width: "5%" }}>{vrv.reviews.rating} ⭐</td>
                      <td style={{ width: "20%" }}>{vrv.reviews.comments.slice(0, 100)} ...</td>
                    </td>
                    <td>
                      {new Date(vrv.reviews.reviewdate).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </td>
                    <td>
                      <button type="button" className="button" onClick={() => callAction("ereview")}>
                        edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div> */}
        {/* --------------------------------------------------------------------------------------------------------------------- */}

        <div className="itemInfo">
          <div className="sectionheader">Profile</div>
          <div className="sectionhr"></div>
          {action === "eprofile" ? (
            <>
              <table className="tableprofile">
                <tbody>
                  <tr>
                    <th className="tableprofileitems">Name:</th>
                    <td>
                      <input type="text" placeholder={vprofile.name}></input>
                    </td>
                  </tr>

                  <tr>
                    <th className="tableprofileitems">Email:</th>
                    <td>
                      <input type="text" placeholder={vprofile.email}></input>
                    </td>
                  </tr>

                  <tr>
                    <th className="tableprofileitems">Location:</th>
                    <td>
                      <input type="text" placeholder={vprofile.location}></input>
                    </td>
                  </tr>

                  <tr>
                    <th className="tableprofileitems">Password:</th>

                    <td>
                      <input type="text" placeholder={vprofile.password} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="sectionbutton">
                <button
                  type="button"
                  className="button"
                  onClick={() => updateProfile(vprofile._id, vprofile.name, vprofile.email, vprofile.location, vprofile.password)}
                >
                  update
                </button>
              </div>
            </>
          ) : (
            <>
              <table className="tableprofile">
                <tbody>
                  <tr>
                    <th className="tableprofileitems">Name:</th>
                    <td>{vprofile.name}</td>
                  </tr>

                  <tr>
                    <th className="tableprofileitems">Email:</th>
                    <td>{vprofile.email}</td>
                  </tr>

                  <tr>
                    <th className="tableprofileitems">Location:</th>
                    <td>{vprofile.location}</td>
                  </tr>

                  <tr>
                    <th className="tableprofileitems">Password:</th>
                    <td>{vprofile.password}</td>
                    {/* <td>{password.replace(/./gi, "*")}</td> */}
                  </tr>
                </tbody>
              </table>

              <div className="sectionbutton">
                <button type="button" className="button" onClick={() => callAction("eprofile")}>
                  edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
