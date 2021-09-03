import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
class TeamWidget extends Component {
    render(){
        let FooterData = this.props.FooterData;
        var {ftitle} = this.props;
        return(
            <Reveal effect="fadeInUp" duration={1800}>
            <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                    <h3 className="f-title f_600 t_color f_size_18 mb_40">{ftitle}</h3>
                    <ul className="list-unstyled f_list">
                        
                                    <li ><a href="https://www.google.com/maps/place/Orange+Digital+Center/@36.8351071,10.2409206,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd35ba5553b6bd:0x5c85ecd2ec5812c7!8m2!3d36.8350443!4d10.2431386">Orange Digital Center, Lac1, Tunis, Tunisie</a></li>
                                    
                                
                    </ul>
                </div>
            </div>
            </Reveal>
        )
    }
}

export default TeamWidget;