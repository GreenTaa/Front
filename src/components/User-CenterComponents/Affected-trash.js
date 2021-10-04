import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Dropdown, Table } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import axios from "axios";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import ReactTooltip from "react-tooltip";

const BestSellers = () => {
  const [trash, settrash] = useState();
  const [filteredData, setFilteredData] = useState(trash);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = trash.filter((data) => {
      return data.Location.search(value) != -1;
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
  useEffect(() => {
    gettrash();
    const interval = setInterval(() => {
      gettrash();
    }, 50000);
    return () => clearInterval(interval);
  }, []);

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
                      <td>{value.State.Name}</td>
                      <td width="200px" data-tip={value.Location}>
                        {value.Location.substring(0, 30)}...
                      </td>
                      <td> {value.Bottles}</td>
                      <td>
                        <button class="btn btn-outline-danger">Delete</button>
                        <button class="btn btn-outline-success">
                          Affecter
                        </button>
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
};
export default BestSellers;
