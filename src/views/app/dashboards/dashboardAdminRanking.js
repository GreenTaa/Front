import React, { useEffect, Component, Fragment, useState } from "react";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Ranking from "../../../containers/dashboards/RankingBoard1";

export default function EcommerceDashboard()  {
  var [show, setShow] = useState(false)
    return (
      <Fragment>
        <Colxx xl="12" lg="12" className="mb-4">
          <center>
          <h1 className="green_text">Greenta's League</h1>
          </center>
          <h5>{"Date : " + new Date().getDate()+ '-' +(new Date().getMonth()+1)+'-' + new Date().getFullYear()}</h5>
          <Ranking />
          </Colxx>

      </Fragment>
    );
  }

