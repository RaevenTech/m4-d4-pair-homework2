import fantasyBooks from "./Components/Fantasy";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyWarnig from "./Components/MyWarnig";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook";
import BookList from "./Components/BookList.jsx";

function App() {
    return (
        <>
            <MyWarnig text="This is a Warning!" />
            <MyBadge color="danger" BadgeText={9} />
            <BookList books={fantasyBooks} />
        </>
    );
}

export default App;
