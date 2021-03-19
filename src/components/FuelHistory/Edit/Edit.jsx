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
import { useRef } from "react";
import { editVehicle } from "./../../../redux/vehicles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./customInput";
import Select from "react-select";
import moment from "moment";

function Edit(props) {
  const { id } = props;
  const vehicles = useSelector((state) => state.vehicles.vehicles);
  const dispatch = useDispatch();
  const hideModal = props.onHide;
  // const modalFocus = useRef(null);
  const vehicle = vehicles && vehicles.find((vehicle) => vehicle.id === id);
  const validationSchema = Yup.object({
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
      "",
    ]),
  });
  const initialValues = vehicle
    ? {
        id: vehicle && vehicle.id,
        vehicle: `${vehicle.name} (${vehicle.licensePlate})`,
        startDate: new Date(
          moment(vehicle.date, "DD/MM/YYYY").format("YYYY-MM-DD")
        )
          .toISOString()
          .substr(0, 10),
        distance: vehicle.distance,
        volume: vehicle.volume,
        fuelType: vehicle.fuelType || "",
      }
    : {
        id: "",
        vehicle: "",
        startDate: new Date().toISOString().substr(0, 10),
        distance: 1,
        volume: 0,
        fuelType: "Gasoline",
      };

  const licensePlatesSet = new Set();
  vehicles.map((vehicle) =>
    licensePlatesSet.add(`${vehicle.name} (${vehicle.licensePlate})`)
  );
  const uniquePlates = [...licensePlatesSet.values()];

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("The values", values);
    dispatch(editVehicle(values));
    setSubmitting(false);
  };

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
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Modal.Body>
            <Form>
              <Container>
                <Row>
                  <CustomInput as="select" name="vehicle">
                    {uniquePlates.map((plate) => {
                      console.log(props);
                      return <option value={plate}>{plate}</option>;
                    })}
                  </CustomInput>
                </Row>
                <Row>
                  <CustomInput type="date" name="startDate" />
                  <CustomInput type="text" name="distance" />
                </Row>
                <Row>
                  <CustomInput type="text" name="volume" />
                  <CustomInput
                    type="text"
                    name="fuelType"
                    as="select"
                    defaultValue=""
                  >
                    <option hidden value="">
                      Select one
                    </option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Bio-Diesel">Bio-Diesel</option>
                    <option value="Ethanol">Ethanol</option>
                  </CustomInput>
                </Row>
              </Container>
              <Modal.Footer>
                <Button variant="outline-dark" onClick={hideModal}>
                  Close
                </Button>
                <Button
                  type="submit"
                  onClick={hideModal}
                  disabled={!props.isValid}
                >
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        )}
      </Formik>
    </Modal>
  );
}

export default Edit;
