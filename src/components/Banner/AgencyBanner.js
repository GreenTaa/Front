import React, {Component,useState} from 'react';
import Modal from "react-responsive-modal";
import ReactPlayer from "react-player";

import Reveal from 'react-reveal/Reveal';
import ModalVideo from 'react-modal-video'
export default function AgencyBanner(props) {
        let BannerData = props.BannerData;
        const [isOpen, setOpen] = useState(false)
        function aman(){
            setOpen(false);
        }

        return(
            <section className="agency_banner_area bg_color">
               
                <div className="container custom_container" style={{marginTop: "70px"}}>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="agency_content">
                            <Reveal effect="fadeInUp">
                                {
                                    BannerData.AgencyText.map(Agency =>{
                                        return(
                                            <React.Fragment key={Agency.id}>
                                                <h2 className="f_700 t_color3 mb_40 wow fadeInLeft" data-wow-delay="0.3s" style={{fontSize: "300%"}}>Greenta <br></br> Gagnez, et faites gagner votre club</h2>
                                                <p className="f_400 l_height28 wow fadeInLeft" data-wow-delay="0.4s">Greenta est un système de compétition entre les équipes sportives tunisiennes pour collecter plus de plastique en se basant sur l’esprit compétitif des supporters</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
   <Modal
        open={isOpen}
        onClose={(aman)}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "80%",
            padding: "unset"
          },
          overlay: {
            background: '#00000000'
          },
          closeButton: {
            background: 'green'
          }
        }}
        center
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gz7AU4E_MBo"
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>
                                
                                <button  onClick={()=> setOpen(true)} className="popup-youtube btn_six slider_btn" style={{marginTop:"20px", marginLeft: "100px"}}><i className="fa fa-play-circle" ></i> Regarder la vidéo</button>
                                </Reveal>
                            </div>
                        </div>
                        <div className="col-lg-7 text-right">
                            <Reveal effect="fadeInRight"><img className="protype_img wow fadeInRight" data-wow-delay="0.3s" src={require('../../img/home4/banner_img.png')} alt=""/></Reveal>
                        </div>
                    </div>
                    <div className="partner_logo">
                        {
                            ""
                        }
                    </div>
                </div>
            </section>
        )
    
}
