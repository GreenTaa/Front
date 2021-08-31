import React, { useEffect, useState, useRef } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";
import { useForm } from "react-hook-form";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import ThumbnailImage from "../../components/cards/ThumbnailImage";
import ThumbnailLetters from "../../components/cards/ThumbnailLetters";
const UserCardExamples = (props) => {
  const [username, setusername] = useState(props.supporter.Firstname);
  const [email, setemail] = useState(localStorage.Email);
  const [phone, setphone] = useState(props.supporter.Phone);
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState(props.supporter.Address);
  const [Date_birth, setDate_birth] = useState(props.supporter.Date_birth);

  const [file, setfile] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const fileInputRef = useRef();
  const [images, setImages] = useState(null);
  

  const onFileChange = (event) => {
    // Update the state
    const file = event.target.files[0];
    setImages(event.target.files[0]);
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  useEffect(() => {
    if (fileInputRef) fileInputRef.current.value = null;
  }, [images]);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  async function testih(img) {
    var wow;
    var values;
    console.log(images);
    if (images !== null) {
      wow = await getBase64(images);
    } else wow = null;
    localStorage.setItem("Email", email);

    if (password === "" && wow === null) {
      values = {
        Email: email,
        Firstname: username,
        Phone: phone,
        Address: address,
        Date_birth: Date_birth,
      };
    } else if (password !== "" && wow === null) {
      values = {
        Email: email,
        Firstname: username,
        Phone: phone,
        Password: password,
        Address: address,
        Date_birth: Date_birth,
      };
    } else if (password !== "" && wow !== null) {
      values = {
        Email: email,
        Firstname: username,
        Phone: phone,
        Avatar: wow,
        Password: password,
        Address: address,
        Date_birth: Date_birth,
      };
    } else if (password === "" && wow !== null) {
      values = {
        Email: email,
        Firstname: username,
        Phone: phone,
        Avatar: wow,
        Address: address,
        Date_birth: Date_birth,
      };
    }

    const [user, err] = await queryServerApi(
      "supporters/" + localStorage.id,
      values,
      "PUT",
      false
    );

    console.log(values);
  }
  return (
    <div>
      <CardBody>
        <div className="text-center">
          <CardImg
            top
            src={props.supporter.Avatar}
            alt="Card image cap"
            className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
          />
          <NavLink to="/app/ui/cards">
            <CardSubtitle className="mb-1">
              {props.supporter.Firstname}
            </CardSubtitle>
          </NavLink>
          <CardText className="text-muted text-small mb-4">
            {props.supporter.Team}
          </CardText>

          <Form>
            <FormGroup row>
              <Colxx sm={6}>
                <FormGroup>
                  <Label for="exampleEmailGrid">
                    <IntlMessages id="forms.email" />
                  </Label>
                  <Input
                    type="email"
                    name="exampleEmailGrid"
                    id="exampleEmailGrid"
                    placeholder="email"
                    onChange={(e) => setemail(e.target.value)}
                    defaultValue={localStorage.Email}
                  />
                </FormGroup>
              </Colxx>

              <Colxx sm={6}>
                <FormGroup>
                  <Label for="examplePasswordGrid">Username</Label>
                  <Input
                    type="text"
                    id="examplePasswordGrid"
                    placeholder="Username"
                    onChange={(e) => setusername(e.target.value)}
                    defaultValue={props.supporter.Firstname}
                  />
                </FormGroup>
              </Colxx>

              <Colxx sm={6}>
                <FormGroup>
                  <Label for="examplePasswordGrid">New password</Label>
                  <Input
                    type="password"
                    name="examplePasswordGrid"
                    id="examplePasswordGrid"
                    placeholder="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </FormGroup>
              </Colxx>

              <Colxx sm={6}>
                <FormGroup>
                  <Label for="exampleAddress2Grid">Confirm password</Label>
                  <Input
                    type="password"
                    name="exampleAddress2Grid"
                    id="exampleAddress2Grid"
                    placeholder="Password"
                  />
                </FormGroup>
              </Colxx>
              <Colxx sm={4}>
                <FormGroup>
                  <Label for="exampleEmailGrid">Birth date</Label>
                  <Input
                    type="date"
                    name="exampleTextGrid"
                    id="exampleTextGrid"
                    placeholder="Address"
                    onChange={(e) => setDate_birth(e.target.value)}
                    defaultValue={props.supporter.Date_birth}
                  />
                </FormGroup>
              </Colxx>
              <Colxx sm={4}>
                <FormGroup>
                  <Label for="exampleEmailGrid">Address</Label>
                  <Input
                    type="text"
                    name="exampleTextGrid"
                    id="exampleTextGrid"
                    placeholder="Address"
                    onChange={(e) => setaddress(e.target.value)}
                    defaultValue={props.supporter.Address}
                  />
                </FormGroup>
              </Colxx>

              <Colxx sm={4}>
                <FormGroup>
                  <Label for="exampleZipGrid">Phone</Label>
                  <Input
                    type="text"
                    name="exampleZipGrid"
                    id="exampleZipGrid"
                    placeholder="Phone"
                    onChange={(e) => setphone(e.target.value)}
                    defaultValue={props.supporter.Phone}
                  />
                </FormGroup>
              </Colxx>

              <Colxx sm={4}>
                <FormGroup>
                  <Label for="exampleZipGrid">Avatar</Label>
                  <Input
                    type="file"
                    name="exampleZipGrid"
                    id="exampleZipGrid"
                    placeholder="zip"
                    ref={fileInputRef}
                    onChange={onFileChange}
                  />
                </FormGroup>
              </Colxx>
            </FormGroup>

            <div>
              {previewSource && (
                <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: "150px", width: "220px" }}
                />
              )}
            </div>
            <br></br>
            <Button outline size="sm" color="primary" onClick={(e) => testih()}>
              Edit
            </Button>
          </Form>
        </div>
      </CardBody>
    </div>
  );
};

export default UserCardExamples;
