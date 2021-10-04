import React, {Component} from 'react';
import Slider from 'react-slick';
class AgencyAbout extends Component {
    render(){
        const settings = {
            
            infinite: true,
            speed: 1500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        let ServiceData = this.props.ServiceData;
        return(
            <section className="agency_about_area d-flex bg_color " style={{marginTop:"100px", marginBottom: "200px",  height :"400px"}}>
                <div className="col-lg-6 about_content_left " style={{marginTop:"50px"}}>
                    <div className="about_content mb_30">
                        <h2 className="f_size_30 f_700 l_height45 mb_20">Concept </h2>
                        <p className="f_size_15 f_400 mb_40">Greenta est un système de compétition entre les équipes sportives tunisiennes afin de collecter plus de plastique en profitant de l'intense esprit de compétition entre leurs supporters. Notre solution est une poubelle intelligente, connectée à une application mobile et web. </p>
                        
                    </div>
                </div>
                <div className="col-lg-6 about_img">
                    <a href=".#" className="pluse_icon"><i className="ti-plus"></i></a>
                    <Slider className="about_img_slider" {...settings}>
                        <div className="item">
                            <div className="about_item w45">
                                <img src={require('../../img/home4/team1.jpg')} alt=""/>
                                <div className="about_text">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext1}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext2}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext3}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="about_item w45">
                                <img src={require('../../img/home4/team1.jpg')} alt=""/>
                                <div className="about_text">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext1}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext2}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext3}</h5>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}
export default AgencyAbout;
