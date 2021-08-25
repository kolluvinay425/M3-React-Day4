import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import MyBadge from "./components/MyBadge";

function App() {
  return (
    <div>
      <WarningSign text="this is the text" />;
      <MyBadge text="some Text" color="danger" />
      <SingleBook />
    </div>
  );
}

export default App;
