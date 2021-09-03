import React, {Component} from 'react';
import ErpIconitem from './ErpIconitem';

class ErpFeaturesitem extends Component {
    render(){
        let {rowClass, roundClass, image} = this.props;
        return(
            <div className={`row erp_item_features ${rowClass}`}>
                <div className="col-lg-6">
                    <div className="erp_features_img_two">
                        <div className={`img_icon ${roundClass}`}><span className="pluse_1"></span><span className="pluse_2"></span><i className="icon_lightbulb_alt"></i></div>
                        <img src={require ("../../img/erp-home/" + image)} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="erp_content_two">
                        <div className="hosting_title erp_title">
                            <h2>Dashboard Collect Center</h2>
                            <p></p>
                        </div>
                        <ErpIconitem iconName="icon_menu-square_alt2" erpText="Manage your agents"/>
                        <ErpIconitem eitemClass="green" iconName="icon_ribbon_alt" erpText="Manage your trash bins"/>
                        <a href="/SignUpCenter" className="erp_btn_learn">Sign Up<i className="arrow_right"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ErpFeaturesitem;