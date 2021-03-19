import {
  Modal,
  Button,
  Row,
  Col,
  Container,
  Card,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { editVehicle } from "./../../../redux/vehicles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./customInput";
import Select from "react-select";

function Edit(props) {
  const { id } = props;
  const vehicles = useSelector((state) => state.vehicles.vehicles);
  const dispatch = useDispatch();

  const vehicle = vehicles && vehicles.find((vehicle) => vehicle.id === id);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Fuel Entry
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          id: vehicle.id,
          vehicle: `${vehicle.name} (${vehicle.licensePlate})`,
          startDate: new Date(vehicle.date).toISOString().substr(0, 10),
          distance: vehicle.distance,
          volume: vehicle.volume,
          fuelType: vehicle.fuelType,
        }}
        validationSchema={Yup.object({
          vehicle: Yup.string().required("Required"),
          startDate: Yup.date().required("Required"),
          distance: Yup.number()
            .positive("Please enter a positive number")
            .typeError("Please enter a valid number")
            .required("Required")
            .test("is-float", "Invalid float", (value) =>
              (value + "").match(/^\d*\.{1}\d*$/)
            ),
          volume: Yup.number()
            .positive("Please enter a positive number")
            .typeError("Please enter a valid number")
            .required("Required"),
          fuelType: Yup.string().oneOf([
            "Gasoline",
            "Diesel",
            "Bio-Diesel",
            "Ethanol",
          ]),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("The values", values);
          dispatch(editVehicle(values));
          setSubmitting(false);
        }}
      >
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <CustomInput as="select" name="vehicle">
                  {vehicles.map((vehicle) => {
                    return (
                      <option
                        value={`${vehicle.name} (${vehicle.licensePlate})`}
                      >{`${vehicle.name} (${vehicle.licensePlate})`}</option>
                    );
                  })}
                </CustomInput>
              </Row>
              <Row>
                <CustomInput type="date" name="startDate" />
                <CustomInput type="text" name="distance" />
              </Row>
              <Row>
                <CustomInput type="text" name="volume" />
                <CustomInput type="text" name="fuelType" as="select">
                  <option value="Gasoline">Gasoline</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Bio-Diesel">Bio-Diesel</option>
                  <option value="Ethanol">Ethanol</option>
                </CustomInput>
              </Row>
            </Container>
            <Modal.Footer>
              <Button variant="outline-dark" onClick={props.onHide}>
                Close
              </Button>
              <Button type="submit" onClick={props.onHide}>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Formik>
    </Modal>
  );
}

export default Edit;
