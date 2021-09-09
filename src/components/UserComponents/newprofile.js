import React, { useState, useRef, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import { Button } from "reactstrap";
import "./profile.css";
import CustomNavbar from "../CustomNavbar";
import Breadcrumb from "../Breadcrumb";
import back from "../../img/breadcrumb/banner_bg.png";
import { queryServerApi } from "../../utils/queryServerApi";

export default function StepProgressBar(props) {
  const [username, setusername] = useState(props.supporter.Firstname);
  const [email, setemail] = useState(localStorage.Email);
  const [phone, setphone] = useState(props.supporter.Phone);
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState(props.supporter.Address);
  const [Date_birth, setDate_birth] = useState(props.supporter.Date_birth);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const fileInputRef = useRef();
  const [images, setImages] = useState(null);

  const onFileChange = (event) => {
    // Update the state
    const file = event.target.files[0];
    setImages(event.target.files[0]);
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  useEffect(() => {
    if (fileInputRef) fileInputRef.current.value = null;
  }, [images]);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  async function updatedata(img) {
    var wow;
    var values;
    console.log(images);
    if (images !== null) {
      wow = await getBase64(images);
    } else wow = null;
    localStorage.setItem("Email", email);
if(wow===null){
    values = {
        Email: email,
        Firstname: username,
        Phone: phone,
        Address: address,
        Date_birth: Date_birth,
      };
}
else{
    values = {
        Email: email,
        Firstname: username,
        Phone: phone,
        Avatar: wow,
        Address: address,
        Date_birth: Date_birth,
      };
}
    

    const [user, err] = await queryServerApi(
      "supporters/" + localStorage.id,
       values,
        "PUT",
       false
      );

    console.log(localStorage);
  }
  return (
    <div>
      <div className="main-content">
        {/* Top navbar */}
        <CustomNavbar
          mClass="menu_four"
          cClass="custom_container p0"
          nClass="pl_120 mr-auto ml-auto"
          hbtnClass="menu_cus"
        />

        {/* Header */}
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "380px",
            backgroundImage: back,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
        </div>
        {/* Page content */}
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src={localStorage.Avatar}
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#">Show more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Name
                            </label>
                            <input
                              onChange={(e) => setusername(e.target.value)}
                              defaultValue={props.supporter.Firstname}
                              type="text"
                              id="input-username"
                              className="form-control form-control-alternative"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <input
                              onChange={(e) => setemail(e.target.value)}
                              defaultValue={localStorage.Email}
                              type="email"
                              id="input-email"
                              className="form-control form-control-alternative"
                              placeholder="jesse@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-phone"
                            >
                              Phone number
                            </label>
                            <input
                              placeholder="Phone"
                              onChange={(e) => setphone(e.target.value)}
                              defaultValue={props.supporter.Phone}
                              type="text"
                              id="phone"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Birth date
                            </label>
                            <input
                              onChange={(e) => setDate_birth(e.target.value)}
                              defaultValue={props.supporter.Date_birth}
                              type="date"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <input
                              onChange={(e) => setaddress(e.target.value)}
                              defaultValue={props.supporter.Address}
                              id="input-address"
                              className="form-control form-control-alternative"
                              placeholder="Home Address"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Profile Image
                          </label>
                          <div className="form-group text_box">
                            <label className="f_p text_c f_200">Image</label>

                            <label style={{marginLeft:"400px",height:"50px"}}  className="btn_get">
                              {" "}
                              
                              Avatar
                              <input
                                type="file"
                                className="form-input"
                                name="Avatar"
                                ref={fileInputRef}
                                value={fileInputState}
                                onChange={onFileChange}
                              />
                            </label>

                            <div>
              {previewSource && (
                <img
                  src={previewSource}
                  alt="chosen"
                  style={{marginLeft:"400px",height:"150px"}}
                />
              )}
            </div>
            <br></br>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn_hover agency_banner_btn wow fadeInLeft"
                          data-wow-delay="0.5s"
                          onClick={(e) => updatedata()}
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">
                      Account Security
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              New Password
                            </label>
                            <input
                              type="password"
                              id="input-city"
                              className="form-control form-control-alternative"
                              placeholder="City"
                              defaultValue="New York"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Confirm new password
                            </label>
                            <input
                              type="password"
                              id="input-country"
                              className="form-control form-control-alternative"
                              placeholder="Country"
                              defaultValue="United States"
                            />
                          </div>
                        </div>
                        <Button
                          style={{ height: "50px", marginTop: "10px" }}
                          className="btn_hover agency_banner_btn wow fadeInLeft"
                          data-wow-delay="0.5s"
                          onClick={(e) => console.log(updatedata())}
                        >
                          Reset password
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6 m-auto text-center">
            <div className="copyright">
              <p>
                Made with{" "}
                <a
                  href="https://www.creative-tim.com/product/argon-dashboard"
                  target="_blank"
                >
                  Argon Dashboard
                </a>{" "}
                by Creative Tim
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
