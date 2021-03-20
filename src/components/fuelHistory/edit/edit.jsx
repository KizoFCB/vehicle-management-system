import { Modal, Button, Row, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import moment from "moment";
import { editVehicle } from "../../../redux/vehicles";
import * as Yup from "yup";
import CustomInput from "./customInput";

function Edit(props) {
  const { id } = props;
  const vehicles = useSelector((state) => state.vehicles.vehicles);
  const vehicle = vehicles && vehicles.find((vehicle) => vehicle.id === id);

  const dispatch = useDispatch();
  const hideModal = props.onHide;

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

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(editVehicle(values));
    setSubmitting(false);
  };

  const licensePlatesSet = new Set();
  vehicles.map((vehicle) =>
    licensePlatesSet.add(`${vehicle.name} (${vehicle.licensePlate})`)
  );
  const uniquePlates = [...licensePlatesSet.values()];

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
                    {uniquePlates.map((plate, index) => {
                      return (
                        <option key={index} value={plate}>
                          {plate}
                        </option>
                      );
                    })}
                  </CustomInput>
                </Row>

                <Row>
                  <CustomInput
                    className="date-input"
                    type="date"
                    name="startDate"
                  />
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

Edit.defaultProps = { id: "", onHide: () => {}, show: false };

export default Edit;
