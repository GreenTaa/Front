import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ErpFeatures from '../components/Features/ErpFeatures';
import Price from '../components/Price';
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';

const Homeerp = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="erp_menu" hbtnClass="er_btn" nClass="mr-auto"/>
            <ErpFeatures/>
            <Price/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>
    )
}
export default Homeerp;