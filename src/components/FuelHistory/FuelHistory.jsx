import { Card, Container, Row, Col } from "react-bootstrap";
import Filters from "./Filters/Filters";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";

function FuelHistory() {
  return (
    <>
      <Row>
        <Col className="pr-0">
          <Navigation />
        </Col>
        <Container as={Col} lg={10} md={10} className="pl-0 m-0">
          <Header />
          <Filters />
        </Container>
      </Row>
    </>
  );
}

export default FuelHistory;
