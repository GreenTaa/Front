import React from "react";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap";

const RadialProgressCard = ({
  title = "title",
  percent = 50,
  isSortable = false
}) => {
  return (
    <Card>
      {isSortable && (
        <CardHeader className="p-0 position-relative">
          <div className="position-absolute handle card-icon">
            <i className="simple-icon-shuffle" />
          </div>
        </CardHeader>
      )}
      <CardBody className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">{title}</CardTitle>
        <div className="progress-bar-circle">
         
        </div>
      </CardBody>
    </Card>
  );
};
export default RadialProgressCard;
