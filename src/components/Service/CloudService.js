import React, { Component } from 'react';
import CloudServiceItem from './CloudServiceItem';

class CloudService extends Component{
    render(){
        return(
            <section className="software_featured_area">
                <div className="container">
                    <h2 className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp" data-wow-delay="0.3s">En tant que supporter<br/> Vous gagnez :</h2>
                    <div className="row software_featured_info">
                        <CloudServiceItem icon="icon1.png" sTitle="Promotion sur les stores de votre club favoris"/>
                        <CloudServiceItem icon="icon2.png" sTitle="Satisfaction personnelle par rapport à votre passion et à l'environnement"/>
                        <CloudServiceItem icon="icon3.png" sTitle="Faire gagner votre club dans le classement nationnal de Greenta"/>
                    </div>
                </div>
                <div className="container">
                    <h2 className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp" data-wow-delay="0.3s">En tant que club sportif<br/> Vous gagnez :</h2>
                    <div className="row software_featured_info">
                        <CloudServiceItem icon="icon1.png" sTitle="Améliorer l'image du club"/>
                        <CloudServiceItem icon="icon2.png" sTitle="Adhérer à une cause liée à la protection de l'environnement"/>
                        <CloudServiceItem icon="icon3.png" sTitle="Participer à une compétition nationale pour la protection de l'environnement"/>
                    </div>
                </div>
                <div className="container">
                    <h2 className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp" data-wow-delay="0.3s">En tant que centre de collecte<br/> Vous gagnez :</h2>
                    <div className="row software_featured_info">
                        <CloudServiceItem icon="icon1.png" sTitle="Augmenter et organiser la collecte du plastique"/>
                        <CloudServiceItem icon="icon2.png" sTitle="Encourager la dégitalisation de la collecte du plastique"/>
                        <CloudServiceItem icon="icon3.png" sTitle="Sensibiliser les citoyens pour la protection de l'environnement"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default CloudService;