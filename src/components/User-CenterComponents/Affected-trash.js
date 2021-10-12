import React, { useEffect, useState } from "react";
import IntlMessages from "../../helpers/IntlMessages";
import axios from "axios";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import ReactTooltip from "react-tooltip";
import { queryServerApi } from "../../utils/queryServerApi";
import { NotificationManager } from "../../components/common/react-notifications";
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

async function deletethis(id) {
  const [err] = await queryServerApi("trash/" + id, {}, "DELETE");
  if (err) {
    console.log(err);
  }
}
function BestSellers() {
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
            "Done ",
            "Trash affected succesfully",
            3000,
            null,
            null,
            cName
          );
          break;
        case "error":
          NotificationManager.error(
            "Your trash has been deleted succefully",
            "Trash has been deleted",
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
  const [trash, settrash] = useState();
  const [center_id, setcenter_id] = useState();
  const [trash_id, settrash_id] = useState();

  const [centers, setcenters] = useState();
  const [filteredData, setFilteredData] = useState(trash);

  const toggle = (id) => {
    setmodal(!modal);
    settrash_id(id);

  };

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = trash.filter((data) => {
      return (data.Location.search(value) !== -1) ;
    });
    setFilteredData(result);
  };
  const gettrash = async () => {
    try {
      const doc = await axios.get("http://localhost:3000/trash/");
      setFilteredData(doc.data);
      if (JSON.stringify(doc.data) !== JSON.stringify(trash)) {
        settrash(doc.data);
      }
      // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  const mycenters = async () => {
    try {
      const doc = await axios.get("http://localhost:3000/collectcenters/");
      setcenters(doc.data);
      if (JSON.stringify(doc.data) !== JSON.stringify(centers)) {
        setcenters(doc.data);
      }
      // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  const options =
    centers &&
    centers.map(function (data) {
      return { value: data._id, label: data.Name };
    });

  useEffect(() => {
    gettrash();
    mycenters();
    const interval = setInterval(() => {
      gettrash();
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  const validateit = async (id) => {
    const [user, err] = await queryServerApi(
      "trash/"+trash_id+"/"+center_id,
      {},
      "PUT",
      false
    );
    toggle(null);
  };

  const handleChange = (selectedOption) => {
    setcenter_id(selectedOption.value);

  };

  return (
    <Colxx xxs="12">
      <Card className="mb-4">
        <CardBody>
          <CardTitle>
            <IntlMessages id="table.bootstrap-borderless" />
          </CardTitle>
          <div style={{ width: "200px" }} class="search">
            <input
              id="searchKeyword"
              placeholder="Search"
              type="text"
              class="form-control"
              onChange={(event) => handleSearch(event)}
            />
          </div>

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
              {filteredData &&
                filteredData.map((value, index) => (
                  <>
                    <ReactTooltip />
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {(value.State && value.State.Name) || (
                          <span style={{ color: "red" }}>
                            not yet Afftected
                          </span>
                        )}
                      </td>

                      <td width="200px" data-tip={value.Location}>
                        {value.Location.substring(0, 30)}...
                      </td>
                      <td> {value.Bottles}</td>
                      <td>
                        <button
                          class="btn btn-outline-danger"
                          onClick={() =>
                            deletethis(value._id).then(
                              createNotification("error", "filled")
                            )
                          }
                        >
                          Delete
                        </button>{" "}
                        &nbsp;
                        <Button color="primary" outline onClick={() =>toggle(value._id)}>
                          Affect trash bin
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                          <ModalHeader toggle={toggle}>
                            Affect this trashbin
                          </ModalHeader>
                          <ModalBody>
                            <Select
                              onChange={handleChange}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              options={options}
                            />
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={() =>validateit().then(createNotification("warning", "filled"))}>
                              Valider
                            </Button>{" "}
                          </ModalFooter>
                        </Modal>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Colxx>
  );
}
export default BestSellers;
