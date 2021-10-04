import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
class SolutionWidget extends Component {
    render(){
        let FooterData = this.props.FooterData;
        var {ftitle} = this.props;
        return(
            <Reveal effect="fadeInUp" duration={1400}>
            <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                    <h3 className="f-title f_600 t_color f_size_18 mb_40">{ftitle}</h3>
                    <ul className="list-unstyled f_list">
                    <li ><a href="/service-team">Services aux supporters</a></li>
                                    <li ><a href="/service-supporter">Services aux clubs sportifs</a></li>
                                    
                                    <li ><a href="/service-center">Services aux centres de collectes</a></li>
                                
                    </ul>
                </div>
            </div>
            </Reveal>
        )
    }
}

export default SolutionWidget;