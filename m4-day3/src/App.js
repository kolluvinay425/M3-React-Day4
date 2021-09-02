import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import data from "../src/data/menu.json";
import Registration from "./components/Registration";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route
          render={() => <WarningSign text="this is the text" />}
          path="/"
        />
        {/* <WarningSign text="this is the text" /> */}
        <Route component={Registration} exact path="/register" />
        {/* <MyBadge color="light" text="Profile" /> */}
        <Route
          render={() => <MyBadge color="light" text="Profile" />}
          path="/"
        />
        {/* <SingleBook book={data[0]} /> */}
        <Route
          render={(routerProps) => (
            <SingleBook {...routerProps} book={data[0]} />
          )}
          path="/"
        />
        <BookList books={data} />
      </Router>
    </div>
  );
}

export default App;
