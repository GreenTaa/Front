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
                                    <img src={require ('../img/home9/featured_img1.png')} alt="" style={{width : "600px", height:"550px", marginLeft : "20%"}}/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center" >
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_features_content pl_70">
                                    <h2 style ={{textAlign: "left"}}>Pour les clubs sportifs</h2>
                                    <h3>1. Améliorer l'image du club</h3>
                                    <h3>2. Adhérer à une cause liée à la protection de l'environnement</h3>
                                    <h3>3. Participer à une compétition nationale pour la protection de l'environnement : Greenta League</h3>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row flex-row-reverse featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_featured_img img_two" >
                                    <img src={require('../img/home9/featured_img2.png')} style={{width : "600px", height:"550px", marginRight : "20%"}}/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInLeft" duration={800}>
                                <div className="payment_features_content pr_70">
                                <div className="payment_features_content pl_70">
                                    <h2 style ={{textAlign: "left"}}>Pour les supporters</h2>
                                    <h3>1. Gagner des points transformables en bons de réduction dans les stores de leur club sportif préféré</h3>
                                    <h3>2. Faire gagner leur club dans le classement nationnal de Greenta League</h3>
                                    <h3>3. Adhérer à une cause environnementale </h3>
                                </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInLeft">
                                <div className="payment_featured_img">
                                    <img src={require ('../img/home9/featured_img3.png')} alt="" style={{width : "600px", height:"450px", marginLeft : "20%"}}/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center" >
                            <Reveal effect="fadeInRight" duration={800}>
                            <div className="payment_features_content pl_70">
                                    <h2 style ={{textAlign: "left"}}>Pour les centres de collectes</h2>
                                    <h3>1. Augmenter et organiser la collecte du plastique</h3>
                                    <h3>2. Encourager la digitalisation de la collecte du plastique</h3>
                                    <h3>3. Sensibiliser les citoyens pour la protection de l'environnement</h3>
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