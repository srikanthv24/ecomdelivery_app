import React, { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
//import { useHistory } from "react-router";
import {
  Image,
  Alert,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import VLogo from "../../assests/logos/Vibrant-Living-logo.png";
import auth_services from '../../services/auth-services';
import { authLoading, updateUserDetails, loginSuccess, authError} from '../../store/actions';
import "./styles.css";


function Login() {
    //const history = useHistory();
    const dispatch = useDispatch();
    const { tokenList, loading, error } = useSelector((state) => state.auth);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    

    // const ClientId = process.env.CLIENT_ID;
  
    //console.log("tokenList:::::::::", tokenList);
  
    const getUserDetails = () => {
      auth_services.getUser().then((res) => {
        dispatch(updateUserDetails(res));
      });
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authLoading());
        auth_services
          .login(phone, password)
          .then((res) => {
            getUserDetails();
            //console.log("OnSuccess: ", res, res.accessToken);
            dispatch(loginSuccess(res));
            sessionStorage.setItem("access_token", res.accessToken.jwtToken);
            sessionStorage.setItem("id_token", res.idToken.jwtToken);
            // dispatch(hideLogin())
          })
          .catch((err) => {
            //console.log("onFailure: ", err.message);
            dispatch(authError(err.message));
          });
      };

      if (loading) {
        return <p className="fs-5 fw-bold mt-2 text-center">Loading....</p>;
      }

  return (
    <div className="container text-center login-container">
      <Row>
        <Col xs={12} sm={12} lg={12}>
          <div className="text-center mt-4">
            <Image src={VLogo} width="100" />
          </div>
          <p className="fs-5 fw-bold mt-4 mb-3 secondary-color" style={{fontFamily:'Roboto Mono',fontWeight:'500',fontSize:'15px', textTransform:'uppercase'}}>Sign In</p>
          <Form className="customform">
            <InputGroup className="mb-3">
              <InputGroup.Text id="phone">+91</InputGroup.Text>
              <FormControl
                autoFocus
                type="number"
                placeholder="Mobile Number"
                maxLength={10}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </InputGroup>
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                placeholder="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FloatingLabel>
            <Button
              className="w-100 mb-3 custom-btn"
              variant="primary"
              size="sm"
              onClick={handleSubmit}
            >
               SignIn
            </Button>
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
