import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddSupporter} from './redux/supporters/suppActions'
import axios from 'axios'

const SignUpForm =()=>{
/*     const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Phone, setPhone] = useState('');
    const [Team, setTeam] = useState('');
    const [Date_birth, setDate_birth] = useState('');
    const [Address, setAddress] = useState('');
    const [Avatar, setAvatar] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState(''); */
    const dispatch = useDispatch()
    const [user, setUser] = useState({Role : "Supporter", Active : 1})
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')

    //const user={Firstname: Firstname,Lastname: Lastname, Phone: Phone, Team: Team, Date_birth: Date_birth, Address: Address, Avatar: Avatar, Email: Email, Password: Password, Role : "Supporter", Active : 1};
/*     const test = (e) => {
            console.log(user)
            axios.post(`http://localhost:3000/users/addsupp`, user)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
                dispatch(AddingSupporter(response.data))
            })
            .catch((error) => console.log("errorAddinng  : ", error.response));
    };
 */
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
        user.Avatar = base64EncodedImage
    }


    const onAdd = (e) => {
        e.preventDefault()
        console.log("submitting : ", user)
        if (!previewSource) return
        uploadImage(previewSource)
        console.log("entred")
        dispatch(AddSupporter(user))
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
                                        <label className="f_p text_c f_400">First Name</label>
                                        <input type="text" placeholder="First Name"
                                        onChange={e => {
                                            const newUserObj = { ...user, Firstname: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Last Name</label>
                                        <input type="text" placeholder="Last Name"
                                        onChange={e => {
                                            const newUserObj = { ...user, Lastname: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Phone Number</label>
                                        <input type="text" placeholder="Phone Number"
                                        onChange={e => {
                                            const newUserObj = { ...user, Phone: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Team</label>
                                        <input type="text" placeholder="Team"
                                        onChange={e => {
                                            const newUserObj = { ...user, Team: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Date of birth</label>
                                        <input type="text" placeholder="2010-05-19"
                                        onChange={e => {
                                            const newUserObj = { ...user, Date_birth: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Address</label>
                                        <input type="text" placeholder="Address"
                                        onChange={e => {
                                            const newUserObj = { ...user, Address: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Image</label>
                                        <input type="file"
                                            className="form-input"
                                            name="Avatar"
                                            value={fileInputState}
                                            onChange={onFileChange}
                                        />
                                    </div>
                                    <div>
                                        {previewSource && (<img src={previewSource} alt="chosen" style={{height:'300px'}}/>)}
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" placeholder="saasland@gmail.com"
                                        onChange={e => {
                                            const newUserObj = { ...user, Email: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" placeholder="******"
                                        onChange={e => {
                                            const newUserObj = { ...user, Password: e.target.value }
                                            setUser(newUserObj);
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