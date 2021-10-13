import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AgencyBanner from '../components/Banner/AgencyBanner';
import BannerData from '../components/Banner/BannerData';

import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import FeaturesHome from '../components/FeaturesHome';
import AgencyAbout from '../components/About/AgencyAbout';
import ServiceData from '../components/Service/ServiceData';
import AppGetstarted from '../components/AppGetstarted';
import Team from '../Pages/Team';

const DigitalMarketing = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <AgencyBanner BannerData={BannerData}/>
            <AgencyAbout ServiceData={ServiceData}/>
            <FeaturesHome></FeaturesHome>
            <AppGetstarted/>
            <Team/>
                <div className="partner_logo" style={{backgroundColor: "white", marginBottom: "30px"}}>
                    <img src={require ('../img/home9/partenaire.PNG')} alt="" style={{marginLeft: "4%"}}/>
                </div>
            
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default DigitalMarketing;