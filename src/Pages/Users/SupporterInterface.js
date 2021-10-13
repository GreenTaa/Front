import React, {useEffect, useState} from 'react';
import CustomNavbar from '../../components/CustomNavbar';
import Breadcrumb from '../../components/Breadcrumb';
import FooterTwo from '../../components/Footer/FooterTwo';
import FooterData from '../../components/Footer/FooterData';
import SupporterInterfaceBody from "../../components/UserComponents/newprofile";
import SignIn from '../SignIn';
import axios from "axios";


const SupporterInterface = () => {
    const [supporter,setSupporter] = useState();
    const [hystory,sethystory] = useState();
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
                "https://greentaa.herokuapp.com/supporters/"+renderId()
            ).then(function(doc){
                if(JSON.stringify(doc.data) !== JSON.stringify(supporter))
                {
                    setSupporter(doc.data);
                }
                
            });
           
            // set State
        } catch (err) {
            console.error(err.message);
        }
    };
    const getHistory= async () => {
        try {
            const Supp = await axios.get(
                "https://greentaa.herokuapp.com/trash/history/"+renderId()
            ).then(function(doc){
                if(JSON.stringify(doc.data) !== JSON.stringify(supporter))
                {
                    sethystory(doc.data);
                }
            
            });
           
            // set State
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
     
        const interval = setInterval(() => {
            getHistory();
            getSupporter();
        }, 4000);
        return () => clearInterval(interval);
    }, [ getSupporter()]);

    return(
        <div className="body_wrapper">
          
            {supporter ?
                (   <>
                
                       <SupporterInterfaceBody history={hystory} supporter={supporter}/>
                    </>
                ) : (<SignIn/>)}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default SupporterInterface;