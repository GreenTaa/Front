import React, {Component} from 'react';
import Slider from 'react-slick';
import VideoPlayer from "react-background-video-player";
import ReactPlayer from 'react-player'
import { Player } from 'video-react';

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
<br></br>
Chaque supporter peut s’inscrire sur Greenta via une application web ou mobile, mentionner son club préféré, déposer ses déchets plastiques dans la poubelle connectée la plus proche et gagner des points transformables en cadeaux dans les stores de son club préféré. 
<br></br>
Les centres de collecte auront accès aux poubelles connectées pour simplifier et optimiser le ramassage des déchets plastiques utilisés. 
<br></br>
Les poubelles Greenta sont équipées d’un système de détection du plastique basé sur l’Intelligence Artificielle qui permet le tri et le stockage des déchets. 
Elles sont également équipées d’un système de monitoring basé sur des capteurs pour assurer le suivi de l’état de la poubelle et le taux de remplissage. 
 </p>
                        
                    </div>
                </div>
                <div className="col-lg-12 about_img">
                    <a href=".#" className="pluse_icon"><i className="ti-plus"></i></a>
                    <Slider className="about_img_slider" {...settings}>
                    <VideoPlayer
        className="video"
        src={
          "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
        }
        autoPlay={true}
        muted={true}
      />
                    </Slider>
                    <div >
    <Player autoPlay loop  fluid={false} width={700} height={600}>
      <source src="/demo.mp4" />
    </Player>
     
    </div>
                </div>
            </section>
        )
    }
}
export default AgencyAbout;
