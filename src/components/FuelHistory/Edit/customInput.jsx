import React from "react";
import {
  FormControl,
  Col,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import { useField, Field } from "formik";

function CustomInput(props) {
  const [field, meta] = useField(props);
  const isError = meta.error ? true : false;

  return (
    <Col>
      <FormGroup>
        <FormLabel
          className="font-default-primary"
          as="label"
          htmlFor={field.name}
        >
          {field.name === "startDate" || field.name === "fuelType"
            ? field.name.charAt(0).toUpperCase() +
              field.name.slice(1, field.name.length - 4) +
              " " +
              field.name.slice(field.name.length - 4)
            : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
          {field.name === "fuelType" ? <span> (Optional)</span> : null}
        </FormLabel>
        <InputGroup>
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
              <InputGroup.Text>
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
