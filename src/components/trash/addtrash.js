import 'leaflet/dist/leaflet.css';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { Component,useState,useRef,useMemo,useCallback } from "react";
import L from "leaflet";
import { MapContainer, useMapEvents,Popup,TileLayer,Marker } from 'react-leaflet'
import mylittle from './icon/myicon.png'
import { queryServerApi } from "../../utils/queryServerApi";

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
<div className="center">
    <MapContainer  center={center} zoom={13} scrollWheelZoom={true}> 
    
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <DraggableMarker  />
  </MapContainer>
  <br></br>
   <button style={{marginLeft:"440px"}} className="btn_six slider_btn" onClick={(e) => Add()} >Add trash-bin</button>
   </div>

  );
}

export default App;