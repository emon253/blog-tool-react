import "./App.css";
import Navigationbar from "./components/navbar/Navigationbar";
import Routers from "./routers/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="base">
      <Navigationbar />
      <Routers />
      <ToastContainer />

    </div>
  );
}

export default App;
