import fantasyBooks from "./Components/Fantasy";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyWarnig from "./Components/MyWarnig";
import MyBadge from "./Components/MyBadge";
import BookList from "./Components/BookList.jsx";
import SingleBook from "./Components/SingleBook";

import { Container, Col, Row } from "react-bootstrap";
import CommentArea from "./Components/CommentArea";

function App() {
    return (
        <>
            <MyWarnig text="This is a Warning!" />
            <MyBadge color="info" BadgeText="NEW!" />
            <Container>
                <Row>
                    <Col>
                        <SingleBook book={fantasyBooks[0]} />
                    </Col>
                </Row>
                <CommentArea />
            </Container>

            <BookList books={fantasyBooks} />
        </>
    );
}

export default App;
