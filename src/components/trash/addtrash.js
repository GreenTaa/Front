import 'leaflet/dist/leaflet.css';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { Component,useState,useRef,useMemo,useCallback } from "react";
import L from "leaflet";
import { MapContainer, useMapEvents,Popup,TileLayer,Marker } from 'react-leaflet'
import mylittle from './icon/myicon.png'
import { queryServerApi } from "../../utils/queryServerApi";
import { NotificationManager } from "../../components/common/react-notifications";
import { Button} from "reactstrap";


const center = {
    lat: 36.832013568901914,
    lng: 10.237266420842907,
  }
  const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
  });
  
  
 
function App() {

    const [position, setPosition] = useState(center)
    const [place, setPlace] = useState("Place marker")

    function DraggableMarker() {
        const [draggable, setDraggable] = useState(true)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
                setPosition(marker.getLatLng())
                fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.657f1ad662c5b8bc9407219fe04ddc5b&lat=${marker.getLatLng().lat}&lon=${marker.getLatLng().lng}&format=json`)
                .then((response) => response.json())
                .then((responseJson) => {
                    setPlace((responseJson.display_name));
        })
             
            },
             
          }),
          [],
        )
        const toggleDraggable = useCallback(() => {
          setDraggable((d) => !d)
        }, [])
     
        
  
          
        return (
          <Marker
           
            draggable={draggable}
            eventHandlers={eventHandlers}
            icon={icon}
            position={position}
            ref={markerRef}>
           
            <Popup minWidth={90}>
              <span  >
               
                    {place}
              </span>
            </Popup>
          </Marker>
        )
      }
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
                "Postion: "+place.substring(0, 30)+"...",
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
    
      async function Add() {
       var values = {
            Lng: position.lng,
            Lat: position.lat,
            Location: place,
           
          };
          const [user, err] = await queryServerApi(
            "trash/addtrash",
            values,
            "POST",
            false
          );
      }
  return (
<div style={{width:"1100px",height:"900px"}} className="center">
    <MapContainer  center={center} zoom={13} scrollWheelZoom={true}> 
    
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <DraggableMarker  /> 
  </MapContainer>
  <br></br>
   <button style={{marginLeft:"440px"}} className="btn_six slider_btn" onClick={(e) => Add().then(createNotification("success", "filled"))  } > 
        Add Trashbin
                </button>
   
   </div>
  
  );
}
 
export default App;