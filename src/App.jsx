import "./App.css";
<<<<<<< HEAD
import Sign_up from "./component/sign_up";
import Join from "./component/Join";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/sign_up" element={<Sign_up />} />
      </Routes>
    </Router>
=======
import LobbyScreen from "./componets/lobbyScreen";

const App = () => {
  return (
    <>
      <LobbyScreen />
    </>
>>>>>>> af79d08 (lobby Screen is add)
  );
};

export default App;
