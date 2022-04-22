import fantasyBooks from "./Components/Fantasy";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyWarnig from "./Components/MyWarnig";
import MyBadge from "./Components/MyBadge";
import BookList from "./Components/BookList.jsx";
import SingleBook from "./Components/SingleBook";

function App() {
    return (
        <>
            <MyWarnig text="This is a Warning!" />
            <MyBadge color="info" BadgeText="NEW!" />
            <SingleBook book={fantasyBooks[0]} />
            <BookList books={fantasyBooks} />
        </>
    );
}

export default App;
