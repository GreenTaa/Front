import React from "react";
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
  Form

} from "reactstrap";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import ThumbnailImage from "../../components/cards/ThumbnailImage"
import ThumbnailLetters from "../../components/cards/ThumbnailLetters"

const UserCardExamples = (props) => {
  return (
         
<div>
            <CardBody>
              <div className="text-center">
                <CardImg top src={props.supporter.Avatar} alt="Card image cap" className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail" />
                <NavLink to="/app/ui/cards">
                  <CardSubtitle className="mb-1">{props.supporter.Firstname}</CardSubtitle>
                </NavLink>
                <CardText className="text-muted text-small mb-4">{props.supporter.Team}</CardText>

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
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={6}>
                      <FormGroup>
                        <Label for="examplePasswordGrid">
                          <IntlMessages id="forms.password" />
                        </Label>
                        <Input
                          type="password"
                          name="examplePasswordGrid"
                          id="examplePasswordGrid"
                          placeholder="password"
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={12}>
                      <FormGroup>
                        <Label for="exampleAddressGrid">
                          <IntlMessages id="forms.address" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleAddressGrid"
                          id="exampleAddressGrid"
                          placeholder="address"
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={12}>
                      <FormGroup>
                        <Label for="exampleAddress2Grid">
                          <IntlMessages id="forms.address2" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleAddress2Grid"
                          id="exampleAddress2Grid"
                          placeholder="address"
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={6}>
                      <FormGroup>
                        <Label for="exampleEmailGrid">
                          <IntlMessages id="forms.city" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleTextGrid"
                          id="exampleTextGrid"
                          placeholder="city"
                        />
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={4}>
                      <FormGroup>
                        <Label>
                            sate
                        </Label>
                        <Input type="select">
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </Input>
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={2}>
                      <FormGroup>
                        <Label for="exampleZipGrid">
                          <IntlMessages id="forms.zip" />
                        </Label>
                        <Input
                          type="text"
                          name="exampleZipGrid"
                          id="exampleZipGrid"
                          placeholder="zip"
                        />
                      </FormGroup>
                    </Colxx>
                  </FormGroup>

                  <Button outline size="sm" color="primary">Edit</Button>

                </Form>
              </div>
            </CardBody>
         </div>
  )
}

export default UserCardExamples
