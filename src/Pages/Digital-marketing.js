import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AgencyBanner from '../components/Banner/AgencyBanner';
import BannerData from '../components/Banner/BannerData';
import MarketingService from '../components/Service/MarketingService';
import ServiceData from '../components/Service/ServiceData';
import AgencyAbout from '../components/About/AgencyAbout';
import Features from '../components/Features/Features';
import MarketingTestimonial from '../components/Testimonial/MarketingTestimonial';
import AgencyAction from '../components/AgencyAction';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import HRService from '../components/Service/HRService';
import Reveal from 'react-reveal/Reveal';


const DigitalMarketing = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <AgencyBanner BannerData={BannerData}/>

            <HRService ServiceData={ServiceData}/>
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
                                            <a href="/#"><img src={require("../img/home3/" + item.image)} alt=""/></a>
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