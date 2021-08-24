import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import ResetPasswordForm from "../components/UserComponents/ResetPasswordForm";

const ResetPassword = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Reset Your Password" Pdescription="TO EDIT"/>

            <ResetPasswordForm/>

            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default ResetPassword;