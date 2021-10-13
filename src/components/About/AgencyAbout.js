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
            <section className="agency_about_area d-flex bg_color " >
                <div className="col-lg-6 about_content_left " >
                    <div className="about_content mb_30">
                        <h2 className="f_size_30 f_700 l_height45 mb_20">Notre solution </h2>
                        <p className="f_size_15 f_400 mb_40" >Greenta est un réseau de poubelles intelligentes connectées pour encourager les supporters des clubs sportifs à collecter du plastique et le déposer dans les poubelles pour gagner et faire gagner leur club préféré dans le classement national “Greenta League”.
<br></br> <br></br>
Chaque supporter peut s’inscrire sur Greenta via une application web ou mobile, mentionner son club préféré, déposer ses déchets plastiques dans la poubelle connectée la plus proche et gagner des points transformables en cadeaux dans les stores de son club préféré. 
<br></br> <br></br>
Les centres de collecte auront accès aux poubelles connectées pour simplifier et optimiser le ramassage des déchets plastiques utilisés. 
<br></br> <br></br>
Les poubelles Greenta sont équipées d’un système de détection du plastique basé sur l’Intelligence Artificielle qui permet le tri et le stockage des déchets. 
Elles sont également équipées d’un système de monitoring basé sur des capteurs pour assurer le suivi de l’état de la poubelle et le taux de remplissage. 
 </p>
                        
                    </div>
                </div>
                <div className="col-lg-12 about_img">
                    <Slider className="about_img_slider" {...settings}>
                        <div className="item">
                            <div className="about_item w45">
                                <img src={require('../../img/home4/team1.jpg')} alt="" style={{marginTop:"50px"}}/>
                                <div className="about_text">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">La poubelle Greenta</h5>
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
