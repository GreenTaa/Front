import 'leaflet/dist/leaflet.css';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { Component,useState,useRef,useMemo,useCallback } from "react";
import L from "leaflet";
import { MapContainer, useMapEvents,Popup,TileLayer,Marker } from 'react-leaflet'
import mylittle from './icon/myicon.png'

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
  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
 
    const testit = (e) => {
        
        console.log(position);
      }
    return (
      <Marker
       
        draggable={draggable}
        eventHandlers={eventHandlers}
        icon={icon}
        position={position}
        ref={markerRef}>
       
        <Popup minWidth={90}>
          <span  onClick={testit} >
           
sss
          </span>
        </Popup>
      </Marker>
    )
  }

function App() {
    

  return (

    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <DraggableMarker />
  </MapContainer>

  );
}

export default App;