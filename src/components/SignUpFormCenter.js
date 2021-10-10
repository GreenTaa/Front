import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddCenter} from './redux/collectCenters/centerActions'

const SignUpForm =()=>{
    const dispatch = useDispatch()
    const [center, setCenter] = useState({Role : "Center", Active : 1})

    var Region = ["Tunis", "Ariana", "Ben Arous", "Mannouba", "Bizerte", "Nabeul", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le Kef", "Sousse", "Monastir", "Mahdia", "Kasserine", "Sidi Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabès", "Médenine", "Tozeur", "Kebili", "Ttataouine"]


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
                <center>
                <h1 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h1>
                </center>
                <form action="#" className="login-form sign-in-form" onSubmit={(e) => { onAdd(e) }}> 
                

                    <div className="row">  
                        <div className="col-lg-6">
                        <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Nom</label>
                                        <input type="text" placeholder="Nom"
                                        onChange={e => {
                                            const newUserObj = { ...center, Name: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div> 
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Télephone</label>
                                        <input type="text" placeholder="Télephone"
                                        onChange={e => {
                                            const newUserObj = { ...center, Phone: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Région</label>
                                        <select className="custom-select" id="Region-select" 
                                         onChange={e => {
                                            const newUserObj = { ...center, Region: e.target.value }
                                            setCenter(newUserObj);
                                        }}>
                                        <option value="Region">-- Séléctionner votre région s'il vous plaît --</option>
                                        {Region.map((option, index) => { 
                                            return  (<option  value={option} key={index}>{option} </option> )   
                                        })}
                                        </select>
                                    </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_info">
                                
                                
                                   
                                    
                            <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Adresse</label>
                                        <input type="text" placeholder="Adresse"
                                        onChange={e => {
                                            const newUserObj = { ...center, Address: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email </label>
                                        <input type="text" placeholder="saasland@gmail.com"
                                        onChange={e => {
                                            const newUserObj = { ...center, Email: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Mot de passe</label>
                                        <input type="password" placeholder="******"
                                        onChange={e => {
                                            const newUserObj = { ...center, Password: e.target.value }
                                            setCenter(newUserObj);
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
                                    <input type="checkbox"/> J'accepte les termes et conditions de ce site web
                                </label>
                            </div>
                            
                            <div className="forgotten-password">
                                <a href="/#">Mot de passe oubliée?</a>
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