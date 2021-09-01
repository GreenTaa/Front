import React, { useEffect, Component, Fragment, useState } from "react";
import {AddSupporter} from '../../../components/redux/supporters/suppActions';
import {fetchTeams} from '../../../components/redux/teams/teamActions'
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker'
import moment from 'moment';

export default function EcommerceDashboard()  {
  
  const dispatch = useDispatch()
  var [val, setVal] = useState("Add");
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
                                    <label className="f_p text_c f_400">First Name</label>
                                    <input type="text" placeholder="First Name"
                                    value={user.Firstname}
                                    onChange={e => {
                                        const newUserObj = { ...user, Firstname: e.target.value }
                                        setUser(newUserObj);
                                    }
                                    }/>
                                </div>
                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Last Name</label>
                                    <input type="text" placeholder="Last Name"
                                    value={user.Lastname}
                                    onChange={e => {
                                        const newUserObj = { ...user, Lastname: e.target.value }
                                        setUser(newUserObj);
                                    }
                                    }/>
                                </div>
                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Phone Number</label>
                                    <input type="text" placeholder="Phone Number"
                                    value={user.Phone}
                                    onChange={e => {
                                        const newUserObj = { ...user, Phone: e.target.value }
                                        setUser(newUserObj);
                                    }
                                    }/>
                                </div>
                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Team</label>
                                    <select className="custom-select" id="team-select" 
                                    value={user.Team}
                                     onChange={e => {
                                        const newUserObj = { ...user, Team: e.target.value }
                                        setUser(newUserObj);
                                    }}>
                                    <option value="team">--Please choose your team --</option>
                                    {teams.map((option, index) => { 
                                        return  (<option  value={option} key={index}>{option} </option> )   
                                    })}
                                    </select>
                                </div>
                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Date of birth</label>
                                    <DatePicker 
                                    selected = {user.Date_birth? new Date(user.Date_birth) : user.Date_birth}
                                    onChange = { date => {
                                        setUser({
                                            ...user,
                                            Date_birth : moment(date).format("YYYY-MM-DD")
                                        })
                                    }}  
                                    dateFormat= 'yyyy/MM/dd'
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                    maxDate={new Date()}/>
                                </div>
                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Address</label>
                                    <input type="text" placeholder="Address"
                                    value={user.Address}
                                    onChange={e => {
                                        const newUserObj = { ...user, Address: e.target.value }
                                        setUser(newUserObj);
                                    }
                                    }/>
                                </div>
                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Image</label>
                                    <div>
                                    <input type="file"
                                        className="form-input"
                                        name="Avatar"
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
                                    value={user.Email}
                                    onChange={e => {
                                        const newUserObj = { ...user, Email: e.target.value }
                                        setUser(newUserObj);
                                    }
                                    }/>
                                </div>
                                <div className="form-group text_box">
                                    <label className="f_p text_c f_400">Password</label>
                                    <input type="password" placeholder="******"
                                    value={user.Password}
                                    onChange={e => {
                                        const newUserObj = { ...user, Password: e.target.value }
                                        setUser(newUserObj);
                                    }
                                    }/>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="submit" className="btn_three">{val}</button>
                                </div>
                            </form>
    </div>
  )
  }

