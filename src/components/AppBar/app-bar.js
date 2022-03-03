import React, { useState, useEffect } from "react";
import vlLogoWhite from "../../assests/images/vl-logo-white.svg";
import Logo from '../../assests/images/Vibrant-Living-logo.png';
import {
  Badge,
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

import { BiArrowBack } from "react-icons/bi";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { clearUserDetails, getTokenFailure } from "../../store/actions/auth";
import ProfileImg from "../../assests/images/thumbnail-profile-pic.png";
import authServices from "../../services/auth-services";
import arrowRightIcon from "../../assests/images/arrow-right.png";
import MenuIcon from "../../assests/images/search-normal.svg";

export default function AppBar() {
  const { path } = useRouteMatch();
  let history = useHistory();
  const [showMenu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);

  const logoutCognitoUser = () => {
    authServices.logout();
    sessionStorage.clear();
    dispatch(clearUserDetails());
    dispatch(getTokenFailure());
    setMenu(false);
    history.push("/");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
        style={{ background: "transparent", position: "fixed", width: "100%" }}
      >
        <Container fluid className="flex-nowrap custom-nav">
          <div>
            <div style={{ position: "absolute", right: "1rem", top: "1rem" }}>
              {/* <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setMenu(true)}
            /> */}
              <img
                alt=""
                src={MenuIcon}
                height="25"
                className="d-inline-block align-top"
                onClick={() => setMenu(true)}
              />
            </div>
            <Navbar.Brand>
              <Link to="/">
                <img
                  alt=""
                  src={Logo}
                  height="40"
                  className="d-inline-block align-top"
                  // style={{ marginTop: "-.5rem" }}
                />
              </Link>
            </Navbar.Brand>
          </div>
          <Nav style={{ paddingRight: "2rem" }}>
            <Container fluid className="px-0">
              <Row>
                <Col className="d-lg-block1 search-section1 d-none">
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0px 10px",
                    }}
                  >
                    {path === "/" ? (
                      <Button
                        className="back-btn"
                        active
                        onClick={() => history.goBack()}
                      >
                        <BiArrowBack />
                      </Button>
                    ) : null}
                  </div>
                </Col>
                  <Col className="d-flex flex-nowrap px-0 profile-menu">
                    <Nav.Link>
                      <div className="customNavBar">
                        <strong className="text-black profile-name-txt">
                          Hello, {userDetails.sub ? userDetails.phone_number : null} 
                        </strong>
                      </div>
                    </Nav.Link>
                  </Col>
              </Row>
            </Container>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas
        show={showMenu}
        onHide={() => setMenu(false)}
        backdrop={true}
        style={{ width: 350 }}
      >
        <Offcanvas.Body
          style={{ padding: "0px", position: "relative", background: "#FFF" }}
        >
          <Offcanvas.Header
            closeButton
            className="closeBtn"
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              zIndex: "100",
              color: "#ffffff",
            }}
          />
          <div style={{ position: "relative", height: 204 }}>
            <div style={{ height: 150, background: "#F38144" }}></div>
            <div
              style={{
                height: 100,
                width: 100,
                borderRadius: "50%",
                background: `url(${ProfileImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                top: 100,
                bottom: 0,
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></div>
          </div>
          <h6 className="text-center">
            {userDetails.name} <br /> {userDetails.phone_number}
          </h6>

          <ListGroup variant="flush">
            {/* <ListGroup.Item
              onClick={() => {
                setMenu(false);
                history.push("/");
              }}
            >
              <div
                className="d-flex align-items-center"
                style={{ justifyContent: "space-between" }}
              >
                Home
                <img src={arrowRightIcon} alt="icon" height="18" />
              </div>
            </ListGroup.Item> */}
            {userDetails.sub ? (
              <>
                <ListGroup.Item
                  className="menuItem"
                  // onClick={() => {
                  //   setMenu(false);
                  //   history.push("/profile");
                  // }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ justifyContent: "space-between" }}
                  >
                    My Profile
                    <img src={arrowRightIcon} alt="icon" height="18" />
                  </div>
                </ListGroup.Item>
              </>
            ) : null}
            {userDetails.sub ? (
              <>
                <ListGroup.Item
                  className="menuItem"
                  onClick={() => {
                    setMenu(false);
                    history.push("/orders");
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ justifyContent: "space-between" }}
                  >
                    Todays Deliverables
                    <img src={arrowRightIcon} alt="icon" height="18" />
                  </div>
                </ListGroup.Item>
              </>
            ) : null}
            {userDetails.sub ? (
              <>
                <ListGroup.Item
                  className="menuItem"
                  onClick={() => {
                    setMenu(false);
                    history.push("/deliverieslist");
                  }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ justifyContent: "space-between" }}
                  >
                    Deliveries List
                    <img src={arrowRightIcon} alt="icon" height="18" />
                  </div>
                </ListGroup.Item>
              </>
            ) : null}
            {userDetails.sub ? (
              <ListGroup.Item onClick={logoutCognitoUser}>
                <div
                  className="d-flex align-items-center"
                  style={{ justifyContent: "space-between" }}
                >
                  Log Out
                  <img src={arrowRightIcon} alt="icon" height="18" />
                </div>
              </ListGroup.Item>
            ) : (
              <ListGroup.Item
              //onClick={() => dispatch(showLogin())}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ justifyContent: "space-between" }}
                >
                  Log In
                  <img src={arrowRightIcon} alt="icon" height="18" />
                </div>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
