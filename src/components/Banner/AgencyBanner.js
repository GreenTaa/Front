import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
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
                                                <h2 className="f_700 t_color3 mb_40 wow fadeInLeft" data-wow-delay="0.3s">Greenta La première poubelle intelligente en Tunisie</h2>
                                                <p className="f_400 l_height28 wow fadeInLeft" data-wow-delay="0.4s">Rejoignez la communauté de Greenta, collectez du plastique, gagner, faire gagner votre équipe, sauvez l'environnement et recevez des prix.</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <div className="action_btn d-flex align-items-center mt_60">
                                    <a href="/SignIn" className="btn_hover agency_banner_btn wow fadeInLeft" data-wow-delay="0.5s">Sign In</a>
                                    <a href="/SignUp" className="agency_banner_btn_two wow fadeInLeft" data-wow-delay="0.7s">Sing Up</a>
                                </div>
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