import React from "react";
import {
  FormControl,
  Col,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useField, Field } from "formik";

function CustomInput(props) {
  const [field, meta] = useField(props);
  const isError = meta.error ? true : false;

  let fieldName = field.name;
  if (field.name === "startDate" || field.name === "fuelType") {
    fieldName =
      field.name.charAt(0).toUpperCase() +
      field.name.slice(1, field.name.length - 4) +
      " " +
      field.name.slice(field.name.length - 4);
  } else if (field.name === "distance") {
    fieldName = "Odometer";
  } else {
    fieldName = field.name.charAt(0).toUpperCase() + field.name.slice(1);
  }

  return (
    <Col>
      <FormGroup>
        <FormLabel
          className="font-default-primary"
          as="label"
          htmlFor={field.name}
        >
          {fieldName}
          {field.name === "fuelType" ? <span> (optional)</span> : null}
        </FormLabel>
        <InputGroup>
          {field.name === "startDate" ? (
            <InputGroup.Prepend>
              <InputGroup.Text className="bg-white">
                <FontAwesomeIcon color="#98A9BC" icon={faCalendarAlt} />
              </InputGroup.Text>
            </InputGroup.Prepend>
          ) : null}
          {props.as !== "select" ? (
            <Field
              as={FormControl}
              {...field}
              {...props}
              className={isError ? " is-invalid" : ""}
            />
          ) : (
            <FormControl {...props} {...field}>
              {props.children}
            </FormControl>
          )}
          {field.name === "distance" || field.name === "volume" ? (
            <InputGroup.Append>
              <InputGroup.Text className="bg-white font-default-primary">
                {field.name === "distance" ? "Kms" : "Ltrs"}
              </InputGroup.Text>
            </InputGroup.Append>
          ) : null}
        </InputGroup>

        {isError && (
          <div className="text-danger font-weight-bold font-size-1">
            {meta.error}
          </div>
        )}
      </FormGroup>
    </Col>
  );
}

CustomInput.defaultProps = { type: "text", name: "" };

export default CustomInput;
