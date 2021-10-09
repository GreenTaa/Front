import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import Player from "./videobtn";
class AgencyBanner extends Component {
    render(){
        let BannerData = this.props.BannerData;
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
                                                <h2 className="f_700 t_color3 mb_40 wow fadeInLeft" data-wow-delay="0.3s" style={{fontSize: "300%"}}>Greenta <br></br> La première poubelle intelligente en Tunisie</h2>
                                                <p className="f_400 l_height28 wow fadeInLeft" data-wow-delay="0.4s">Greenta est un système de compétition entre les équipes sportives tunisiennes pour collecter plus de plastique en se basant sur l’esprit compétitif des supporters</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                
                                <a href="https://www.youtube.com/watch?v=sU3FkzUKHXU" className="popup-youtube btn_six slider_btn" style={{marginTop:"20px", marginLeft: "100px"}}><i className="fa fa-play-circle" ></i> Regarder la vidéo</a>
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
}
export default AgencyBanner;