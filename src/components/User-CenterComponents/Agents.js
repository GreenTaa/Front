import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React, { useState, useEffect } from "react";
import L from "leaflet";
import axios from "axios";

import "react-circular-progressbar/dist/styles.css";
import { NotificationManager } from "../../components/common/react-notifications";

import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import ReactTooltip from "react-tooltip";
import { queryServerApi } from "../../utils/queryServerApi";
import {
  Card,
  Table,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Select from "react-select";
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

  const [modal, setmodal] = useState(false);
  const [trash_id, settrash_id] = useState();


  const toggle = (id) => {
    setmodal(!modal);
    settrash_id(id);

  };

  const [trash, setTrash] = useState([]);
  const [test, settest] = useState();
  const getTrash = async () => {
    try {
      const Supp = await axios
        .get("http://localhost:3000/collectcenters/6149ed9a00406b3de40ca988")
        .then(function (doc) {
            settest(JSON.stringify(doc.data));
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
      <>
   <Colxx xxs="12">
      <Card className="mb-4">
        <CardBody>
          <CardTitle>
              my agents
          </CardTitle>
         

          <Table borderless>
            <thead>
              <tr>
                <th>#</th>
                <th>Centre de collecte</th>
                <th>Location</th>
                <th>Nbre Bouteilles</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {trash &&
                trash.map((value, index) =>  (
                  <>
                 
            {value.Collectors &&
                value.Collectors.map((dm, i) =>  (
                    <>
                    <ReactTooltip />
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>
                         
                     {dm.Name}
                      </td>

                      <td width="200px" >
                      {dm.Name}
                      </td>
                      <td>   {dm.Bottels}</td>
                      <td>
                        <button
                          class="btn btn-outline-danger"
                         
                        >
                          Delete
                        </button>{" "}
                        &nbsp;
                        <Button color="primary" outline onClick={() =>toggle()}>
                          Affect trash bin
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                          <ModalHeader toggle={toggle}>
                            Affect this trashbin
                          </ModalHeader>
                          <ModalBody>
                            ff
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={() =>(createNotification("warning", "filled"))}>
                              Valider
                            </Button>{" "}
                          </ModalFooter>
                        </Modal>
                      </td>
                    </tr>
                    </>
                      ))}
                  </>
                    ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Colxx>
    </>
  );
}

export default App;
