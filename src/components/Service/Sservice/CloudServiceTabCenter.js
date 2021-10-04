import React from 'react';
import Sectitle from "../../Title/Sectitle";
import Tabitem from "./CloudServiceTabItem";

const CloudServiceTab =()=>{
    return(
        <section className="software_service_area sec_pad">
            <div className="container">
                <Sectitle Title="Votre Gain" TitleP="Qu'est ce que vous gagner en tant que centre de collecte si vous joindrer le réseau GreenTa?"
                 sClass="sec_title text-center mb_70"/>
                <div className="row">
{/*                     <div className="col-lg-3 col-md-3">
                        <ul className="nav nav-tabs software_service_tab" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="de-tab" data-toggle="tab" href="#de" role="tab" aria-controls="de" aria-selected="true">Deploy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="saas-tab" data-toggle="tab" href="#saas" role="tab" aria-controls="saas" aria-selected="false">SaasLand</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="ma-tab" data-toggle="tab" href="#ma" role="tab" aria-controls="ma" aria-selected="true">Manage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="secure-tab" data-toggle="tab" href="#secure" role="tab" aria-controls="secure" aria-selected="false">Secure</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="scale-tab" data-toggle="tab" href="#scale" role="tab" aria-controls="scale" aria-selected="true">Scale</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="monitor-tab" data-toggle="tab" href="#monitor" role="tab" aria-controls="monitor" aria-selected="false">Monitor</a>
                            </li>
                        </ul>
                    </div> */}
                    <div className="col-lg-12 col-md-12">
                        <div className="tab-content software_service_tab_content">
                            <div className="tab-pane fade show active" id="de" role="tabpanel" aria-labelledby="de-tab">
                                <div className="row">
                                    <Tabitem ticon="ti-face-smile" text="Augmenter et organiser la collecte du plastique" />
                                    <Tabitem colClass="offset-lg-2" ticon="ti-face-smile" text="Encourager la dégitalisation de la collecte du plastique" />
                                    <Tabitem colClass="offset-lg-3"ticon="ti-face-smile" text="Sensibiliser les citoyens pour la protection de l'environnement" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CloudServiceTab;