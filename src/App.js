import fantasyBooks from "./Components/Fantasy";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyWarnig from "./Components/MyWarnig";
import MyBadge from "./Components/MyBadge";
import BookList from "./Components/BookList.jsx";
import SingleBook from "./Components/SingleBook";

import { Container, Col, Row } from "react-bootstrap";

function App() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <MyWarnig text="This is a Warning!" />
                        <MyBadge color="info" BadgeText="NEW!" />
                        <SingleBook book={fantasyBooks[0]} />
                    </Col>
                </Row>
            </Container>

            <BookList books={fantasyBooks} />
        </>
    );
}

export default App;
