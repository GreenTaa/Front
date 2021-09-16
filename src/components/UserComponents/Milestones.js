import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import "./miles.css";

export default function StepProgressBar(props) {
  console.log(props.pcr*2.2)
    return (
      <ProgressBar
        percent={props.pcr}
        fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            alt="miles"
              width="70"
              style={{ marginLeft: props.pcr*22+"%" }}
              src="https://i.hizliresim.com/PIBjDN.png"
            />
          )}
        </Step>
        
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            alt="miles"

              width="70"
              style={{ marginRight: "100%" }}
              src="https://testseffafcdn.azureedge.net/static/frontend/status/platinum.png"
            />
          )}
        </Step>
      </ProgressBar>
    );
  
}
