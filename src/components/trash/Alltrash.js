import 'leaflet/dist/leaflet.css';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { Component,useState,useRef,useMemo,useCallback,useEffect } from "react";
import L from "leaflet";
import { MapContainer, useMapEvents,Popup,TileLayer,Marker,Circle  } from 'react-leaflet'
import mylittle from './icon/myicon.png'
import axios from "axios";
import pbl from "./icon/pbl.png"
const center = {
    lat: 36.832013568901914,
    lng: 10.237266420842907,
  }
  const icon = L.icon({
    iconSize: [20, 38],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://i.imgur.com/5VLvgPx.png",
  });
  
  
 
function App() {

    const position = [51.505, -0.09]
    const center = {
        lat: 36.832013568901914,
        lng: 10.237266420842907,
      };
      const fillBlueOptions = { fillColor: 'blue' };
      const [trash,setTrash] = useState();
      const getTrash= async () => {
        try {
            const Supp = await axios.get(
                "http://localhost:3000/trash/"
            ).then(function(doc){
                if(JSON.stringify(doc.data) === JSON.stringify(trash))
                {
                    console.log("same")
                }
                else{
                 
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
         
      }, [ getTrash()]);

  return (
<div className="center">
<MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {trash?.map((dm, index) => (
        
    <Marker key={index} icon={icon} position={[dm.Lat,dm.Lng]}>
      <Popup>
        {dm.Lng}
      </Popup>
      <Circle center={[dm.Lat,dm.Lng]} pathOptions={fillBlueOptions} radius={800} />
    </Marker>


    ))}
    
  </MapContainer>,
)
   </div>

  );
}

export default App;