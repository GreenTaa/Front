import React, { useEffect, Component, Fragment, useState } from "react";
import {AddSupporter} from '../../../components/redux/supporters/suppActions';
import {fetchTeams} from '../../../components/redux/teams/teamActions'
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker'
import moment from 'moment';

export default function EcommerceDashboard()  {
  
  const dispatch = useDispatch()
  const [center, setCenter] = useState({Role : "Center", Active : 1})
  var Region = ["Tunis", "Ariana", "Ben Arous", "Mannouba", "Bizerte", "Nabeul", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le Kef", "Sousse", "Monastir", "Mahdia", "Kasserine", "Sidi Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabès", "Médenine", "Tozeur", "Kebili", "Ttataouine"]

  const teamsData = useSelector((state) => state.teams)
  useEffect(() => {
    dispatch(fetchTeams())
    console.log("Teams : ", teamsData)}
    , [])
  const [user, setUser] = useState({Role : "Supporter", Active : 1})
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
      user.Avatar = base64EncodedImage
  }

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
  return (
    <div>
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
                                        <label className="f_p text_c f_400">Phone</label>
                                        <input type="text" placeholder="Phone"
                                        onChange={e => {
                                            const newUserObj = { ...center, Phone: e.target.value }
                                            setCenter(newUserObj);
                                        }
                                        }/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Region</label>
                                        <select className="custom-select" id="Region-select" 
                                         onChange={e => {
                                            const newUserObj = { ...center, Region: e.target.value }
                                            setCenter(newUserObj);
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
  )
  }

