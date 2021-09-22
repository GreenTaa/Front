import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { Icon } from '@iconify/react';

  import "./times.css";
  export default function StepProgressBar(props) {
    const mines = props.hystory;
    
      return (
<>
        
        <div
      className="App"
      style={{ background: "#3333", fontFamily: "Trebuchet Ms" }}
    >
{console.log(props.hystory)}
        
<VerticalTimeline>
{props.hystory &&
                props.hystory.map((dm, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon= { <><Icon style={{marginTop:"-20px"}} icon="mdi:bottle-wine"></Icon> <br></br> + {dm.Bottles} </>}
            position={ "Left" }           
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          
          >
              <h6>{dm.createdAt.substring(0, 10)}</h6>
            <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: dm.Place.substring(0, 25) }}
            />
          </VerticalTimelineElement>
          
        ))}
      </VerticalTimeline>


    
    </div>
   </>
      );
    
  }