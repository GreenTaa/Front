import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AddSupporter} from './redux/supporters/suppActions'
import {fetchTeams} from './redux/teams/teamActions'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';

const SignUpForm =()=>{
    const dispatch = useDispatch()
    const [user, setUser] = useState({Role : "Supporter", Active : 1})
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const teamsData = useSelector((state) => state.teams)
    
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

    useEffect(() => {
          dispatch(fetchTeams())
          console.log("Teams : ", teamsData)}
    
      , [])

    var teams = teamsData.teams.map(team => team.Sname)

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
                <center>
                <h1 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h1>
                </center>
                <form action="#" className="login-form sign-in-form" onSubmit={(e) => { onAdd(e) }}> 
                

                    <div className="row">  
                        <div className="col-lg-6">
                        <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Prénom</label>
                                        <input type="text" placeholder="Prénom"
                                        onChange={e => {
                                            const newUserObj = { ...user, Firstname: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Nom</label>
                                        <input type="text" placeholder="Nom"
                                        onChange={e => {
                                            const newUserObj = { ...user, Lastname: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Télephone</label>
                                        <input type="text" placeholder="Télephone"
                                        onChange={e => {
                                            const newUserObj = { ...user, Phone: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Club sportif</label>
                                        <select className="custom-select" id="team-select" 
                                         onChange={e => {
                                            const newUserObj = { ...user, Team: e.target.value }
                                            setUser(newUserObj);
                                        }}>
                                        <option value="team">-- Sélectionner votre club sportif d'il vous plaît --</option>
                                        {teams.map((option, index) => { 
                                            return  (<option  value={option} key={index}>{option} </option> )   
                                        })}
                                        </select>
                                    </div> 
                        </div>
                        <div className="col-lg-6">
                            <div className="login_info">
                                
                                
                                   
                                    
                            <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Date de naissance</label>
                                        <DatePicker 
                                        selected = {user.Date_birth? new Date(user.Date_birth) : user.Date_birth}
                                        onChange = { date => {
                                            setUser({
                                                ...user,
                                                Date_birth : moment(date).format("YYYY-MM-DD")
                                            })
                                        }}  
                                        dateFormat= 'dd/MM/yyyy'
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        maxDate={new Date()}/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Image</label>
                                        <div>
                                        <label className="btn_get"> Sélectionner Avatar
                                            <input type="file"
                                            className="form-input"
                                            name="Avatar"
                                            value={fileInputState}
                                            onChange={onFileChange}
                                        /></label>
                                        </div>
                                    </div> 
                                    <div>
                                        {previewSource && (<img src={previewSource} alt="chosen" style={{height:'300px'}}/>)}
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email</label>
                                        <input type="text" placeholder="saasland@gmail.com"
                                        onChange={e => {
                                            const newUserObj = { ...user, Email: e.target.value }
                                            setUser(newUserObj);
                                        }
                                        }/>
                                    </div> 
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Mot de passe</label>
                                        <input type="password" placeholder="******"
                                        onChange={e => {
                                            const newUserObj = { ...user, Password: e.target.value }
                                            setUser(newUserObj);
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