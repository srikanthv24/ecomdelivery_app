import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authServices from "../services/auth-services";
import {
  clearUserDetails,
  getTokenFailure,
  getTokenSucces,
  updateUserDetails,
} from "../store/actions";
import "./App.css";
import Routes from "./Routes";
import { SessionModal } from "../components/Session/session-modal";

function App() {
  const dispatch = useDispatch();
  const {showModal, errors } = useSelector(state => state.sessionExpire);
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
        //console.log("RESSSS", res);
        dispatch(updateUserDetails(res));
      })
      .catch((err) => {
        //console.log("FAILEEEDDDD", err);
      });

      // return () => {
      //   dispatch(clearUserDetails());
      // }
   }, []);

   console.log("ENVIRONMENT:::", process.env);

  return (
    <div className="App">
      <SessionModal 
				showModal={showModal}
				// message={errors[0]?.message}
			/>
      <Routes />
    </div>
  );
}

export default App;
