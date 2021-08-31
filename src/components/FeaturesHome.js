import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

class FeaturesHome extends Component {
    render(){
        return(
            <section className="payment_features_area">
                <div className="bg_shape shape_one"></div>
                <div className="bg_shape shape_two"></div>
                <div className="bg_shape shape_three"></div>
                <div className="container">
                    <div className="row featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInLeft">
                                <div className="payment_featured_img">
                                    <img src={require ('../img/home9/featured_img.png')} alt=""/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_features_content pl_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../img/home9/icon_shape.png')} alt=""/>
                                        <img className="icon_img" src={require('../img/home9/icon2.png')} alt=""/>

                                    </div>
                                    <h2>For Teams</h2>
                                   

                                    <p>As a team you can engage in our cause and register your team in order to join the Greenta league; your supporters are waiting for you</p>
                                    <Link to="/service-team" className="btn_six slider_btn" >Service Details</Link>

                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row flex-row-reverse featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_featured_img img_two">
                                    <img src={require('../img/home9/featured_img.png')} width="750" height="650"/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInLeft" duration={1200}>
                                <div className="payment_features_content pr_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../img/home9/icon_shape.png')} alt=""/>
                                        <img className="icon_img" src={require('../img/home9/icon2.png')} alt=""/>

                                    </div>
                                    <h2>For Supporters</h2>
                                    <p>Join the cause and promote your team , your team is deppending on you because you're the only player that matters in Grennta's league</p>
                                    <Link to="/service-supporter" className="btn_six slider_btn" >Service Details</Link>
                                </div>
                            </Reveal>
                        </div>
                    </div>


                    <div className="row flex-row-reverse featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_featured_img img_two">
                                    <img src={require('../img/home9/featured_img.png')} width="750" height="650"/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInLeft" duration={1200}>
                                <div className="payment_features_content pr_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../img/home9/icon_shape.png')} alt=""/>
                                        <img className="icon_img" src={require('../img/home9/icon2.png')} alt=""/>

                                    </div>
                                    <h2>For Collect Centers</h2>
                                    <p>We do have great offers .. walah</p>
                                    <Link to="/service-center" className="btn_six slider_btn" >Service Details</Link>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FeaturesHome;