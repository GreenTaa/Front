import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import CloudServiceTab from '../components/Service/Sservice/CloudServiceTabSupporter';

const Process = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Services aux supporters" Pdescription="Voici les étapes que vous devez suivre pour gagner vos points!"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Localiser la poubelle la plus proche" descriptions="Localise les poubelles les plus proches de votre position actuelle à partir de la map"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Placer votre QR code devant la camera" descriptions="Vous devez fournir votre QR code généré par l’application mobile à la poubelle afin de vous identifier."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Placer l'objet dans l’emplacement dédié" 
                        descriptions="Placer l'objet dans l’emplacement dédié pour que la poubelle peut identifier le type de ce dernier."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Recevoir vos points" 
                        descriptions="Une fois le plastique est identifié, Vous ainsi que votre équipe gagnerez des points"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Process;