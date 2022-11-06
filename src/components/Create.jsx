import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://6366daa879b0914b75d87474.mockapi.io/crud-react", {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      })
      .catch((err) => console.log("error: " + err));
  };

  return (
    <>
      <div className="container p-4">
        <div className="d-flex justify-content-between">
          <h1>Create</h1>
          <Link to={"/read"}>
            <button className="btn btn-success">Show Data</button>
          </Link>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
