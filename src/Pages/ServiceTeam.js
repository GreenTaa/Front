import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import CloudBanner from '../components/Banner/CloudBanner';
import CloudService from '../components/Service/CloudService';
import CloudServiceTab from '../components/Service/Sservice/CloudServiceTab';
import CloudFeatures from '../components/Features/CloudFeatures';
import CloudFeaturesTwo from '../components/Features/CloudFeaturesTwo';
import DeveloperTab from '../components/DeveloperTab';
import Partner from '../components/Partner';
import ServiceSubscribe from '../components/ServiceSubscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Breadcrumb from '../components/Breadcrumb';

const HomeCloud = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Services aux clubs sportifs" Pdescription="Vous trouvez un exemple du store et du dashboard ainsi que votre bénéfice en tant que club sportif!"/>
            <CloudFeatures/>
            <CloudServiceTab/>
            <FooterTwo  FooterData={FooterData}/>
        </div>
    )
}
export default HomeCloud;