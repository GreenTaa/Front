import React, {useEffect, useState} from 'react';
import CustomNavbar from '../../components/CustomNavbar';
import Breadcrumb from '../../components/Breadcrumb';
import FooterTwo from '../../components/Footer/FooterTwo';
import FooterData from '../../components/Footer/FooterData';
import SupporterInterfaceBody from "../../components/UserComponents/SupporterInterfaceBody";
import SignInForm from '../../components/SignInForm';
import axios from "axios";


const SupporterInterface = () => {
    const [supporter,setSupporter] = useState();
    const renderId = () => {
        let id = 0
        if(localStorage.getItem('id') != null)
        {
            id= localStorage.getItem('id');
        }
        else {
            id="60949f6ba158b41be4b96bf0";
        }
        return id;
    }

    const getSupporter= async () => {
        try {
            const Supp = await axios.get(
                "http://localhost:3000/supporters/"+renderId()
            ).then(function(doc){
                if(JSON.stringify(doc.data) === JSON.stringify(supporter))
                {
                    console.log("same")
                }
                else{
                 
                    setSupporter(doc.data);
                    console.log("elseeee");
                   
                }
            });
           
            // set State
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
      getSupporter();
        
        const interval = setInterval(() => {
            getSupporter();
        }, 2000);
        return () => clearInterval(interval);
    }, [ getSupporter()]);

    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Customer Interface" Pdescription=""/>
            {supporter ?
                (   <>
                
                       <SupporterInterfaceBody supporter={supporter}/>
                    </>
                ) : (<SignInForm/>)}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default SupporterInterface;