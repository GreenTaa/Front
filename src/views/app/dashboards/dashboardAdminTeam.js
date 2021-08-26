import React, { useEffect, Component, Fragment, useState } from "react";
import { injectIntl } from "react-intl";
import IconCards from "../../../containers/ui/IconCards";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ThumbListView from "../../../views/app/pages/thumb";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Ranking2 from "../../../containers/dashboards/RankingBoard2";
import Tickets from "../../../containers/dashboards/Tickets";
import Calendar from "../../../containers/dashboards/Calendar";
import Ranking from "../../../containers/dashboards/RankingBoard1";
import {AddSupporter} from '../../../components/redux/supporters/suppActions'
import {
  ReactTableWithScrollableCard,
  ReactTableWithScrollableCardTeams,
  ReactTableWithScrollableCardCenters
} from "../../../containers/ui/ReactTableCardsAdmin";
import { Row, Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import {Link} from 'react-router-dom';
import IntlMessages from "../../../helpers/IntlMessages";
import Cakes from "../../../containers/dashboards/Cakes";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import ProductCategoriesDoughnut from "../../../containers/dashboards/ProductCategoriesDoughnut";
import {fetchTeams} from '../../../components/redux/teams/teamActions'
import { useDispatch, useSelector } from 'react-redux';
import SignUp from "../../../Pages/SignUp";
import SignUpForm from "../../../components/SignUpForm";
import FormSupporterTeam from './formTeam'

export default function EcommerceDashboard()  {
  var [show, setShow] = useState(false)
    return (
      <Fragment>
        <Button outline color="secondary" className="mb-2"  onClick={() => setShow(!show)} >
                  <IntlMessages id="button.add" />
        </Button>
        {show? <FormSupporterTeam/> : ""}
           <Row>
        <Colxx xl="12" lg="12" className="mb-4">
          <ReactTableWithScrollableCardTeams />
          </Colxx>
        </Row>
      </Fragment>
    );
  }

