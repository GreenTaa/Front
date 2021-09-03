import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ErpFeatures from '../components/Features/ErpFeatures';
import Price from '../components/Price';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Breadcrumb from '../components/Breadcrumb';

const Homeerp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Collect Center's service" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <ErpFeatures/>
            <Price/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Homeerp;