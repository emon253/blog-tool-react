import "./App.css";
import Navigationbar from "./components/navbar/Navigationbar";
import Routers from "./routers/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="base">
      <Navigationbar />
      <Routers />
    </div>
  );
}

export default App;
