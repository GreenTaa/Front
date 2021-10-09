import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Notre équipe" tClass="t_color3" TitleP="6 jeunes passionnés du sport et qui rêvent d’une Tunisie sans plastique"/>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <Teamitem teamImage="team_01.jpg" memberN="Mohamed Baha Ben Slama" memberd="Développeur Mobile"/>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Teamitem teamImage="team_02.jpg" memberN="Samar Lahmar" memberd="UI/UX designer"/>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Wael Mouadh Ibn Ezzine" memberd="Data Scientst"/>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Teamitem teamImage="team_04.jpg" memberN="Ridha Bouyahi" memberd="Développeur systèmes embarqués"/>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Teamitem teamImage="team_5.jpg" memberN="Asma Bellil" memberd="Développeur Web "/>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Teamitem teamImage="team_6.jpg" memberN="Mohamed Aziz Sahnoun" memberd="Développeur Web "/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Team;