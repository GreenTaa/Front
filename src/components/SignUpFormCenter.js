import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddCenter} from './redux/collectCenters/centerActions'

const SignUpForm =()=>{
    const dispatch = useDispatch()
    const [center, setCenter] = useState({Role : "Center", Active : 1})



    const onAdd = (e) => {
        e.preventDefault()
        console.log("submitting : ", center)
        console.log("entred")
        dispatch(AddCenter(center))
        console.log("passed")
    }
    
    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting using our <br/><span className="f_700">amazing</span> products</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Premium Access to all Products</li>
                                    <li><i className="ti-check"></i> Free Testing Tools</li>
                                    <li><i className="ti-check"></i> Unlimited User Accounts</li>
                                </ul>
                                <button type="submit" className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                <form action="#" className="login-form sign-in-form" onSubmit={(e) => { onAdd(e) }}>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Name</label>
                                        <input type="text" placeholder="Name"
                                        onChange={e => {
                                            const newUserObj = { ...center, Name: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Region</label>
                                        <input type="text" placeholder="Region"
                                        onChange={e => {
                                            const newUserObj = { ...center, Region: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Phone</label>
                                        <input type="text" placeholder="Phone"
                                        onChange={e => {
                                            const newUserObj = { ...center, Phone: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Address</label>
                                        <input type="text" placeholder="Address"
                                        onChange={e => {
                                            const newUserObj = { ...center, Address: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" placeholder="saasland@gmail.com"
                                        onChange={e => {
                                            const newUserObj = { ...center, Email: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" placeholder="******"
                                        onChange={e => {
                                            const newUserObj = { ...center, Password: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> I agree to terms and conditions of this website
                                            </label>
                                        </div>
                                        
                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three">Sign Up</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUpForm;