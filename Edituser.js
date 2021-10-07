//react component for editing an user
//formik for vaildation
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import UserContext from "./Usercontext";
import { useHistory } from "react-router-dom";

function Edituser(props) {
  let history = useHistory();
  const userContext = useContext(UserContext);

  //to pupulate the credentials of the user to be edited index if the user will be used 
  let userData = userContext.userList[props.match.params.index - 1];
  // console.log(userData);
//whenever the user clicks on edit button the to populate the details initialValues will be set
  const initialValues = {
    userName: userData.userName,
    email: userData.email,
    dateOfBirth: userData.dateOfBirth,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Required";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
//function to called when submit is clicked or when the form is submitted
  function handleSubmit(obj, onSubmitProps) {
    let newUser = obj;
    // console.log(newUser);
    userData.userName = newUser.userName;
    userData.email = newUser.email;
    userData.dateOfBirth = newUser.dateOfBirth;
    onSubmitProps.resetForm();
    history.push("/");
  }

  return (
    <div className="ms-auto mx-auto mt-3 card border-primary mb-3">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <div className="">
          <div className="mb-4">
            <h1 className="h3 mb-1 text-dark-1000 mt-3 ">Edit User</h1>
          </div>
          <div className="container">
            <Form>
              <div className="col-lg-12">
                <label className="fw-bold">Name</label>
                <Field
                  type="text"
                  className="form-control mb-2"
                  name="userName"
                ></Field>
                <ErrorMessage name="userName">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12 mb-1">
                <label className="fw-bold">Email</label>
                <Field
                  type="text"
                  className="form-control mb-2"
                  name="email"
                ></Field>
                <ErrorMessage name="email">
                  {(error) => <h6 className="link-danger ">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12 mb-1">
                <label className="fw-bold">Date Of Birth</label>
                <Field
                  type="date"
                  className="form-control mb-2"
                  name="dateOfBirth"
                ></Field>
                <ErrorMessage name="dateOfBirth ">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12 mb-1">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mt-3 mb-3 text-center"
                />
              </div>
            </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default Edituser;
