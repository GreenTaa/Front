import React from 'react';
import Reveal from 'react-reveal';
const AppGetstarted =()=>{
    return(
        <section className="get_started_area">
            <div className="shap one"></div>
            <div className="shap two"></div>
            <div className="shap one three"></div>
            <div className="shap two four"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <Reveal bottom cascade>
                            <div className="get_content">
                                <h2 className="f_700 f_p f_size_40 l_height50 mb_20 wow fadeInLeft" data-wow-delay="0.3s" >Notre application mobile</h2>
                                <p className="f_400 f_p mb_40 wow fadeInLeft" data-wow-delay="0.4s">L'application mobile génère à chaque supporter un QR code qui lui permet de récupérer ses points cadeaux. Il peut aussi visualiser le classement, le blog et convertir ses points en des produits du store. <br></br> <br></br> L'application mobile est maintenant disponible sur play store et prochainement sur app store!</p>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=tn.greenta.greenta" className="app_btn app_btn_one wow fadeInLeft" data-wow-delay="0.5s" style={{marginLeft: "30%"}}><img src={require('../img/home7/google_icon.png')} alt=""/>Google Play</a>
                                
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-lg-6 text-right">
                       <Reveal effect="fadeInRight" duration={2200}> <img src={require('../img/home7/iPhoneX2.png')} alt=""/></Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppGetstarted;