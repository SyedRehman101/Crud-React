import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  const handleUpdate = (id,name,email) => {

        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);


  };

  const handleDelete = (id) => {
    axios
      .delete(`https://6366daa879b0914b75d87474.mockapi.io/crud-react/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get("https://6366daa879b0914b75d87474.mockapi.io/crud-react")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        return console.log("erroe: " + error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <br />
        <div className="d-flex justify-content-between">
          <h1>Read Opeartion</h1>
          <Link to={"/"}>
            <button className="btn btn-success">Create Data</button>
          </Link>
        </div>
        <br />
        <br />
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          {data.map((currElem) => {
            return (
              <>
                <tbody className="table-info">
                  <tr>
                    <th scope="row">{currElem.id}</th>
                    <td>{currElem.name}</td>
                    <td>{currElem.email}</td>
                    <td>
                      <Link to={"/update"}>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handleUpdate(
                              currElem.id,
                              currElem.name,
                              currElem.email
                            )
                          }
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(currElem.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
