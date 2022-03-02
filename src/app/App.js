import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authServices from "../services/auth-services";
import {
  clearUserDetails,
  getTokenFailure,
  getTokenSucces,
  updateUserDetails,
} from "../store/actions";
import "./App.css";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getToken = sessionStorage.getItem("access_token");
    if (getToken == null) {
      dispatch(getTokenFailure());
      dispatch(clearUserDetails());
    } else {
      dispatch(getTokenSucces());
    }

    authServices
      .getUser()
      .then((res) => {
        console.log("RESSSS", res);
        dispatch(updateUserDetails(res));
      })
      .catch((err) => {
        console.log("FAILEEEDDDD", err);
      });

      // return () => {
      //   dispatch(clearUserDetails());
      // }
   }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
