import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div>
      <WarningSign text="this is the text" />;
      <SingleBook />
    </div>
  );
}

export default App;
