import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import axios from "axios";
import { CardText, CardSubtitle, CardBody } from "reactstrap";
import MarkerClusterGroup from "react-leaflet-markercluster";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NotificationManager } from "../../components/common/react-notifications";

const icon = L.icon({
  iconSize: [20, 38],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://i.imgur.com/5VLvgPx.png",
});

function App() {

  const createNotification = (type, className) => {
    let cName = className || "";
    return () => {
      switch (type) {
        case "primary":
          NotificationManager.primary(
            "This is a notification!",
            "Primary Notification",
            3000,
            null,
            null,
            cName
          );
          break;
        case "secondary":
          NotificationManager.secondary(
            "This is a notification!",
            "Secondary Notification",
            3000,
            null,
            null,
            cName
          );
          break;
        case "info":
          NotificationManager.info("Info message", "", 3000, null, null, cName);
          break;
        case "success":
          NotificationManager.success(
            "Postion: ...",
            "A new trash has been added succesffully",
            3000,
            null,
            null,
            cName
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000,
            null,
            null,
            cName
          );
          break;
        case "error":
          NotificationManager.error(
            "Error message",
            "Click me!",
            5000,
            () => {
              alert("callback");
            },
            null,
            cName
          );
          break;
        default:
          NotificationManager.info("Info message");
          break;
      }
    };
  };


  const center = {
    lat: 36.832013568901914,
    lng: 10.237266420842907,
  };
  const [trash, setTrash] = useState();
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
    console.log(trash);
    const interval = setInterval(() => {
      getTrash();
    }, 5000);
    return () => clearInterval(interval);
  }, [getTrash()]);

  return (
    <div className="center">
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
      ,
    </div>
  );
}

export default App;
