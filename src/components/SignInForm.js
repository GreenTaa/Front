import React, { useState } from "react";
import { queryServerApi } from "../utils/queryServerApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { FormHelperText } from "@material-ui/core";
import axios from "axios";
import { useDispatch} from 'react-redux';
import {connectUser} from './redux/connect/connectActions'

const SignIn = () => {
  const [connectedUser, setConnectedUser] = useState();
  const dispatch = useDispatch()
  const [error, setError] = useState({
    visible: false,
    message: "",
    subscription: false,
    id: "",
    severity: "",
  });
  const history = useHistory();
  const [singUp, setsingUp] = useState(false);

  const UpgradeSubscription = () => {
    history.push("/Pricing/" + error.id);
  };

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: YupSchema,
    onSubmit: async (values) => {
      console.log("Values", values);

      axios.post(`http://localhost:3000/users/login`, values)
      .then((response) => {
          console.log("responseLogin : ", response)
          setConnectedUser(response.data.user)
          console.log(response.data.user)
          dispatch(connectUser(response.data.user))
      });

      const [user, err] = await queryServerApi(
        "users/login",
        values,
        "POST",
        false
      );
      if (user === "UserNotFound") {
        setError({
          visible: true,
          message: `Username or Email doesn't exist  if you registred recently please activate your account`,
          severity: "error",
        });
      } else if (user === "WrongPassword") {
        setError({
          visible: true,
          message: "Incorrect Password",
          severity: "error",
        });
      } else {
        var myrole = user.Role;
        console.log(myrole);

        if (user.Role === "Supporter") {
          localStorage.setItem("Firstname", user.Firstname);
          localStorage.setItem("Email", user.Email);
          localStorage.setItem("Avatar", user.Avatar);
          localStorage.setItem("Role", user.Role);
          localStorage.setItem("id", user._id);
          localStorage.setItem("Team", user.Team);
          localStorage.setItem("Whishlist", user.Whishlist);
          console.log(localStorage);
           history.push("/home");
        }
        if (user.Role === "Admin") {
          
          localStorage.setItem("Email", user.Email);
          localStorage.setItem("Role", user.Role);
          localStorage.setItem("id", user._id);
          localStorage.setItem("Name", user.Firstname);
          localStorage.setItem("Picture", user.Avatar);
          console.log(localStorage);
           history.push("/app/dashboards/dashboard-admin");
          }
          if (user.Role === "Team") {
          
            localStorage.setItem("Email", user.Email);
            localStorage.setItem("Role", user.Role);
            localStorage.setItem("id", user._id);
            localStorage.setItem("Name", user.Name);
            localStorage.setItem("Picture", user.Logo);
            console.log(localStorage);
             history.push("/app/dashboards/dashboard-team");
            }
      }
    },
  });


  const SingUp = () => {
    history.push("SignUp");
  };

  const SingUpTeam = () => {
    history.push("SignUpTeam");
  };

  const SingUpCenter = () => {
    history.push("SignUpCenter");
  };

  const singUpAsDriver = () => {
    history.push("/");
  };
  const singUpAsCompany = () => {
    history.push("SignUpEntreprise");
  };
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-5">
              <div className="sign_info_content">
               <img src="http://res.cloudinary.com/dkqbdhbrp/image/upload/v1631197097/teams/ap3sklcukxnbpeh9hlk0.png" width="450px" height="400px" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>

                <form onSubmit={formik.handleSubmit}>
                  {error.visible && (
                    <MuiAlert className="mb-4" severity={error.severity}>
                      <div className="d-flex align-items-center align-content-center">
                        <span>
                          <strong className="d-block">Danger!</strong>{" "}
                          {error.message}
                        </span>
                      </div>
                    </MuiAlert>
                  )}
                  {error.subscription && (
                    <button onClick={UpgradeSubscription} className="btn_three">
                      Subscribe or Upgrade your subcsription
                    </button>
                  )}

                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">
                      Email or Username
                    </label>
                    <input
                      id="Email"
                      type="text"
                      placeholder="saasland@gmail.com"
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.Email && formik.touched.Email && (
                      <FormHelperText error={formik.errors.Email}>
                        {formik.errors.Email}
                      </FormHelperText>
                    )}
                  </div>

                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Password</label>
                    <input
                      id="Password"
                      type="password"
                      placeholder="******"
                      value={formik.values.Password}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.Password && formik.touched.Password && (
                      <FormHelperText error={formik.errors.Password}>
                        {formik.errors.Password}
                      </FormHelperText>
                    )}
                  </div>

                  <div className="extra mb_20">
                    <div className="checkbox remember">
                      <label>
                        <input type="checkbox" /> Keep me Signed in
                      </label>
                    </div>

                    <div className="forgotten-password">
                      <a href="/ResetPassword">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn_three">
                      Sign in
                    </button>
                    <div className="social_text d-flex ">
                      <div className="lead-text"> Sign in with </div>
                      <ul className="list-unstyled social_tag mb-0"></ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const YupSchema = Yup.object({
  Password: Yup.string()
    .min(3 | " your password should be 8 characters at least")
    .max(15 | " longer than 15 characters")
    .required("password is Required"),
  Email: Yup.string().required("username is Required"),
});
export default SignIn;
