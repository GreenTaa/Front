import React, { useState, useRef, useEffect } from "react";
import useForm from "react-hook-form";
import "react-step-progress-bar/styles.css";
import "./profile.css";
import CustomNavbar from "../CustomNavbar";
import back from "../../img/breadcrumb/banner_bg.png";
import { queryServerApi } from "../../utils/queryServerApi";
import Mile from "./Milestones";
import Coin from "./mycoin.png";
import Timeline from "./timeline";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import axios from "axios";
import {
  Card,
  Table,
  CardBody,
  CardTitle,
  CardText, CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
export default function StepProgressBar(props) {
  const [username, setusername] = useState(props.supporter.Firstname);
  const [email, setemail] = useState(localStorage.Email);
  const [phone, setphone] = useState(props.supporter.Phone);
  const [address, setaddress] = useState(props.supporter.Address);
  const [Date_birth, setDate_birth] = useState(props.supporter.Date_birth);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const fileInputRef = useRef();
  const [images, setImages] = useState(null);
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  const [trash, setTrash] = useState();
  password.current = watch("password", "");

  const [modal, setmodal] = useState(false);
  const center = {
    lat: 36.832013568901914,
    lng: 10.237266420842907,
  };
  const [mycenter, setcenter] = useState( {
    lat: 36.832013568901914,
    lng: 10.237266420842907,
  });
  const icon = L.icon({
    iconSize: [20, 38],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://i.imgur.com/5VLvgPx.png",
  });

  const icon2 = L.icon({
    iconSize: [20, 20],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://play-lh.googleusercontent.com/9AsXyZ6sAzwQqrMeEmSlTxDVYn65tPgO6SPWL-cZJVomKjzjl3u5c8RUEq1F2DN6g5o",
  });
  const toggle = (id) => {
    setmodal(!modal);

  };

  const onSubmit = async (data) => {
    const [user, err] = await queryServerApi(
      "supporters/changepass/" + localStorage.id,
      data,
      "PUT",
      false
    );
    window.location.reload(false);
  };
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

  const getTrash = async () => {
    try {
      const Supp = await axios
        .get("https://greentaa.herokuapp.com/trash/")
        .then(function (doc) {
          if (JSON.stringify(doc.data) === JSON.stringify(trash)) {
            console.log("same");
          } else {
            setTrash(doc.data);
            console.log("elseeee");
          }
        });

      // set State
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTrash();
   navigator.geolocation.getCurrentPosition(function(position) {
      setcenter({lat : position.coords.latitude, lng: position.coords.longitude});
    });
    const interval = setInterval(() => {
      getTrash();
    }, 5000);
    if (fileInputRef) fileInputRef.current.value = null;
    return () => clearInterval(interval);
  }, [getTrash(), images]);

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
    var values = "ss";
    if (images !== null) {
      wow = await getBase64(images);
    } else wow = null;
    localStorage.setItem("Email", email);
    values = {
      Email: email,
      Firstname: username,
      Phone: phone,
      Avatar: wow,
      Address: address,
      Date_birth: Date_birth,
    };
    if (wow === null) {
      values = {
        Email: email,
        Firstname: username,
        Phone: phone,
        Address: address,
        Date_birth: Date_birth,
      };
    }

    console.log(values);

    const [user, err] = await queryServerApi(
      "supporters/" + localStorage.id,
      values,
      "PUT",
      false
    );
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
                          <span className="heading">
                            {props.supporter.Score}
                          </span>
                          <span className="description">Points</span>
                        </div>
                        <div>
                          <span className="heading">
                            {props.supporter.Bottles}
                          </span>
                          <span className="description">Bottles</span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "200px",
                          marginLeft: "100px",
                        }}
                        class="middle-container d-flex justify-content-between align-items-center mt-3 p-2"
                      >
                        <div class="dollar-div px-3">
                          <div class="round-div">
                            <img
                              style={{
                                width: "130%",
                                height: "130%",
                              }}
                              src={Coin}
                            ></img>
                          </div>
                        </div>
                        <div class="d-flex flex-column text-right mr-2">
                          {" "}
                          <span class="current-balance">
                            Current Balance
                          </span>{" "}
                          <span class="amount">
                            <span class="dollar-sign">GC </span>{" "}
                            {props.supporter.Score}
                          </span>{" "}
                        </div>
                      </div>
                      <br></br>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      {props.supporter.Firstname} {props.supporter.Lastname}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Tunis
                    </div>
                    <div className="h5 mt-4">
                      <button onClick={() =>toggle()} className="btn_hover agency_banner_btn wow fadeInLeft">
                        The closest Trashbin
                      </button>
                    </div>
                    <hr className="my-4" />
                    <h2>Progress</h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Mile pcr={30}></Mile>

                    <br></br>
                    <br></br>
                    <br></br>
                    <Timeline hystory={props.history}></Timeline>
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

                          <label
                            style={{ marginLeft: "400px", height: "50px" }}
                            className="btn_get"
                          >
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
                                style={{ marginLeft: "400px", height: "150px" }}
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
                  <form onSubmit={(e) => e.preventDefault()}>
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
                              name="password"
                              ref={register({
                                required: "You must specify a password",
                                minLength: {
                                  value: 8,
                                  message:
                                    "Password must have at least 8 characters",
                                },
                              })}
                            />
                            {errors.password && (
                              <p id="pa">{errors.password.message}</p>
                            )}
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
                              name="password_repeat"
                              className="form-control form-control-alternative"
                              ref={register({
                                validate: (value) =>
                                  value === password.current ||
                                  "The passwords do not match",
                              })}
                            />

                            {errors.password_repeat && (
                              <p id="pa">{errors.password_repeat.message}</p>
                            )}
                          </div>
                        </div>
                        <Button
                          style={{ height: "50px", marginTop: "10px" }}
                          className="btn_hover agency_banner_btn wow fadeInLeft"
                          data-wow-delay="0.5s"
                          onClick={handleSubmit(onSubmit)}
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
                      <Modal centered  size="lg"
  aria-labelledby="contained-modal-title-vcenter"   isOpen={modal} toggle={toggle}>
                          <ModalHeader toggle={toggle}>
                            Trashbins
                          </ModalHeader>
                          <ModalBody >
                          <div className="center">
      <MapContainer center={mycenter} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
        <Marker icon={icon2} position={mycenter}>
      <Popup>You are here</Popup>
    </Marker>
    <MarkerClusterGroup>
          {trash?.map((dm, index) => (
            <Marker key={index} icon={icon} position={[dm.Lat, dm.Lng]}>
              <Popup>
                <div
                  className="position-relative"
                  style={{ alignItems: "center", marginLeft: -55 }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 200,
                      marginTop: 55,
                      marginLeft: 50,
                    }}
                  >
                    <CircularProgressbarWithChildren
                      value={(dm.Bottles * 20) / 100}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#fff",
                        textColor: "#fff",
                        pathColor: "#3ba266",
                      })}
                    >
                      {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                      <img
                        style={{ width: 110, marginTop: -100 }}
                        src="https://i.pinimg.com/originals/5b/88/8d/5b888d541f62ee8c3f4ff905ce2c0ce7.png"
                        alt="bottle"
                      />

                      <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong>{(dm.Bottles * 20) / 100}</strong> %
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div>
                    {(dm.State && (
                      <span
                        style={{
                          backgroundColor: "#3ba266",
                          fontSize: 12,
                          marginLeft: 45,
                        }}
                        color="#3ba266"
                        pill
                        className="badge badge-success"
                      >
                        {dm.State.Name}
                      </span>
                    )) || (
                      <>
                        <br></br>{" "}
                        <span
                          style={{ fontSize: 12, marginLeft: 45 }}
                          pill
                          className="badge-danger"
                        >
                          Not yet affected
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <CardBody>
                  <CardSubtitle
                    style={{ alignItems: "center", width: "150px" }}
                    className="mb-1"
                  >
                    {dm.Location}
                  </CardSubtitle>
                  <CardText className="text-muted text-small mb-0 font-weight-light">
                    Bottle : {dm.Bottles}
                  </CardText>
                </CardBody>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      
    </div>                          </ModalBody>
                          <ModalFooter>
                            
                          </ModalFooter>
                        </Modal>
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
