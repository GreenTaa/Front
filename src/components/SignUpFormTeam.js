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
                <center>
                <h1 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h1>
                </center>
                <form action="#" className="login-form sign-in-form" onSubmit={(e) => { onAdd(e) }}> 
                

                    <div className="row">  
                        <div className="col-lg-6">
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
                        </div>
                        <div className="col-lg-6">
                            <div className="login_info">
                                
                                
                                   
                                    
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
                                        <label className="btn_get1"> Select Logo
                                        <input type="file"
                                            className="form-input"
                                            name="Logo"
                                            value={fileInputState}
                                            onChange={onFileChange}
                                        /></label></div>
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
                                    
                                
                                
                            </div>
                        
                        </div>
                        
                    </div>  
                    
                                      
                        
                       <center>
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
                        <div className="">
                            <button type="submit" style={{marginTop : "10px"}} className="btn_three" >Sign Up</button>
                            
                        </div>
                         </center> 
                         </form>  
                </div>
                
            </div>
        </section>
    )
}
export default SignUpForm;