// this is default or like the homepage which displays the users with their list

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "./Usercontext";
function Users() {
  const userContext = useContext(UserContext);
  //function called when the delete button is hit
  function handleDelete(index) {
    //before deleting the user confirm window will be popped to get the confirmation
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      userContext.userList.splice(index - 1, 1);
      userContext.setUserList([...userContext.userList]);
    }
  }
  return (
    <div className="mx-auto ms-auto col-lg-8">
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight h3 mb-2 text-dark-800">
          Users
        </div>
        <div className="p-2 bd-highlight">
          {" "}
          <Link to="/create_user" className=" btn btn-xl btn-primary ">
            Create User
          </Link>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Examples
          </h6>
        </div>
        <div className="card-body ">
          <div className="table-responsive">
            <table
              className="table table-bordered text-dark"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {userContext.userList.map((obj, index) => {
                  
                  return (
                    <tr key ={obj.email}> 
                      <td>{index + 1}</td>
                      <td>{obj.userName}</td>
                      <td>{obj.email}</td>
                      <td>{obj.dateOfBirth}</td>
                      <td>
                        <button
                          className="btn btn-danger mx-3 mb-2 mt-2"
                          onClick={() => {
                            handleDelete(index + 1);
                          }}
                        >
                          Delete
                        </button>
                        <Link
                          to={`/edit_user/${index + 1}`}
                          data={index}
                          className="btn btn-warning  ps-4 px-4  ms-3 mb-2 mt-2 text-dark"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
