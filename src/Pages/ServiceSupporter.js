import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
const Process = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Supporter's service" Pdescription="These are the steps you should follow to win your points!"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Compress your bottle of water" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Place the plastic in the trash bin" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Scan the QR code" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Get your points" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Process;