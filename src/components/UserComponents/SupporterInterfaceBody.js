import React, { Fragment, useState } from "react";
//import MyPackages from "../../pages/front/MyPackages";
//import CustomerStats from "./CustomerStats";
//import CustomerFavoriteDrivers from "./CustomerFavoriteDrivers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Usercard from "./Usercard";
import Mile from "./Milestones";

import Trash from "../trash/addtrash";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Button, Tooltip } from "@material-ui/core";
//import CustomerOperationsPayments from "./CustomerOperationsPayments";
//import PackagesForm from "./PackageForm/PackagesForm";
//import EditProfileCustomerForm from "./EditProfileCustomerForm";
//import ChangePasswordCustomer from "./ChangePasswordCustomer";
//import DisableAccountCustomer from "./DisableAccountCustomer";

const SupporterInterfaceBody = (props) => {
 
  return (
    <section className="faq_area bg_color sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pr_50">
            <div className="faq_tab">
              <h4 className="f_p t_color3 f_600 f_size_22 mb_40">
                Quick Navigation
              </h4>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="purchas-tab"
                    data-toggle="tab"
                    href="#Analytics"
                    role="tab"
                    aria-controls="purchas"
                    aria-selected="true"
                  >
                    <FontAwesomeIcon
                      icon={["far", "chart-bar"]}
                      className="font-size-xl"
                    />
                    <br />
                    Analytics
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="price-tab"
                    data-toggle="tab"
                    href="#SendPackage"
                    role="tab"
                    aria-controls="price"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                      icon={["fa", "paper-plane"]}
                      className="font-size-xl"
                    />
                    <br />
                    My profile
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="price-tab"
                    data-toggle="tab"
                    href="#Packages"
                    role="tab"
                    aria-controls="price"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                      icon={["fas", "box"]}
                      className="font-size-xl"
                    />
                    <br />
                    History
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Analytics"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
               
               

              < Mile pcr={30}></Mile>


               
              </div>

              <div
                className="tab-pane fade"
                id="Packages"
                role="tabpanel"
                aria-labelledby="price-tab"
              >
                
              </div>
              <div
                className="tab-pane fade"
                id="Payments"
                role="tabpanel"
                aria-labelledby="price-tab"
              ></div>

              <div
                className="tab-pane fade"
                id="SendPackage"
                role="tabpanel"
                aria-labelledby="price-tab"
              >
                <Usercard supporter={props.supporter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupporterInterfaceBody;
