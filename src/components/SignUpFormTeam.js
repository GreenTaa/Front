import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddTeam} from './redux/teams/teamActions'

const SignUpForm =()=>{
    const dispatch = useDispatch()
    const [team, setTeam] = useState({Role : "Team", Active : 1})
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    
    const onFileChange = event => {
        // Update the state 
        const file = event.target.files[0];
        console.log(event.target.files[0])
        previewFile(file)
    };
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
        }
    }

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        team.Logo = base64EncodedImage
    }
    

    var Region = ["Tunis", "Ariana", "Ben Arous", "Mannouba", "Bizerte", "Nabeul", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le Kef", "Sousse", "Monastir", "Mahdia", "Kasserine", "Sidi Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabès", "Médenine", "Tozeur", "Kebili", "Ttataouine"]

    const onAdd = (e) => {
        e.preventDefault()
        console.log("submitting : ", team)
        if (!previewSource) return
        uploadImage(previewSource)
        console.log("entred")
        dispatch(AddTeam(team))
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
                                            const newUserObj = { ...team, Name: e.target.value }
                                            setTeam(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Acronym</label>
                                        <input type="text" placeholder="Sname"
                                        onChange={e => {
                                            const newUserObj = { ...team, Sname: e.target.value }
                                            setTeam(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Phone</label>
                                        <input type="text" placeholder="Phone"
                                        onChange={e => {
                                            const newUserObj = { ...team, Phone: e.target.value }
                                            setTeam(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Region</label>
                                        <select className="custom-select" id="Region-select" 
                                         onChange={e => {
                                            const newUserObj = { ...team, Region: e.target.value }
                                            setTeam(newUserObj);
                                        }}>
                                        <option value="Region">--Please select your Region --</option>
                                        {Region.map((option, index) => { 
                                            return  (<option  value={option} key={index}>{option} </option> )   
                                        })}
                                        </select>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Address</label>
                                        <input type="text" placeholder="Address"
                                        onChange={e => {
                                            const newUserObj = { ...team, Address: e.target.value }
                                            setTeam(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Logo</label>
                                        <div>
                                        <input type="file"
                                            className="form-input"
                                            name="Logo"
                                            value={fileInputState}
                                            onChange={onFileChange}
                                        /></div>
                                    </div>
                                    <div>
                                        {previewSource && (<img src={previewSource} alt="chosen" style={{height:'300px'}}/>)}
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" placeholder="saasland@gmail.com"
                                        onChange={e => {
                                            const newUserObj = { ...team, Email: e.target.value }
                                            setTeam(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" placeholder="******"
                                        onChange={e => {
                                            const newUserObj = { ...team, Password: e.target.value }
                                            setTeam(newUserObj);
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