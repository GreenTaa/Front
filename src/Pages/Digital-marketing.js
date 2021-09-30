import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AgencyBanner from '../components/Banner/AgencyBanner';
import BannerData from '../components/Banner/BannerData';

import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import FeaturesHome from '../components/FeaturesHome';

import Reveal from 'react-reveal/Reveal';


const DigitalMarketing = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <AgencyBanner BannerData={BannerData}/>

            
            <FeaturesHome></FeaturesHome>
            {/* <MarketingService ServiceData={ServiceData}/> */}

            {/* <AgencyAbout ServiceData={ServiceData}/>
            <Features/>
            <MarketingTestimonial BannerData={BannerData}/>
            <AgencyAction/> */}
            <div className="partner_logo">
                        {
                            BannerData.ClientsLogo.map(item =>{
                                return(
                                    <Reveal key={item.id} effect="fadeInLeft" duration={1500}>
                                        <div className="p_logo_item">
                                            <a href="/#"><img src={require("../img/home3/" + item.image)} alt="" width={item.width} height={item.height} /></a>
                                        </div>
                                    </Reveal>
                                )
                            })
                        }
                    </div>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default DigitalMarketing;