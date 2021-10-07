//react component for creating an user
//formik for vaildation
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserContext from "./Usercontext";
import { useHistory } from "react-router";
function Createuser() {
  const userContext = useContext(UserContext);
  let history = useHistory();

  const initialValues = { userName: "", email: "", dateOfBirth: "" };

  const validate = (values) => {
    // console.log(values)
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
    userContext.setUserList([...userContext.userList, newUser]);
    history.push("/");
    onSubmitProps.resetForm();
  }

  return (
    <div className=" ms-auto mx-auto mt-3 card border-primary mb-3">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <div className="text-start">
          <div className=" mb-4">
            <h1 className="h3 mb-1 text-dark-1000 mt-3 text-center">
              Create User
            </h1>
          </div>
          <div className="container">
            <Form>
              {/* <div className="row"> */}
              <div className="col-lg-12">
                <label className="fw-bold">Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="userName"
                ></Field>
                <ErrorMessage name="userName">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12">
                <label className="fw-bold">Email</label>
                <Field
                  type="text"
                  className="form-control"
                  name="email"
                ></Field>
                <ErrorMessage name="email">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12">
                <label className="fw-bold">Date Of Birth</label>
                <Field
                  type="date"
                  className="form-control"
                  name="dateOfBirth"
                ></Field>
                <ErrorMessage name="dateOfBirth">
                  {(error) => <h6 className="link-danger">{error}</h6>}
                </ErrorMessage>
              </div>
              <div className="col-lg-12">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mt-3 mb-3 text-center"
                />
              </div>

              {/* </div> */}
            </Form>
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default Createuser;
