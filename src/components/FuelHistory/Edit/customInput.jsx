import React from "react";
import { useField, Field, ErrorMessage } from "formik";
import {
  FormControl,
  Col,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";

function CustomInput(props) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <Col>
      <FormGroup>
        <FormLabel as="label" htmlFor={field.name}>
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
        </InputGroup>
        {isError ? (
          <ErrorMessage name={field.name}>
            {(msg) => (
              <div className="text-danger font-weight-bold font-size-1">
                {msg}
              </div>
            )}
          </ErrorMessage>
        ) : null}
      </FormGroup>
    </Col>
  );
}

export default CustomInput;
