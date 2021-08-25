import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
function App() {
  return (
    <div>
      <MyBadge color="primary" text="strive" />
      <BookList />
    </div>
  );
}

export default App;
