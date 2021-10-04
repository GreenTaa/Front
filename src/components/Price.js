import React, {Component} from 'react';
import Sectitle from './Title/Sectitle';

class Price extends Component {
    render(){
        return(
            <section className="support_price_area sec_pad">
                <div className="container custom_container p0">
                    <Sectitle sClass="sec_title text-center mb_70" Title='Fixation des prix' TitleP='Voici les 3 packs que nous offrons !'/>
                    <div className="price_content price_content_two">
                        <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <img src={require ("../img/new-home/p-1.png")} alt=""/>
                                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Silver</h5>
                                <p>Le premier des débutants</p>
                                <div className="price f_700 f_size_40 t_color2">200 dnt<sub className="f_size_16 f_400">/ mois</sub></div>
                                <ul className="list-unstyled p_list">
                                    <li><i className="ti-check"></i>3 poubelles</li>
                                    <li><i className="ti-check"></i>Pour 3 mois</li>
                                    <li><i className="ti-close"></i>Choisir l'emplacement</li>
                                    <li><i className="ti-close"></i>Ads sur les platformes Web & Mobile</li>
                                </ul>
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <div className="tag"><span>Populaire</span></div>
                                <img src={require ("../img/new-home/p-2.png")} alt=""/>
                                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Gold</h5>
                                <p>Le pack le plus populaire</p>
                                <div className="price f_700 f_size_40 t_color2">1200 dnt<sub className="f_size_16 f_400">/ mois</sub></div>
                                <ul className="list-unstyled p_list">
                                <li><i className="ti-check"></i>6 poubelles</li>
                                    <li><i className="ti-check"></i>Pour 1 année</li>
                                    <li><i className="ti-check"></i>Choisir l'emplacement</li>
                                    <li><i className="ti-close"></i>Ads sur les platformes Web & Mobile</li>
                                </ul>
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <img src={require ("../img/new-home/p-3.png")} alt=""/>
                                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Platinuim</h5>
                                <p>Le meilleur pack</p>
                                <div className="price f_700 f_size_40 t_color2">2100 dnt<sub className="f_size_16 f_400">/ mois</sub></div>
                                <ul className="list-unstyled p_list">
                                <li><i className="ti-check"></i>10 poubelles</li>
                                    <li><i className="ti-check"></i>Pour 1 année</li>
                                    <li><i className="ti-check"></i>Choisir l'emplacement</li>
                                    <li><i className="ti-check"></i>Ads sur les platformes Web & Mobile</li>
                                </ul>
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        </div> 
                    </div>
                </div>
            </section>
        )
    }
}
export default Price;