import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import data from "../src/data/menu.json";

function App() {
  return (
    <div>
      <WarningSign text="this is the text" />;
      <MyBadge color="light" text="Profile" />
      <SingleBook book={data[0]} />
      <BookList books={data} />
    </div>
  );
}

export default App;
