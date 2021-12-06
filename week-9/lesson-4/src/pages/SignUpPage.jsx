import React from "react";
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";
import { ErrorMessage, Formik } from "formik";

const SignUpPage = () => {
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Please Required"),
    lastName: yup.string().min(2).max(30).required("Please Required"),
    phoneNumber: yup.string().min(9).max(30).required("Please Required"),
    gender: yup.string().min(4).max(6).required("Please Required"),
    email: yup.string().email().min(4).max(255).required("Please Required"),
    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .min(8)
      .max(24)
      .required("Please Required"),
  });

  return (
    <div className="sign-up">
      <Formik
        validationSchema={schema}
        onSubmit={(user) => {
            console.log(user)
        }}
        initialValues={{
          name: "",
          lastName: "",
          phoneNumber: "",
          gender: "",
          email: "",
          password: "", 
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                isValid={!errors.name && touched.name}
                isInvalid={!!errors.name}
                value={values.name}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                onChange={handleChange}
                isValid={!errors.lastName && touched.lastName}
                isInvalid={!!errors.lastName}
                value={values.lastName}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phoneNumber"
                onChange={handleChange}
                isValid={!errors.phoneNumber && touched.phoneNumber}
                isInvalid={!!errors.phoneNumber}
                value={values.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="gender"
                onChange={handleChange}
                isValid={!errors.gender && touched.gender}
                isInvalid={!!errors.gender}
                value={values.gender}
              >
                <option>Select your gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                  {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                isValid={!errors.email && touched.email}
                isInvalid={!!errors.email}
                value={values.email}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                isValid={!errors.password && touched.password}
                isInvalid={!!errors.password}
                value={values.password}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
