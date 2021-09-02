import 'leaflet/dist/leaflet.css';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { useState,useEffect } from "react";
import L from "leaflet";
import { MapContainer,Popup,TileLayer,Marker,Circle  } from 'react-leaflet'
import axios from "axios";
import { Colxx } from "../../components/common/CustomBootstrap";
import { CardText, CardSubtitle, Row, Card, CardBody, CardTitle,CardImg,Badge } from "reactstrap";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { width } from '@material-ui/system';
import CircularProgressbar from 'react-circular-progressbar';
import img1 from './icon/greenta2.png';

  const icon = L.icon({
    iconSize: [20, 38],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://i.imgur.com/5VLvgPx.png",
  });
  
  
 
function App() {

    const center = {
        lat: 36.832013568901914,
        lng: 10.237266420842907,
      };
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
<MapContainer center={center} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      
    />
    <MarkerClusterGroup>
    {trash?.map((dm, index) => (
        
    <Marker key={index} icon={icon} position={[dm.Lat,dm.Lng]}>
      <Popup>
    
            <div className="position-relative">
              <CardImg top src={img1} alt="Card image cap" />
              <Badge color="primary" pill className="position-absolute badge-top-left">NEW</Badge>
              <Badge color="secondary" pill className="position-absolute badge-top-left-2">TRENDING</Badge>
            </div>
            <CardBody>
              <CardSubtitle className="mb-1">{dm.Location}</CardSubtitle>
              <CardText className="text-muted text-small mb-0 font-weight-light">Bottle : {dm.Bottles}</CardText>
            </CardBody>
        
     
      </Popup>
    </Marker>


    ))}
    </MarkerClusterGroup>
  </MapContainer>,
             
  </div>
)
   

  
}

export default App;