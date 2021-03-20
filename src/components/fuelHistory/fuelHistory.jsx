import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./navigation/navigation";
import Header from "./header/header";
import Filters from "./filters/filters";

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
